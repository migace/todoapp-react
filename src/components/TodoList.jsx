import PropTypes from "prop-types";
import styles from "./TodoList.module.css";

export const TodoList = ({ children }) => (
  <ul className={styles.wrapper}>{children}</ul>
);

TodoList.propTypes = {
  children: PropTypes.node,
};
