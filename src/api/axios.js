import _axios from "axios";
const BASE_URL = "http://localhost:3001/api";
const axios = _axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default axios;
