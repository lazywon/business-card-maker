import React, { memo, useRef, useState } from "react";
import Button from "../button/button";
import styles from "./card_add_form.module.css";

const CardAddForm = memo(({ FileInput, onAdd }) => {
  const formRef = useRef();
  const nameRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const positionRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();
  // const messageRef = useRef();
  const mottoRef = useRef();
  const [file, setFile] = useState({ fileName: null, fileUrl: null });

  const onFileChange = (file) => {
    setFile({
      fileName: file.name,
      fileUrl: file.url,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const card = {
      id: Date.now(), //uuid
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      position: positionRef.current.value || "",
      mobile: mobileRef.current.value || "",
      email: emailRef.current.value || "",
      // message: messageRef.current.value || "",
      fileName: file.fileName || "",
      fileUrl: file.fileUrl || "",
      motto: mottoRef.current.value || "",
    };

    formRef.current.reset(); // 입력해서 제출하면 폼 리셋
    setFile({ fileName: null, fileUrl: null }); // 파일도 초기화
    onAdd(card);
  };
  return (
    <form ref={formRef} className={styles.form}>
      <input
        ref={nameRef}
        className={styles.input}
        type="text"
        name="name"
        placeholder="Name"
      />
      <input
        ref={companyRef}
        className={styles.input}
        type="text"
        name="company"
        placeholder="Company"
      />
      <select className={styles.select} name="theme" ref={themeRef}>
        <option value="light">light</option>
        <option value="dark">dark</option>
        <option value="colorful">colorful</option>
      </select>
      <input
        ref={positionRef}
        className={styles.input}
        type="text"
        name="position"
        placeholder="Position"
      />
      <input
        ref={emailRef}
        className={styles.input}
        type="text"
        name="email"
        placeholder="Email"
      />
      <input
        ref={mobileRef}
        className={styles.input}
        type="text"
        name="mobile"
        placeholder="Mobile"
      />
      {/* <input
        ref={mottoRef}
        className={styles.input}
        type="text"
        name="motto"
        placeholder="Motto"
      /> */}
      <textarea
        ref={mottoRef}
        className={styles.textarea}
        name="motto"
        placeholder="Motto"
      ></textarea>
      <div className={styles.fileInput}>
        <FileInput name={file.fileName} onFileChange={onFileChange} />
      </div>

      <Button name="Add" onClick={onSubmit} />
    </form>
  );
});

export default CardAddForm;
