import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import TelaJavaScript from "./componentes/TelaJavaScript"
import TelaNode from "./componentes/TelaNode"
import TelaReact from "./componentes/TelaReact"

const MenuNav = createDrawerNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <MenuNav.Navigator>
      <MenuNav.Screen name="Java Script "  component={TelaJavaScript} />
      <MenuNav.Screen name="Node "  component={TelaNode} />
      <MenuNav.Screen name="React "  component={TelaReact} />
    </MenuNav.Navigator>
   </NavigationContainer>
  );
}


