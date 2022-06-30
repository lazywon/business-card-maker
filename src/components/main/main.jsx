import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Main = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: "1",
      name: "Lazy Won",
      company: "Lazy Company",
      theme: "dark",
      title: "Frontend Dveloper",
      email: "lazywon@gmail.com",
      message: "I love coding",
      fileName: "lazy",
      fileUrl: null,
    },
    {
      id: "2",
      name: "Lazy Won2",
      company: "Lazy Company2",
      theme: "light",
      title: "Backend Dveloper",
      email: "lazywon2@gmail.com",
      message: "I love coding :)",
      fileName: "lazy2",
      fileUrl: null,
    },
    {
      id: "3",
      name: "Lazy Won3",
      company: "Lazy Company3",
      theme: "colorful",
      title: "Backend Dveloper",
      email: "lazywon3@gmail.com",
      message: "I love coding :)",
      fileName: "lazy3",
      fileUrl: null,
    },
  ]);
  const navigate = useNavigate();

  const onLogout = () => {
    authService //
      .logout();
  };

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (!user) {
        navigate("/");
      }
    });
  });

  const addCard = (card) => {
    console.log(card);
    const updated = [...cards, card]; // 기존 cards 복사 후 card 하나 추가하기
    setCards(updated);
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor cards={cards} addCard={addCard} />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
