import MainLayout from "@/components/layout/MainLayout";
import EditProfileForm from "@/components/Profile/EditProfileForm/EditProfileForm";
import Profile from "@/pages/Profile";
import Home from "@/pages/Home";
import Search from "@/components/search-page/Search";
import { Route, Routes } from "react-router-dom";
import AppointmentPayment from "@/components/payment/AppointmentPayment";
import ReviewCard from "@/components/rating/ReviewCard";
import Booking from "@/components/create_booking/Booking";
import SignIn from "@/pages/signin/SignIn";
import SignUp from "@/pages/signup/SignUp";
import Otp from "@/pages/otp/Otp";
import YourAppointments from "@/features/patient/pages/YourAppointments";
import PasswordManagement from "@/components/Profile/PasswordManagement/PasswordManagement";
// import ContactUs from "@/features/contact-us/components/pages/ContactUs";
// import Chat from "@/features/chat/components/pages/chat";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="otp" element={<Otp />} />

      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="booking/:id" element={<Booking />} />
        <Route path="appointments" element={<YourAppointments />} />
        <Route path="payment" element={<AppointmentPayment />} />
        <Route path="rate" element={<ReviewCard />} />
        {/* <Route path="chat" element={<Chat />} /> */}
        {/* <Route path="contact-us" element={<ContactUs />} /> */}
        <Route path="profile" element={<Profile />}>
          <Route path="edit" element={<EditProfileForm />} />
          <Route path="password_management" element={<PasswordManagement />} />
        </Route>
      </Route>
    </Routes>
  );
}
