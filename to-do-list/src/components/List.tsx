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
    setTodo(e => [...e , { id: Date.now(), text1: inputOne, text2: inputTwo }]);
  }

  return (
    <div className={styles.bg}>
      <div className={styles.block}>
        <h1>ToDoList</h1>
        <div className={styles.to_do_block}>
          <input
            value={inputOne}
            onChange={(e) => setInputOne(e.target.value)}
          />
          <input
            value={inputTwo}
            onChange={(e) => setInputTwo(e.target.value)}
          />
          <button onClick={addProperties}>Add</button>
        </div>
        <ul>
          {todo.map(e => (
            <p key={e.id}>
              {e.text1} {e.text2}
            </p>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
