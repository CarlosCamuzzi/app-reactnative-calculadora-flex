import react from "react";

import { useNavigation } from "@react-navigation/native";

import Container from "../components/Container";
import Header from "../components/Header";
import Body from "../components/Body";

const Abastecimento = () => {

  const navigation = useNavigation();

  return (
    <Container>
      <Header
        title={'Abastecimento'}
        goBack={() => navigation.goBack()} // Só se houver tela empilhada
      />
      <Body>

      </Body>
    </Container>
  );
}

export default Abastecimento;