/** @format */

import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

export default function Offers({ handleCoreFeatures, initialFeatures }) {
  const [task, setTask] = useState({ name: "", done: false }); // properly initialized
  const [todos, setTodos] = useState(
    initialFeatures.map((name) => ({ name, done: false }))
  );

  // Sort: incomplete first
  const sortedTodos = todos
    .slice()
    .sort((a, b) => Number(a.done) - Number(b.done));

  // Update parent with core feature names only
  useEffect(() => {
    handleCoreFeatures(todos.map((t) => t.name));
  }, [todos]);

  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const updated = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(updated);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!task.name.trim()) return;
    setTodos([...todos, task]);
    setTask({ name: "", done: false });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.listoffers}>
        <span>List out offers included in this retainer service</span>
        <input
          placeholder='e.g One on one Consulting'
          onChange={(e) => setTask({ name: e.target.value, done: false })}
          value={task.name}
          type='text'
        />

        <div className={styles.list}>
          {sortedTodos.map((item, index) => (
            <div key={index} className={styles.offers}>
              <div className={styles.circleoffer}>
                <div className={styles.circle}></div>
                <span onClick={() => handleClick(item.name)}>{item.name}</span>
              </div>

              <div onClick={() => handleDelete(item)} className='delete'>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M4 6.55556H20M18.2222 6.55556V19C18.2222 19.4715 18.0349 19.9237 17.7015 20.2571C17.3681 20.5905 16.9159 20.7778 16.4444 20.7778H7.55556C7.08406 20.7778 6.63187 20.5905 6.29848 20.2571C5.96508 19.9237 5.77778 19.4715 5.77778 19V6.55556M8.44444 6.55556V4.77778C8.44444 4.30628 8.63175 3.8541 8.96514 3.5207C9.29854 3.1873 9.75073 3 10.2222 3H13.7778C14.2493 3 14.7015 3.1873 15.0349 3.5207C15.3683 3.8541 15.5556 4.30628 15.5556 4.77778V6.55556M10.2222 11V16.3333M13.7778 11V16.3333'
                    stroke='#1D2E2E'
                    strokeOpacity='0.8'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </form>
  );
}
