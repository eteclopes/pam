import React, { useState } from 'react';
import { Text, View, Switch, ScrollView, StyleSheet } from 'react-native';

export default function TelaReact() {
  const [notificacoes, setNotificacoes] = useState(true);
  const [modoEscuro, setModoEscuro] = useState(false);
  const [sincronizarNuvem, setSincronizarNuvem] = useState(true);
  const [vibracao, setVibracao] = useState(false);
  const [atualizacoesAutomaticas, setAtualizacoesAutomaticas] = useState(true);

  return (
    <View style={styles.fundoReact}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.tarefa}>
          <Text style={styles.texto}>Notificações</Text>
          <Switch 
            value={notificacoes} 
            onValueChange={() => setNotificacoes(previousState => !previousState)} 
          />
        </View>
        <View style={styles.tarefa}>
          <Text style={styles.texto}>Modo Escuro</Text>
          <Switch 
            value={modoEscuro} 
            onValueChange={() => setModoEscuro(previousState => !previousState)} 
          />
        </View>
        <View style={styles.tarefa}>
          <Text style={styles.texto}>Sincronizar com Nuvem</Text>
          <Switch 
            value={sincronizarNuvem} 
            onValueChange={() => setSincronizarNuvem(previousState => !previousState)} 
          />
        </View>
        <View style={styles.tarefa}>
          <Text style={styles.texto}>Vibração</Text>
          <Switch 
            value={vibracao} 
            onValueChange={() => setVibracao(previousState => !previousState)} 
          />
        </View>
        <View style={styles.tarefa}>
          <Text style={styles.texto}>Atualizações Automáticas</Text>
          <Switch 
            value={atualizacoesAutomaticas} 
            onValueChange={() => setAtualizacoesAutomaticas(previousState => !previousState)} 
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  fundoReact: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingTop: 20,
  },
  tarefa: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    marginHorizontal: 20,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
});
