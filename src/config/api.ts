const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

import axios from "axios";

const axiosJSONPLACEHOLDER = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosJSONPLACEHOLDER;
