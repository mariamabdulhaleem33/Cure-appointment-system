import MainLayout from "@/components/layout/MainLayout";
import EditProfileForm from "@/components/Profile/EditProfileForm/EditProfileForm";
import Profile from "@/Pages/Profile";
import Search from "@/components/Search"; 
import { Route, Routes } from "react-router-dom";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Search />} />
        <Route path="profile" element={<Profile />}>
          <Route path="edit" element={<EditProfileForm />} />
        </Route>
      </Route>
    </Routes>
  );
}
