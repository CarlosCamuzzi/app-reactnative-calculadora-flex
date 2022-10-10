import React, { createContext, useContext, useState } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  const [signed, setSigned] = useState(false);
  const [name, setName] = useState(false);
  
  return (
    <UserContext.Provider
      value={{
        signed,
        setSigned,
        name, 
        setName
      }}>
      {console.log(signed)}
      {children}  
    </UserContext.Provider>
  );
}

export default UserProvider;

// Hook para utilizar o componente, para retornar as funções ou variáveis desejadas
export const useUser = () => {
  const context = useContext(UserContext);
  const { signed, setSigned, name, setName } = context;

  return{ signed, setSigned, name, setName }
}