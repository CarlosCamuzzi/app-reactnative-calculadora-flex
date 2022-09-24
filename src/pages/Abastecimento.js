import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { RadioButton, Text } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";

const Abastecimento = () => {

  const navigation = useNavigation();
  const [checked, setChecked] = useState('gas');

  return (
    <Container>
      <Header
        title={'Abastecimento'}
        goBack={() => navigation.goBack()} // Só se houver tela empilhada
      />
      <Body>
        <View style={styles.radioContainer}>
          <View style={styles.radioContainerItem}>
            <RadioButton
              value='gas'
              status={checked === 'gas' ? 'checked' : 'unchecked'}
              color={'red'}
              onPress={() => setChecked('gas')}
            />
            <Text>Gasolina</Text>
          </View>

          <View style={styles.radioContainerItem}>
            <RadioButton
              value='eta'
              status={checked === 'eta' ? 'checked' : 'unchecked'}
              color={'green'}
              onPress={() => setChecked('eta')}
            />
            <Text>Etanol</Text>
          </View>
        </View>
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
});

export default Abastecimento;