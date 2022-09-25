import React, { useState } from "react";
import { StyleSheet, View, } from "react-native";
import { RadioButton, Text, TextInput, Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Input from '../components/Input'

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";

const Abastecimento = () => {
  const navigation = useNavigation();
  
  const [tipo, setTipo] = useState('gas');
  const [preco, setPreco] = useState();
  const [valor, setValor] = useState();
  const [odometro, setOdometro] = useState();
  const [data, setData] = useState();

  const handleSalvar = () => {
    console.log("Salvar");
  }

  const handleExcluir = () => {
    console.log("Excluir");
  }

  return (
    <Container>
      <Header
        title={'Abastecimento'}
        goBack={() => navigation.goBack()} // Só se houver tela empilhada        
      >
        <Appbar.Action icon='check' onPress={() => handleSalvar()} />
        <Appbar.Action icon='trash-can' onPress={() => handleExcluir()} />
      </Header>
      <Body>
        <View style={styles.radioContainer}>
          <View style={styles.radioContainerItem}>
            <RadioButton
              value='gas'
              status={tipo === 'gas' ? 'checked' : 'unchecked'}
              color={'red'}
              onPress={() => setTipo('gas')}
            />
            <Text>Gasolina</Text>
          </View>

          <View style={styles.radioContainerItem}>
            <RadioButton
              value='eta'
              status={tipo === 'eta' ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => setTipo('eta')}
            />
            <Text>Etanol</Text>
          </View>
        </View>

        <Input
          label='Data'
          value={data}
          left={<TextInput.Icon icon='calendar' />}
          onChangeText={(text) => setData(text)}
        />
        <Input
          label='Preço'
          value={preco}
          left={<TextInput.Icon icon='currency-brl' />}
          onChangeText={(text) => setPreco(text)}
        />
        <Input
          label='Valor'
          value={valor}
          left={<TextInput.Icon icon='currency-brl' />}
          onChangeText={(text) => setValor(text)}
        />
        <Input
          label='Odômetro'
          value={odometro}
          left={<TextInput.Icon icon='camera-timer' />}
          onChangeText={(text) => setOdometro(text)}
        />

        <Button
          style={styles.btn}
          mode='contained'
          onPress={() => handleSalvar()}
        >Salvar </Button>

        <Button
          style={styles.btn}
          mode='contained'
          buttonColor={'red'}
          onPress={() => handleExcluir()}
        >Excluir </Button>

      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  radioContainer: {
    flexDirection: "row",
    margin: 8,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  radioContainerItem: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  btn: {
    margin: 8,
  },
});

export default Abastecimento;