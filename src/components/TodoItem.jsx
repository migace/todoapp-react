import PropTypes from "prop-types";
import styles from "./TodoItem.module.css";

export const TodoItem = ({ id, name, isCompleted, onComplete, onRemove }) => (
  <li className={styles.wrapper}>
    {name}
    <div className={styles.groupButtons}>
      <button onClick={() => onComplete(id)} disabled={isCompleted}>
        Complete
      </button>
      <button onClick={() => onRemove(id)}>Remove</button>
    </div>
  </li>
);

TodoItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  onComplete: PropTypes.func,
  onRemove: PropTypes.func,
  isCompleted: PropTypes.bool,
};
