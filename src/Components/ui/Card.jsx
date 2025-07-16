import React from "react";
import { GoMortarBoard } from "react-icons/go";

const Card = ({ children, cardIcon }) => {
  return (
    <div className="flex items-center justify-center p-3 rounded-xl border border-zinc-900 gap-3">
      <cardIcon size={30} /> 
      <p>{children}</p>
    </div>
  );
};

export default Card;
