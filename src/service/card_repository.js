import firebaseApp from "firebase";

class CardRepository {
  syncCards(userId, onUpdate) {
    // firebase가 업데이트 될때마다 업데이트된 스냅샷이 들어오고 value가 있다면 onupdate 콜백 호출
    const ref = firebaseApp.database().ref(`${userId}/cards`);
    ref.on("value", (snapshot) => {
      const value = snapshot.val();
      value && onUpdate(value);
    });
    return () => ref.off(); // 더이상 업데이트하고 싶지 않다면(컴포넌트 unmount 시) 끄기
  }
  saveCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).set(card);
  }

  removeCard(userId, card) {
    firebaseApp.database().ref(`${userId}/cards/${card.id}`).remove();
  }
}

export default CardRepository;
