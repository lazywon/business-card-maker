import React, { memo } from "react";
import styles from "./card_edit_form.module.css";
import Button from "../button/button";

const CardEditForm = memo(({ FileInput, card, updateCard, deleteCard }) => {
  const { name, company, position, email, mobile, theme, fileName, motto } =
    card;

  const onFileChange = (file) => {
    updateCard({
      ...card,
      fileName: file.name,
      fileUrl: file.url,
    });
  };

  const onChange = (event) => {
    if (event.currentTarget == null) {
      return;
    }
    event.preventDefault();
    updateCard({
      ...card,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const onSubmit = () => {
    deleteCard(card);
  };

  return (
    <form className={styles.form}>
      <input
        className={styles.input}
        type="text"
        name="name"
        value={name}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="company"
        value={company}
        onChange={onChange}
      />
      <select
        className={styles.select}
        name="theme"
        value={theme}
        onChange={onChange}
      >
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        className={styles.input}
        type="text"
        name="position"
        value={position}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="email"
        value={email}
        onChange={onChange}
      />
      <input
        className={styles.input}
        type="text"
        name="mobile"
        value={mobile}
        onChange={onChange}
      />
      <textarea
        className={styles.textarea}
        name="motto"
        value={motto}
        onChange={onChange}
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={fileName} onFileChange={onFileChange} />
      </div>

      <Button name="Delete" onClick={onSubmit} />
    </form>
  );
});

export default CardEditForm;
