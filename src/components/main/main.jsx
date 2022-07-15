import React, { useCallback, useEffect, useState } from "react";
import styles from "./main.module.css";
// import Footer from "../footer/footer";
import Header from "../header/header";
import { useNavigate } from "react-router-dom";
import Editor from "../editor/editor";
import Preview from "../preview/preview";

const Main = ({ FileInput, authService, cardRepository }) => {
  const navigate = useNavigate();
  const historyState = navigate?.location?.state;
  const [cards, setCards] = useState({});
  const [userId, setUserId] = useState(historyState && historyState.id);

  const onLogout = useCallback(() => {
    authService //
      .logout();
  }, [authService]);

  useEffect(() => {
    if (!userId) {
      return;
    }
    const stopSync = cardRepository.syncCards(userId, (cards) => {
      setCards(cards);
    });
    return () => stopSync(); // 컴포넌트 unmount 되었을때 불필요한 네트워크 사용 종료
  }, [userId, cardRepository]); // 사용자 id 혹은 cardRepository가 변경될 때마다 실행

  useEffect(() => {
    authService.onAuthChange((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        navigate("/");
      }
    });
  }, [authService, userId, navigate]);

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

    cardRepository.saveCard(userId, card);
  };

  const deleteCard = (card) => {
    // setCards((cards) => cards.filter((item) => item.id !== card.id));

    setCards((cards) => {
      const updated = { ...cards };
      delete updated[card.id];
      return updated;
    });

    cardRepository.removeCard(userId, card);
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
      {/* <Footer /> */}
    </section>
  );
};

export default Main;
