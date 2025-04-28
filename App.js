import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import TelaJavaScript from "./componentes/TelaJavaScript";
import TelaNode from "./componentes/TelaNode";
import TelaReact from "./componentes/TelaReact";

const MenuNav = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <MenuNav.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "#0485e0",
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "gray",
        }}
      >
        <MenuNav.Screen 
          name="Tarefas"
          component={TelaJavaScript}
          options={{
            title: 'Minhas Tarefas',
            headerStyle: {
              backgroundColor: '#0485e0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
            ),
          }}
        />
        <MenuNav.Screen 
          name="Progresso"
          component={TelaNode}
          options={{
            title: 'Progresso',
            headerStyle: {
              backgroundColor: '#1E88E5',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="check-circle" color={color} size={size} />
            ),
          }}
        />
        <MenuNav.Screen 
          name="Configurações"
          component={TelaReact}
          options={{
            title: 'Configurações',
            headerStyle: {
              backgroundColor: '#0485e0',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 24,
            },
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="cog" color={color} size={size} />
            ),
          }}
        />
      </MenuNav.Navigator>
    </NavigationContainer>
  );
}
