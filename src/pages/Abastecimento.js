import React, { useState, useEffect } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { RadioButton, Text, TextInput, Button, Appbar } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import DateTimePicker from '@react-native-community/datetimepicker';
import moment from 'moment';

import Input from '../components/Input'
import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";

import { insertGastos } from "../services/GastosServiceDB";


const Abastecimento = ({ route }) => {
  const navigation = useNavigation();

  // Se veio dados na rota, então seta os valores, caso contrário, não seta nada
  const { item } = route.params ? route.params : {};

  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false); // pop up

  const [tipo, setTipo] = useState('gas');
  const [preco, setPreco] = useState('');
  const [valor, setValor] = useState('');
  const [odometro, setOdometro] = useState('');
  const [data, setData] = useState(moment(new Date()).format('DD/MM/YYYY')); // Data atual

  useEffect(() => {
    if (item) { // Passando os dados para a tela
      setTipo(item.tipo == 0 ? 'gas' : 'eta')
      setData(item.data);
      setPreco(item.preco.toFixed(2));
      setValor(item.valor.toFixed(2));
      setOdometro(item.odometro.toFixed(0));
    }
  }, [item]);

  // Se não houver o item, chama insert, se houver chama update
  const handleSalvar = () => {
    if (!item) {
      insertGastos({
        tipo: tipo == 'gas' ? 0 : 1,
        data: data,
        preco: preco,
        valor: valor,
        odometro: odometro,
      }).then();
    } else {

    }
    navigation.goBack();
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
        { // Se o item existir
          item &&
          <Appbar.Action icon='trash-can' onPress={() => handleExcluir()} />
        }
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

        { // Configuração Date
          show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={'date'}
              is24Hour={true}
              display='default'
              onTouchCancel={() => setShow(false)} // Para fechar
              onChange={(event, date) => {
                setShow(false);
                setData(moment(date).format('DD/MM/YYYY'));
              }}
            />
          )}

        <TouchableOpacity onPress={() => setShow(true)}>
          <Input
            label='Data'
            value={data}
            left={<TextInput.Icon icon='calendar' />}
            editable={false}
          />
        </TouchableOpacity>

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

        { // Só renderiza se houver item (na rota)
          item &&
          <Button
            style={styles.btn}
            mode='contained'
            buttonColor={'red'}
            onPress={() => handleExcluir()}
          >Excluir </Button>
        }

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