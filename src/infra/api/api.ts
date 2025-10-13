import axios from "axios";

const api = axios.create({
  baseURL: "https://dadosabertos.camara.leg.br/api/v2",
  timeout: 100000
});

export default api;