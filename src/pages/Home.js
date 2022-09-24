import React, { useState } from 'react';
import { BottomNavigation } from 'react-native-paper';

import Calculadora from './Calculadora';
import Gastos from './Gastos';

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'calculadora', title: 'Calculadora', focusedIcon: 'calculator' },
    { key: 'gastos', title: 'Gastos', focusedIcon: 'gas-station'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    calculadora: Calculadora,
    gastos: Gastos,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default Home;