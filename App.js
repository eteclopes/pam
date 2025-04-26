import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from 'react-native-vector-icons'; // Importando os ícones
import TelaJavaScript from "./componentes/TelaJavaScript"; // Tela de Tarefas
import TelaNode from "./componentes/TelaNode"; // Tela de Progresso

const MenuNav = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#0485e0", // Cor de fundo da barra de navegação (aba)
          },
          tabBarActiveTintColor: "white", // Cor do texto da aba ativa
          tabBarInactiveTintColor: "gray", // Cor do texto da aba inativa
        }}
      >
        <MenuNav.Screen 
          name="Tarefas"
          component={TelaJavaScript}
          options={{
            title: 'Minhas Tarefas', // Personalizando o título da aba
            headerStyle: {
              backgroundColor: '#0485e0', // Cor de fundo da barra superior (header)
            },
            headerTintColor: '#fff', // Cor do título na barra superior
            headerTitleStyle: {
              fontWeight: 'bold', // Título em negrito
              fontSize: 24, // Tamanho do título
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
            ), // Ícone de planilha (representando tarefas)
          }}
        />
        <MenuNav.Screen 
          name="Progresso"
          component={TelaNode} // Substitua com a tela real de Progresso
          options={{
            title: 'Progresso', // Título da aba
            headerStyle: {
              backgroundColor: '#1E88E5', // Cor do header da tela Progresso
            },
            headerTintColor: '#fff', // Cor do título na barra superior
            headerTitleStyle: {
              fontWeight: 'bold', // Título em negrito
              fontSize: 24, // Tamanho do título
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="check-circle" color={color} size={size} />
            ), // Ícone de "check" (representando progresso)
          }}
        />
        <MenuNav.Screen 
          name="Configurações"
          component={TelaNode} // Usando a mesma tela ou qualquer componente desejado para Configurações
          options={{
            title: 'Configurações', // Título da aba
            headerStyle: {
              backgroundColor: '#0485e0', // Cor do header da tela Configurações
            },
            headerTintColor: '#fff', // Cor do título na barra superior
            headerTitleStyle: {
              fontWeight: 'bold', // Título em negrito
              fontSize: 24, // Tamanho do título
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ), // Ícone de Configurações (engrenagem)
          }}
        />
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}
