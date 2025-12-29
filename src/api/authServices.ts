import api from './axios';

export interface LoginResponse {
  Status: boolean;
  message: string;
  data: {
    Token: string;
  };
}

export interface LoginCredentials {
  mobile_number: string;
  password: string;
}

export const loginAPI = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/login', credentials);
  return response.data;
};