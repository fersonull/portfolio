import React from "react";
import { Outlet } from "react-router-dom";
import BlurBlob from "../Components/BlurBlob";
import NavBar from "../Components/ui/NavBar";

const Layout = () => {
  return (
    <div className="font-arial text-zinc-900 overflow-x-hidden md:leading-8">
      <Outlet />
    </div>
  );
};

export default Layout;
