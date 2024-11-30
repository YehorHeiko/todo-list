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
  function removeProperties(id: number) {
    setTodo((e) => e.filter((todo) => todo.id !== id));
    // setTodo(todo.filter((e) => e.id !== id))
  }

  return (
    <div className={styles.bg}>
      <div className={styles.block}>
        <h1>ToDoList</h1>
        <div className={styles.to_do_block}>
          <input
            onChange={(e) => setInputOne(e.target.value)}
            type="text"
            value={inputOne}
            className={styles.input}
          />
          <input
            onChange={(e) => setInputTwo(e.target.value)}
            type="text"
            value={inputTwo}
            className={styles.input}
          />
          <button onClick={addProperties}>ADD ToDo</button>

          <ul>
            {todo.map((e) => (
              <p key={e.id}>
                {e.text1} {e.text2}
                <button onClick={() => removeProperties(e.id)}>DEL</button>
              </p>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default List;
