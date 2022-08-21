import axios, { AxiosStatic } from "axios"

const API_BASE_URL_PROD = "https://api.driflys.com/v1"
const API_BASE_URL_DEV = "http://localhost:5000/v1"
let API_BASE_URL = API_BASE_URL_PROD

if (process.env.NODE_ENV === "development") API_BASE_URL = API_BASE_URL_DEV
else API_BASE_URL = API_BASE_URL_PROD
// NOTE: Set withCredentials: true to send & receive cookies
//       Otherwise the server has set the cookies correctly, the client won't be set those cookies
const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: false,
})

export default axiosInstance as AxiosStatic
