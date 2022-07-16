import React, { useState } from "react";
import Card from "../card/card";
import SearchInput from "../search_input/search_input";
import styles from "./preview.module.css";

const Preview = ({ cards }) => {
  const [query, setQuery] = useState("");
  const searchName = (name) => {
    setQuery(name);
  };

  return (
    <section className={styles.preview}>
      <h1 className={styles.title}>Card Preview</h1>
      <SearchInput onSearch={searchName} />
      <ul className={styles.cards}>
        {!query &&
          Object.keys(cards).map((key) => <Card key={key} card={cards[key]} />)}
        {query &&
          Object.keys(cards)
            .filter((key) => cards[key].name.toLowerCase().includes(query))
            .map((key) => <Card key={key} card={cards[key]} />)}
      </ul>
    </section>
  );
};

export default Preview;
