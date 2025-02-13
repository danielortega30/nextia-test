const API_BASE_URL = "https://jsonplaceholder.typicode.com";

import axios from "axios";

const axiosJSONPLACEHOLDER = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

export default axiosJSONPLACEHOLDER;
