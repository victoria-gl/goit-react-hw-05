import axios from "axios";

const API_KEY = "002df5a2f3d179e6b5853b1896396456";
const BASE_URL = "https://api.themoviedb.org/3";

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${API_KEY}`,
  },
});

export default api;
