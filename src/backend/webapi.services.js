import axios, { AxiosInstance } from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Interceptar a requisição antes que aconteça, para assim passar o cabeçalho.
// Se tem token de autenticação, então seta 
const onRequest = async (config) => {
  const token = await AsyncStorage.getItem('@TOKEN_KEY'); // Pega o valor da chave
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}

const setupInterceptorsTo = (axiosInstance) => {
  axiosInstance.interceptors.request.use(onRequest);
  return axiosInstance;
}

const API = axios.create();
setupInterceptorsTo(API);

export default API;
