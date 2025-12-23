import MainLayout from "@/components/layout/MainLayout";
import EditProfileForm from "@/components/Profile/EditProfileForm/EditProfileForm";
import Profile from "@/Pages/Profile";
import Search from "@/components/Search"; 
import { Route, Routes } from "react-router-dom";
import SignIn from "@/Pages/signin/SignIn";
import SignUp from "@/Pages/signup/SignUp";
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Search />} />
        <Route path="profile" element={<Profile />}>
          <Route path="edit" element={<EditProfileForm />} />
        </Route>
      </Route>
    </Routes>
  );
}
