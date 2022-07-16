import React from "react";
import { useRef } from "react";
import styles from "./search_input.module.css";

const SearchInput = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className={styles.search}>
      <input
        ref={inputRef}
        className={styles.input}
        type="search"
        placeholder="🔍 Search Name..."
        onChange={handleSearch}
        onKeyPress={onKeyPress}
      />
    </div>
  );
};

export default SearchInput;
