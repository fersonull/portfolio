import React from "react";

const ImageRound = ({ src, size }) => {
  return (
    <div
      className="rounded-full overflow-hidden"
      style={{ width: size, height: size }}
    >
      <img src={src} alt="Profile" />
    </div>
  );
};

export default ImageRound;
