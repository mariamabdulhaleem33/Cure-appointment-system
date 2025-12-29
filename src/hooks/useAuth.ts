import { useMutation, useQueryClient } from "@tanstack/react-query"
import { useNavigate } from "react-router-dom"
import { useEffect, useMemo } from "react"
import {
  loginAPI,
  type LoginCredentials,
  type LoginResponse,
} from "@/api/authServices"

export const useLogin = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => loginAPI(credentials),
    onSuccess: (response: LoginResponse) => {
      if (response.Status && response.data.Token) {
        localStorage.setItem("authToken", response.data.Token)
        queryClient.setQueryData(["auth"], response)
        navigate("/")
      }
    },
    onError: (error: Error) => {
      console.error("Login failed:", error)
    },
  })
}

export const useLogout = () => {
  const navigate = useNavigate()
  const queryClient = useQueryClient()

  return () => {
    localStorage.removeItem("authToken")
    queryClient.clear()
    navigate("/login")
  }
}

export const useAuthState = () => {
  const queryClient = useQueryClient()
  const authData = queryClient.getQueryData<LoginResponse>(["auth"])

  const isAuthenticated = useMemo(() => {
    const token = localStorage.getItem("authToken")
    return !!(token || authData?.data?.Token)
  }, [authData])

  useEffect(() => {
    const handleStorageChange = () => {
      queryClient.invalidateQueries({ queryKey: ["auth"] })
    }
    window.addEventListener("storage", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
    }
  }, [queryClient])

  return { isAuthenticated }
}