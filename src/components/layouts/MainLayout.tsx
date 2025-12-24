import React from "react";

import { Outlet } from "react-router-dom";

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white">
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
