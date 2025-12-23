import api from './axios';

// Types matching actual API response
export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    token: string;
  };
}

export interface LoginCredentials {
  phone: string;
  password: string;
}

// API Functions
export const loginAPI = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/auth/login', credentials);
  return response.data;
};