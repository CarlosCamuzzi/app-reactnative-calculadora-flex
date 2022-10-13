import React, { useState } from "react";
import { StyleSheet, View, Alert } from 'react-native';
import { TextInput, Button, Headline } from "react-native-paper";

import Container from "../components/Container";
import Body from "../components/Body";
import Input from "../components/Input";
import Logo from "../components/Logo";

import { useNavigation } from "@react-navigation/native";
import { useUser } from "../contexts/UserContext";

import { login } from "../backend/auth.services";

const Login = () => {

  const navigation = useNavigation();
  // Validar Autenticação em handleLogin
  const { setSigned, setName } = useUser();

  const [email, setEmail] = useState('carlos@pucminas.br');
  const [password, setPassword] = useState('pucminas')

  const handleLogin = () => {
    login({
      email: email,
      password: password
    }).then(res => {
      console.log(email, password);
      if (res && res.user) {
        setSigned(true);
        setName(res.user.name);
      } else {
        Alert.alert('Atenção', 'Usuário ou senha inválidos!');
      }
    });
  }

  return (
    <Container>
      <View style={styles.header}>
        <Logo />
      </View>
      <Headline style={styles.textHeader}>Fuel Manager</Headline>
      <Body>
        <Input
          label='Email'
          value={email}
          left={<TextInput.Icon icon='account' />}
          onChangeText={(text) => setEmail(text)}
        />
        <Input
          label='Senha'
          value={password}
          secureTextEntry
          left={<TextInput.Icon icon='key' />}
          onChangeText={(text) => setPassword(text)}
        />
        <Button
          style={styles.button}
          mode="contained"
          onPress={() => handleLogin()}>
          LOGIN
        </Button>
        <Button
          style={styles.button}
          mode="outlined"
          onPress={() => navigation.navigate('Register')}>
          REGISTER
        </Button>
      </Body>
    </Container>
  );
}

const styles = StyleSheet.create({
  button: {
    marginBottom: 8,
  },
  textHeader: {
    textAlign: 'center',
  },
  header: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 12,
  }
});

export default Login;