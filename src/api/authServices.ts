import api from './axios';

// Types matching actual API response
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

// Logout response type
export interface LogoutResponse {
  Status: boolean;
  message: string;
}

// API Functions
export const loginAPI = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>('/login', credentials);
  return response.data;
};

export const logoutAPI = async (): Promise<LogoutResponse> => {
  const response = await api.post<LogoutResponse>('/logout');
  return response.data;
};