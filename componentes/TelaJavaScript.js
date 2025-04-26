import React, { useState } from 'react';
import { Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import estilo from './estilo';

export default function TelaJavaScript(props) {
  const [t1, setT1] = useState(false);
  const [t2, setT2] = useState(false);
  const [t3, setT3] = useState(false);
  const [t4, setT4] = useState(false);
  const [t5, setT5] = useState(false);
  const [t6, setT6] = useState(false);
  const [t7, setT7] = useState(false);
  const [t8, setT8] = useState(false);
  const [t9, setT9] = useState(false);
  const [t10, setT10] = useState(false);

  return (
    <View style={estilo.fundoJS}>
      <ScrollView>
        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT1(!t1)}>
            <MaterialCommunityIcons name={t1 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Escovar os Dentes</Text>
        </View>

        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT2(!t2)}>
            <MaterialCommunityIcons name={t2 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Tomar Café da Manhã</Text>
        </View>

        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT3(!t3)}>
            <MaterialCommunityIcons name={t3 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Estudar React Native</Text>
        </View>

        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT4(!t4)}>
            <MaterialCommunityIcons name={t4 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Fazer Exercício</Text>
        </View>

        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT5(!t5)}>
            <MaterialCommunityIcons name={t5 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Ler um Livro</Text>
        </View>

        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT6(!t6)}>
            <MaterialCommunityIcons name={t6 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Revisar as Anotações</Text>
        </View>

        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT7(!t7)}>
            <MaterialCommunityIcons name={t7 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Arrumar a Cama</Text>
        </View>

        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT8(!t8)}>
            <MaterialCommunityIcons name={t8 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Verificar Emails</Text>
        </View>

        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT9(!t9)}>
            <MaterialCommunityIcons name={t9 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Preparar o Almoço</Text>
        </View>

        <View style={estilo.tarefa}>
          <TouchableOpacity onPress={() => setT10(!t10)}>
            <MaterialCommunityIcons name={t10 ? "checkbox-marked" : "checkbox-blank-outline"} size={24} color="#0485e0" />
          </TouchableOpacity>
          <Text style={{ marginLeft: 10 }}>Meditar por 10 Minutos</Text>
        </View>
      </ScrollView>
    </View>
  );
}
