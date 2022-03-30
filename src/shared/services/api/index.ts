import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const Loteria: AxiosInstance = axios.create({
  baseURL: 'https://brainn-api-loterias.herokuapp.com/api/v1/',
});

export default Loteria;
