import { useEffect, useState } from "react";
import { TodoHeader } from "./components/TodoHeader";
import { TodoInput } from "./components/TodoInput";
import { TodoItem } from "./components/TodoItem";
import { TodoList } from "./components/TodoList";
import { API_URL } from "./config";

import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);

  const onAddTodoClickHandler = (name) => {
    fetch(`${API_URL}/todos`, {
      method: "POST",
      body: JSON.stringify({
        name,
        isCompleted: false,
        created: new Date().getTime(),
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data?.id) {
          setTodos((prevTodos) => [data, ...prevTodos]);
        }
      });
  };

  const onCompleteClickHandler = (id) => {
    fetch(`${API_URL}/todos/${id}`, {
      method: "PATCH",
      body: JSON.stringify({
        isCompleted: true,
      }),
    })
      .then((response) => response.json())
      .then(() => {
        setTodos((prevTodos) =>
          prevTodos.map((todo) => {
            if (todo.id === id) {
              return {
                ...todo,
                isCompleted: true,
              };
            }

            return todo;
          })
        );
      });
  };

  const onRemoveClickHandler = (id) => {
    fetch(`${API_URL}/todos/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
      });
  };

  useEffect(() => {
    fetch(`${API_URL}/todos?_sort=-created`)
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  return (
    <div className={styles.wrapper}>
      <TodoHeader>TodoApp</TodoHeader>
      <TodoInput onClick={onAddTodoClickHandler} />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            name={todo.name}
            isCompleted={todo.isCompleted}
            onRemove={onRemoveClickHandler}
            onComplete={onCompleteClickHandler}
          />
        ))}
      </TodoList>
    </div>
  );
}

export default App;
