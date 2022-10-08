import API from "./webapi.services";
// URL gerada no local tunnel
import { BASE_URL } from './urls';

// /register: cadastrar usuário

// POST
export const register = async (param) => {
  try {
    return await API.post(`${BASE_URL}/register`, param).then(
      response => {
        return response.data;
      },
      error => {
        console.log("response failed\n" + error);
        return null;
    }
    );
  } catch (error) {
    console.log("catch" + error);
    return null;
  }
}