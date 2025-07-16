import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { FiArrowUpRight } from "react-icons/fi";
import { navs } from "../../../constants/index";
import { FiAlignRight } from "react-icons/fi";
import AnimateOnView from "./AnimateOnView";
import SideBar from "./SideBar";

const NavBar = () => {
  const [isScroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`transition-all flex items-center justify-center md:px-24 md:py-5 px-6 py-4 fixed top-0 w-full z-[9999] ${
        isScroll ? "bg-white/50 backdrop-blur-sm shadow" : ""
      }`}
    >
      {/* <SideBar /> */}
      <div className="flex items-center justify-between w-full">
        <a href="#home">
          <AnimateOnView xInit={-50} className="w-22">
            <img src="/my-logo.png" alt="asds" />
          </AnimateOnView>
        </a>

        <AnimateOnView
          yInit={-30}
          className={`font-ovo lg:flex gap-8 px-12 py-3 rounded-full hidden ${
            isScroll ? "" : "bg-white/50 shadow-sm"
          }`}
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
