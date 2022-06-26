import React from "react";
import styles from "./footer.module.css";

const Footer = (props) => {
  return (
    <div className={styles.footer}>
      <p className={styles.text}>Copyright © Lazywon. All Rights Reserved.</p>
    </div>
  );
};

export default Footer;
