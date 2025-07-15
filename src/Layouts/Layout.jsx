import React from "react";
import { Outlet } from "react-router-dom";
import BlurBlob from "../Components/BlurBlob";

const Layout = () => {
  return (
    <div className="bg__light font-arial min-h-screen text-zinc-900 backdrop-blur-3xl relative overflow-x-hidden">
      <BlurBlob />
      <Outlet />
    </div>
  );
};

export default Layout;
