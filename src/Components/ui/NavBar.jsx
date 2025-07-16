import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { navs } from "../../../constants/index";
import { FiAlignRight } from "react-icons/fi";
import AnimateOnView from "./AnimateOnView";

const NavBar = () => {
  return (
    <nav className="flex items-center justify-center md:px-24 md:py-5 px-6 py-4 fixed top-0 w-full">
      <div className="flex items-center justify-between w-full">
        <div>
          <AnimateOnView xInit={-50} href="" className="w-22">
            <img src="/my-logo.png" alt="asds" />
          </AnimateOnView>
        </div>

        <AnimateOnView
          yInit={-30}
          className="font-ovo lg:flex gap-8 shadow-sm bg-white/50 px-12 py-3 rounded-full hidden"
        >
          {navs.map(({ id, label }) => (
            <a key={id} href={`#${id}`}>
              {label}
            </a>
          ))}
        </AnimateOnView>

        <AnimateOnView
          xInit={50}
          className="hidden rounded-full px-8 py-3 text-sm border border-zinc-900 lg:flex items-center justify-center gap-2"
        >
          Contact
          <FiArrowUpRight size={20} />
        </AnimateOnView>

        <button className="lg:hidden">
          <AnimateOnView xInit={30}>
            <FiAlignRight size={25} />
          </AnimateOnView>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
