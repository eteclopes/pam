import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView, TextInput, Modal, Button } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import estilo from './estilo';

export default function TelaJavaScript(props) {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');
  const [modalVisivel, setModalVisivel] = useState(false);

  const alternarTarefa = (id) => {
    setTarefas(tarefas.map(tarefa =>
      tarefa.id === id ? { ...tarefa, feito: !tarefa.feito } : tarefa
    ));
  };

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const novaTarefaObj = {
        id: Math.random().toString(),
        nome: novaTarefa,
        feito: false
      };
      setTarefas([...tarefas, novaTarefaObj]);
      setModalVisivel(false);
      setNovaTarefa('');
    }
  };

  const cancelarTarefa = () => {
    setModalVisivel(false);
    setNovaTarefa('');
  };

  const excluirTarefa = (id) => {
    setTarefas(tarefas.filter(tarefa => tarefa.id !== id));
  };

  return (
    <View style={estilo.fundoJS}>
      <ScrollView>
        {tarefas.map(tarefa => (
          <View key={tarefa.id} style={estilo.tarefa}>
            <TouchableOpacity onPress={() => alternarTarefa(tarefa.id)}>
              <MaterialCommunityIcons
                name={tarefa.feito ? "checkbox-marked" : "checkbox-blank-outline"}
                size={24}
                color="#0485e0"
              />
            </TouchableOpacity>
            <Text style={{ marginLeft: 10 }}>{tarefa.nome}</Text>
            <TouchableOpacity onPress={() => excluirTarefa(tarefa.id)} style={{ marginLeft: 'auto' }}>
              <MaterialCommunityIcons
                name="trash-can-outline"
                size={24}
                color="red"
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 30,
          right: 30,
          backgroundColor: '#0485e0',
          borderRadius: 50,
          padding: 15,
        }}
        onPress={() => setModalVisivel(true)}
      >
        <MaterialCommunityIcons name="plus" size={24} color="white" />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisivel}
        onRequestClose={cancelarTarefa}
      >
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}>
          <View style={{
            width: 300,
            padding: 20,
            backgroundColor: 'white',
            borderRadius: 10,
          }}>
            <Text style={{ fontSize: 18, marginBottom: 10 }}>Adicionar Tarefa</Text>
            <TextInput
              style={{ borderBottomWidth: 1, marginBottom: 20, padding: 5 }}
              placeholder="Digite o nome da tarefa"
              value={novaTarefa}
              onChangeText={setNovaTarefa}
            />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <Button title="Cancelar" onPress={cancelarTarefa} />
              <Button title="Confirmar" onPress={adicionarTarefa} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
