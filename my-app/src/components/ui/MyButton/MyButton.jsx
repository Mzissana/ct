import React from "react";
import cl from "./MyButton.module.scss";

const MyButton = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={(cl.button, className)}>
      {children}
    </button>
  );
};

export default MyButton;
