import React from "react";

// Hook Criado no UserContext
import { useUser } from "../contexts/UserContext";
import Main from "./Main";
import Auth from "./Auth";

// Chama o Hook useUser e verifica se está logado ou não, direcionando a rota conforme desejado
const Route = () => {

  const { signed } = useUser();

  return (
    <>
      {
        signed
          ? <Main />
          : <Auth />
      }
    </>
  );
}

export default Route;