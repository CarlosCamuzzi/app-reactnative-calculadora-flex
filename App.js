import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import Container from './src/components/Container';
import Header from './src/components/Header';
import Body from './src/components/Body';
import Input from './src/components/Input';

const App = () => {

  const [gas, setGas] = useState();
  const [eta, setEta] = useState();
  const [res, setRes] = useState();

  return (
    <Container>
     <Header title={'Calculadora Flex'}/>
      <Body>
        <Input         
          label='Preço Gasolina'
          value={gas}
          onChangeText={(text) => setGas(text)}        
        />
        <Input           
          label='Preço Etanol'
          value={eta}
          onChangeText={(text) => setEta(text)}        
        />
        <Button
          mode='contained'
          onPress={() => { }}
        >
          Calcular
        </Button>
        <Text style={styles.text}> {res} </Text>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    marginBottom: 8,
  },
  text: {
    textAlign: 'center',
    margin: 8,
  }
});

export default App;