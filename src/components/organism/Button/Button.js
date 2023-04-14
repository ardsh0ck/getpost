import React from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";

const Button = ({ type, onClick, disabled, color, children, className }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, className, {
        [styles.buttonYellow]: color === "yellow"
      })}
    >
      {children}
    </button>
  );
};

export default Button;
