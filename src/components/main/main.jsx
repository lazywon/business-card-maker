import React, { useEffect, useState } from "react";
import styles from "./main.module.css";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Main = ({ FileInput, authService }) => {
  const [cards, setCards] = useState({
    1: {
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
    2: {
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
    3: {
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
  });

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

  // const addCard = (card) => {
  //   console.log(card);
  //   const updated = [...cards, card]; // 기존 cards 복사 후 card 하나 추가하기
  //   setCards(updated);
  // };

  // 아래 함수대로 하면 기존의 id가 오브젝트에 없었다면 새로운 것이 추가가 된다.
  // 그래서 addCard 함수는 따로 필요 없이 아래 함수 이용하면 된다.

  const createOrUpdateCard = (card) => {
    setCards((cards) => {
      // setCards를 부를 때의 이 시점에 cards를 받아와서
      const updated = { ...cards }; // 모든 state update 해야해서 기존 cards 모두 복사
      updated[card.id] = card; //update되는 id를 이용해서 그 오브젝트 전체를 card로 변경(할당)해준다.
      return updated;
    });
  };

  const deleteCard = (card) => {
    // setCards((cards) => cards.filter((item) => item.id !== card.id));

    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });
  };

  return (
    <section className={styles.maker}>
      <Header onLogout={onLogout} />
      <div className={styles.container}>
        <Editor
          FileInput={FileInput}
          cards={cards}
          addCard={createOrUpdateCard}
          updateCard={createOrUpdateCard}
          deleteCard={deleteCard}
        />
        <Preview cards={cards} />
      </div>
      <Footer />
    </section>
  );
};

export default Main;
