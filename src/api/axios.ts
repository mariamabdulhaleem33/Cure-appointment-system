// src/api/axios.ts
import axios, { type AxiosInstance } from "axios"

const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
})

export default api
