import React from "react";
import { Outlet } from "react-router-dom";
import BlurBlob from "../Components/BlurBlob";

const Layout = () => {
  return (
    <div className="bg__light font-arial min-h-screen text-zinc-900 backdrop-blur-3xl overflow-x-hidden md:leading-8 scroll-smooth">
      <div className="hidden md:block">
        <BlurBlob top={-150} left={200} width={600} />
      </div>
      <div className="md:hidden block">
        <BlurBlob top={380} left={-100} width={300} />
      </div>
      <Outlet />
    </div>
  );
};

export default Layout;
