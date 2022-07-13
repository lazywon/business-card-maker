import React, { memo } from "react";
import styles from "./button.module.css";

const Button = memo(({ name, onClick }) => (
  <button
    className={`${styles.button} ${
      name === "Delete" ? styles.delete : styles.add
    }`}
    onClick={onClick}
  >
    {name}
  </button>
));

export default Button;
