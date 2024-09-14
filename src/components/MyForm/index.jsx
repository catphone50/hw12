import React, { useState } from "react";
import ValueDisplay from "../ValueDisplay";
import styles from "./styles.module.css";

function MyForm() {
  const [value, setValue] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setPreviousValue(value);
  };

  return (
    <form className={styles.containerForm} onSubmit={handleSubmit}>
      <input
        className={styles.inputText}
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <ValueDisplay value={value} previousValue={previousValue} />
    </form>
  );
}

export default MyForm;
