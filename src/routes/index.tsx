import MainLayout from "@/components/layout/MainLayout"
import EditProfileForm from "@/components/Profile/EditProfileForm/EditProfileForm"
import Profile from "@/Pages/Profile"
import { Route, Routes } from "react-router-dom"
import Home from "@/Pages/Home"
import Search from "@/components/search-page/Search"

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="profile" element={<Profile />}>
          <Route path="edit" element={<EditProfileForm />} />
        </Route>
      </Route>
    </Routes>
  )
}
