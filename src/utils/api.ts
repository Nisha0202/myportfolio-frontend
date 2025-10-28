import axios from "axios";

const api = axios.create({
  baseURL: "https://myportfolio-backend-chi.vercel.app/api",
});

export default api;
