import API from "./webapi.services";
// URL gerada no local tunnel
import { BASE_URL } from './urls';

// /register: cadastrar usuário

// GET
export const getGastos = async (param) => {
  try {
    return await API.get(`${BASE_URL}/gastos`, param).then(
      response => {
        return response.data;
      },
      error => {
        console.log("get failed\n" + error);
        return null;
    }
    );
  } catch (error) {
    console.log("catch" + error);
    return null;
  }
}

// POST
export const insertGastos = async (param) => {
  try {
    return await API.post(`${BASE_URL}/gastos`, param).then(
      response => {
        return response.data;
      },
      error => {
        console.log("insertGasto failed\n" + error);
        return null;
    }
    );
  } catch (error) {
    console.log("catch" + error);
    return null;
  }
}

// PUT
export const updateGastos = async (param) => {
  try {
    return await API.put(`${BASE_URL}/gastos/${param.id}`, param).then(
      response => {
        return response.data;
      },
      error => {
        console.log("updateGasto failed\n" + error);
        return null;
    }
    );
  } catch (error) {
    console.log("catch" + error);
    return null;
  }
}

// DELETE
export const deleteGastos = async (id) => {
  try {
    return await API.delete(`${BASE_URL}/gastos/${id}`).then(
      response => {
        return response.data;
      },
      error => {
        console.log("updateGasto failed\n" + error);
        return null;
    }
    );
  } catch (error) {
    console.log("catch" + error);
    return null;
  }
}