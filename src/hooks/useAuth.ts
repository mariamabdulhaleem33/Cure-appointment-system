// src/hooks/useAuth.ts
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { loginAPI, type LoginCredentials, type LoginResponse } from '@/api/authServices';

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => loginAPI(credentials),
    onSuccess: (response: LoginResponse) => {
      if (response.success && response.data.token) {
        // Store token in localStorage
        localStorage.setItem('authToken', response.data.token);
        
        // Cache the auth data in React Query
        queryClient.setQueryData(['auth'], response);
        
        // Navigate to dashboard
        navigate('/');
      }
    },
    onError: (error: Error) => {
      console.error('Login failed:', error);
    },
  });
};

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  return () => {
    // Clear token from localStorage
    localStorage.removeItem('authToken');
    
    // Clear all queries
    queryClient.clear();
    
    // Navigate to login
    navigate('/signin');
  };
};