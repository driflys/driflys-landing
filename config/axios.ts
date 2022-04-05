import axios, { AxiosStatic } from "axios";

const API_BASE_URL = "http://localhost:5000/v1";
// NOTE: Set withCredentials: true to send & receive cookies
//       Otherwise the server has set the cookies correctly, the client won't be set those cookies
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
});

export default axiosInstance as AxiosStatic;
