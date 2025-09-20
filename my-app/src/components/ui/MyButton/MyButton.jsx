import React from "react";
import cl from "./MyButton.module.scss";
import clsx from "clsx";

const MyButton = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={clsx(cl.button, className)}>
      {children}
    </button>
  );
};

export default MyButton;
