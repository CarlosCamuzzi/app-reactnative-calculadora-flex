import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Abastecimento from "../pages/Abastecimento";
import Home from "../pages/Home";
import Register from "../pages/Register";

const Stack = createNativeStackNavigator();

const Main = () => {
  return (
    <Stack.Navigator initialRouteName="Register">
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