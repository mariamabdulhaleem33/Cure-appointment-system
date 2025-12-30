import axios, { type AxiosInstance, type AxiosResponse, type AxiosError } from "axios"

const api: AxiosInstance = axios.create({
  baseURL: "https://round8-cure-php-team-three.huma-volve.com/api/",
  timeout: 10000,
});

// Request interceptor to attach token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("authToken");

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
    return response;
  },
  (error: AxiosError<{ Status?: boolean; message?: string }>) => {
    if (error.response) {
      const { status, config } = error.response;
      const isLogoutRequest = config?.url?.includes('/logout');
      
      // Handle token expiration (401 Unauthorized)
      if (status === 401 && !isLogoutRequest) {
        // Clear stored token
        localStorage.removeItem('authToken');
        window.location.href = '/login';
        console.error(data?.message || 'Session expired. Please log in again.');
      }
      
      if (status === 403) {
        console.error(data?.message || 'Access forbidden. Insufficient permissions.');
      }
      
      if (status >= 500) {
        console.error(data?.message || 'Server error. Please try again later.');
      }
    } else if (error.request) {
      console.error('Network error. Please check your connection.');
    }
    
    return Promise.reject(error);
  }
);

export default api
