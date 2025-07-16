import React from "react";

const BlurBlob = ({ top, left, width }) => {
  return (
    <div>
      <div
        className=" rounded-full blur-2xl -z-10 opacity-60 absolute"
        style={{ top: top, left: left, width: width }}
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFD6E8"
            d="M27.2,-32.7C42.9,-26,68.7,-28.3,76.2,-21C83.7,-13.7,73,3.3,61.1,13.7C49.3,24.2,36.3,28.2,26,28.2C15.6,28.2,7.8,24.2,-5.1,31.2C-17.9,38.1,-35.8,56,-47.1,56.3C-58.3,56.6,-63,39.3,-62.8,24.1C-62.6,9,-57.5,-4.1,-51.2,-14.4C-44.8,-24.8,-37.1,-32.6,-28.3,-41.6C-19.6,-50.7,-9.8,-61,-2,-58.2C5.7,-55.4,11.4,-39.5,27.2,-32.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
      <div className="w-100 h-100 rounded-full blur-2xl -z-10 opacity-60 absolute top-[20rem] start-[70rem]">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="#FFD6E8"
            d="M27.2,-32.7C42.9,-26,68.7,-28.3,76.2,-21C83.7,-13.7,73,3.3,61.1,13.7C49.3,24.2,36.3,28.2,26,28.2C15.6,28.2,7.8,24.2,-5.1,31.2C-17.9,38.1,-35.8,56,-47.1,56.3C-58.3,56.6,-63,39.3,-62.8,24.1C-62.6,9,-57.5,-4.1,-51.2,-14.4C-44.8,-24.8,-37.1,-32.6,-28.3,-41.6C-19.6,-50.7,-9.8,-61,-2,-58.2C5.7,-55.4,11.4,-39.5,27.2,-32.7Z"
            transform="translate(100 100)"
          />
        </svg>
      </div>
    </div>
  );
};

export default BlurBlob;
