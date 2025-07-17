import React from "react";

const BoxText = ({ text }) => {
  return (
    <div className="bg-zinc-900 p-2 rounded-xl text-white">
      <div className="bg-zinc-600 rounded-lg p-1">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default BoxText;
