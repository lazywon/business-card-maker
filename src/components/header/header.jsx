import React from "react";
import styles from "./header.module.css";

const Header = (props) => {
  return (
    <div className={styles.header}>
      <img className={styles.img} src="favicon.ico" alt="logo" />
      <h1 className={styles.title}>Business Card Maker</h1>
    </div>
  );
};

export default Header;
