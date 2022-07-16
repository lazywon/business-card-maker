import React, { memo } from "react";
import styles from "./card.module.css";

const DEFAULT_IMAGE = "/images/user.png";

const Card = memo(({ card }) => {
  const { name, company, title, email, message, theme, fileUrl, motto } = card;
  const url = fileUrl || DEFAULT_IMAGE;
  return (
    <li className={styles.container}>
      <div className={`${styles.flip} ${styles.front}`}>
        <div className={`${styles.card} ${getStyles(theme)}`}>
          <img className={styles.avatar} src={url} alt="profile" />
          <div className={styles.info}>
            <h1 className={styles.name}>{name}</h1>
            <p className={styles.company}>{company}</p>
            <p className={styles.title}>{title}</p>
            <p className={styles.email}>{email}</p>
            <p className={styles.message}>{message}</p>
          </div>
        </div>
      </div>
      <div className={`${styles.flip} ${styles.back}`}>
        <div className={`${styles.card} ${getStyles(theme)}`}>
          <div className={styles.backInfo}>
            <p className={styles.motto}>{motto}</p>
          </div>
        </div>
      </div>
    </li>
  );
});

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown theme: ${theme}`);
  }
}

export default Card;
