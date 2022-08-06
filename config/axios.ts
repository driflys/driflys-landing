import axios, { AxiosStatic } from "axios"

const API_BASE_URL_PROD = "https://ap.driflys.com/v1"
const API_BASE_URL_DEV = "http://localhost:5000/v1"
// NOTE: Set withCredentials: true to send & receive cookies
//       Otherwise the server has set the cookies correctly, the client won't be set those cookies
const axiosInstance = axios.create({
  baseURL: API_BASE_URL_PROD,
  withCredentials: false,
})

export default axiosInstance as AxiosStatic
