import { Navigate, Outlet } from "react-router-dom"
import { useAuthState } from "@/hooks/useAuth"

export default function UnauthenticatedRoute() {
  const { isAuthenticated } = useAuthState()

  if (isAuthenticated) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}