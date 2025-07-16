import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { navs } from "../../../constants/index";
import { FiAlignRight } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center md:px-24 md:py-5 px-6 py-4 fixed top-0 w-full">
      <div className="flex items-center justify-between w-full">
        <a href="" className="w-22">
          <img src="/my-logo.png" alt="asds" />
        </a>

        <div className="font-ovo lg:flex gap-8 shadow-sm bg-white/50 px-12 py-3 rounded-full hidden">
          {navs.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </div>

        <button className="hidden rounded-full px-8 py-3 text-sm border border-zinc-900 lg:flex items-center justify-center gap-2">
          Contact
          <FiArrowUpRight size={20} />
        </button>

        <button className="lg:hidden">
          <FiAlignRight size={25} />
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
