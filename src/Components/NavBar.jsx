import React from "react";
import { FiArrowUpRight } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center px-24 py-5 fixed top-0 w-full">
      <div className="flex items-center justify-between w-full">
        <a href="" className="w-22">
          <img src="/my-logo.png" alt="asds" />
        </a>

        <div className="font-ovo flex gap-8 shadow-sm bg-white/50 px-12 py-3 rounded-full">
          <a href="">Home</a>
          <a href="">About me</a>
          <a href="">Services</a>
          <a href="">My work</a>
          <a href="">Contact me</a>
        </div>

        <button className="rounded-full px-8 py-3 text-sm border border-zinc-900 flex items-center justify-center gap-2">
          Contact
          <FiArrowUpRight size={20} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
