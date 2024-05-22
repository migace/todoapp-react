import PropTypes from "prop-types";

import styles from "./TodoInput.module.css";
import { useState } from "react";

export const TodoInput = ({ onClick }) => {
  const [text, setText] = useState("");

  const clickAddBtnHandler = () => {
    onClick(text);
    setText("");
  };

  return (
    <div className={styles.wrapper}>
      <input
        value={text}
        onChange={(event) => setText(event.currentTarget.value)}
      />
      <button onClick={clickAddBtnHandler}>Add Task</button>
    </div>
  );
};

TodoInput.propTypes = {
  onClick: PropTypes.func,
};
