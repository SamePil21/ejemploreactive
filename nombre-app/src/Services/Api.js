import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers:{
    "Contenet-Type":"application/json"
  }
});

export default api;