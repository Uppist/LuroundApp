/** @format */

import React, { useState } from "react";
import styles from "../OneOff/TimeBased/Create/create.module.css";
import styles2 from "./Details.module.css";

export default function CreateService({ nextStep }) {
  const [tasks, setTask] = useState(false);
  const [todos, setTodos] = useState([]);

  const sortedTodos = todos.slice().sort((a, b) => Number(a.done - b.done));

  const [IsAddTime, setIsAddTime] = useState([]);
  function handleDelete(item) {
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, tasks]);

    setTask({ name: " ", done: false });
  }

  return (
    <div className={styles.createtime}>
      <div className={styles.create}>
        <div>
          <span>Create retainer service</span>
        </div>
        <span>1 of 3 steps</span>
      </div>
      <div className={styles.description}>
        <div className={styles.service}>
          <span>Service Name</span>
          <input type='text' placeholder='e.g Personal Training' />
        </div>
        <div className={styles.number}>
          <div className={styles.time}>
            <span>Description</span>
            <textarea placeholder='Write a brief descriptive summary of the service you provide'></textarea>
          </div>
          <div className={styles.span}>
            {" "}
            <span>0/500</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className={styles2.listoffers}>
            <span>List out offers included in this retainer service</span>
            <input
              placeholder='e.g One on one Consulting'
              onChange={(e) => setTask({ name: e.target.value, done: false })}
              value={tasks.name}
              type='text'
            />

            <div className={styles2.list}>
              {sortedTodos.map((item) => (
                <div className={styles2.offers}>
                  <div className={styles2.circleoffer}>
                    <div className={styles2.circle}></div>
                    <span onClick={() => handleClick(item.name)}>
                      {" "}
                      {item.name}
                    </span>
                  </div>

                  <div>
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
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
      <div>
        {" "}
        <button onClick={nextStep} className={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
}
