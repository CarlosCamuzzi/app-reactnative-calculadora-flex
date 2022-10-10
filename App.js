import React, { useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";

import UserProvider from './src/contexts/UserContext';
import Route from './src/navigations/Route';

const App = () => {

  return (
    <NavigationContainer>
      <UserProvider>
        <Route />
      </UserProvider>
    </NavigationContainer>
  );
}



export default App;