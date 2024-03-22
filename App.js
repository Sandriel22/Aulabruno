import React from "react";

import { NavigationContainer } from '@react-navigation/native'; // Importaçoes para funcionalidade do navigation
import { createNativeStackNavigator } from "@react-navigation/native-stack"; // Importaçoes para funcionalidade do  StackNavigation

import Home from "./src/pages/Home"; // Importando paginas
import Sobre from "./src/pages/Sobre";// Importando paginas

const stack = createNativeStackNavigator(); // Criando e chamando a  Navegação 

export default function App(){
  return(
    <NavigationContainer>
      <stack.Navigator> 
        <stack.Screen name="Home" component={Home} //Tipo de Navegação
        options={{
           headerShown: false // Tirando Header
           }} /> 

        <stack.Screen name="Sobre" component={Sobre} //Tipo de Navegação
        options={{
          title:'Pagina Sobre' // Nomeando pagina
          }}/>
      </stack.Navigator>
    </NavigationContainer>
  )
}