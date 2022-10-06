import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet } from "react-native";

import { FAB, List, Text } from 'react-native-paper';
import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";

import { getGastos, insertGastos } from "../services/GastosServiceDB";

import { useIsFocused } from '@react-navigation/native';

const Gastos = () => {

  const navigation = useNavigation();
  const [gastos, setGastos] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {  
    getGastos().then((dados) => {
      console.log(dados); // TESTE OK
      setGastos(dados);
    });
  }, [isFocused]);

  const renderItem = ({ item }) => (
    <List.Item
      title={
        'R$ ' + item.valor.toFixed(2) +
        ' (R$ ' + item.preco.toFixed(2) + ')'
      }
      description={item.odometro + ' km'}
      left={props =>
        <List.Icon {...props}
          color={item.tipo == 0 ? 'red' : 'green'}
          icon='gas-station'
        />
      }
      right={props =>
        <Text {...props} style={{ alignSelf: 'center' }}>
          {item.data}
        </Text>
      }
      onPress={() => navigation.navigate('Abastecimento', { item })}
    />
  );

  return (
    <Container>
      <Header title="Fuel Manager" />
      <Body>
        <FlatList
          data={gastos}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
        <FAB
          icon='plus'
          style={styles.fab}
          onPress={() => navigation.navigate('Abastecimento')}
        />
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 20,
  },
})

export default Gastos;