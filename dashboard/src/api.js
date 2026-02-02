import axios from "axios";

const api = axios.create({
  baseURL: "https://zerodha-clone-jp0j.onrender.com",
  withCredentials: true,
});

export default api;
