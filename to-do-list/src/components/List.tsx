import { useState } from "react";
import styles from "./List.module.css";
interface Todo {
  id: number;
  text1: string;
  text2: string;
}

function List() {
  const [todo, setTodo] = useState<Todo[]>([]);
  const [inputOne, setInputOne] = useState("");
  const [inputTwo, setInputTwo] = useState("");

  function addProperties() {
    setTodo((e) => [
      ...e,
      { id: Date.now(), text1: inputOne, text2: inputTwo },
    ]);
  }
  function reemove (id) {
    setTodo(todo.filter((e) => e.id !== id))
  }

  return (
    <div className={styles.bg}>
      <div className={styles.block}>
        <h1>ToDoList</h1>
        <div className={styles.to_do_block}>
          <input
            value={inputOne}
            type="text"
            
            onChange={(e) => setInputOne(e.target.value)}
          />
          <input
            value={inputTwo}
            type="text"
            onChange={(e) => setInputTwo(e.target.value)}
          />
          <button onClick={addProperties}>Добавить</button>
        </div>
        {todo.map((e) => (
          <p>
            {e.text1} - {e.text2}
            <button onClick={() => reemove(e.id)}>x</button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default List;
