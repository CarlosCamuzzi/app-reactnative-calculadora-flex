import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Abastecimento from "../pages/Abastecimento";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
       <Stack.Screen
        name='Login'
        component={Login}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name='Register'
        component={Register}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name='Home'
        component={Home}
        options={{
          header: () => null
        }}
      />
      <Stack.Screen
        name='Abastecimento'
        component={Abastecimento}
        options={{
          header: () => null
        }}
      />
    </Stack.Navigator>
  );
}

export default Main;