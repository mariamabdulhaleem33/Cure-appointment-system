// src/api/axios.ts
import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from "axios"

const api: AxiosInstance = axios.create({
  baseURL: "https://round8-cure-php-team-three.huma-volve.com/api/",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage (adjust storage method as needed)
    const token = localStorage.getItem('authToken');
    
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
// Response interceptor to handle errors and token expiration
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Return successful response as-is
    return response;
  },
  (error: AxiosError) => {
    if (error.response) {
      const { status } = error.response;
      
      // Handle token expiration (401 Unauthorized)
      if (status === 401) {
        // Clear stored token
        localStorage.removeItem('authToken');
        
        // Redirect to login page (adjust path as needed)
        window.location.href = '/login';
        
        // Optional: Show a message to the user
        console.error('Session expired. Please log in again.');
      }
      
      // Handle forbidden access (403)
      if (status === 403) {
        console.error('Access forbidden. Insufficient permissions.');
      }
      
      // Handle server errors (500)
      if (status >= 500) {
        console.error('Server error. Please try again later.');
      }
    } else if (error.request) {
      console.error('Network error. Please check your connection.');
    }
    
    return Promise.reject(error);
  }
);


export default api
