import { Navigate, Outlet } from "react-router-dom"
import { useAuthState } from "@/hooks/useAuth"

export default function AuthenticatedRoute() {
  const { isAuthenticated } = useAuthState()

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}