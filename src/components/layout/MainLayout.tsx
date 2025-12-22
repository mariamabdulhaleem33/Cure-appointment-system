import React from "react";
import { Provider } from "react-redux";
import { store } from "@/store";

import Navbar from "./navbar/Navbar";
import HeroSection from "../home/hero/HeroSection";
import Footer from "./footer/footer";

const MainLayout: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-white flex flex-col">
        <Navbar />
        <div className="flex-grow">
          <HeroSection />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

export default MainLayout;
