import MainLayout from "@/components/layout/MainLayout"
import EditProfileForm from "@/components/Profile/EditProfileForm/EditProfileForm"
import Profile from "@/Pages/Profile"
import { Route, Routes } from "react-router-dom"
import Home from "@/Pages/Home"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />}>
          <Route path="edit" element={<EditProfileForm />} />
        </Route>
      </Route>
    </Routes>
  )
}



