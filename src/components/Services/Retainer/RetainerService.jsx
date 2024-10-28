/** @format */
import { useState } from "react";
import Retainer from "./Retainer";
import DayTime from "../OneOff/DayTime";
import ServiceCreate from "../OneOff/SeviceCreate";
import PricingTime from "../OneOff/Pricing";
export default function RetainerService() {
  const [isBack, setIsBack] = useState(false);
  const [isNext, setIsNext] = useState(false);
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

  function BackOneOff() {
    setIsBack(true);
  }

  function AddTime() {
    setIsAddTime((prev) => [
      ...prev,
      { id: Date.now(), buttons: ["30", "45", "60", "90", "120", "150"] },
    ]);
  }

  function handleTimeDelete(item) {
    setIsAddTime(IsAddTime.filter((time) => time.id !== item.id));
  }

  function Next() {
    setIsNext(true);
  }

  function backPricing() {
    setIsNext(false);
  }
  return (
    <>
      {isBack ? (
        <Retainer />
      ) : (
        <div className='time-based-container'>
          <button className='time-based-back' onClick={BackOneOff}>
            <svg
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 1L1 6L6 11'
                stroke='#1D2E2E'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span>Back</span>
          </button>

          <div className='time-based-grid-container'>
            <div className='create-time-based'>
              <div className='create-time-service'>
                <span>Create Retainer service</span>
              </div>
              <div className='time-service-description'>
                <ServiceCreate />
                <form onSubmit={handleSubmit}>
                  <div className='list-offers'>
                    <span>
                      List out offers included in this retainer service
                    </span>
                    <input
                      placeholder='e.g One on one Consulting'
                      onChange={(e) =>
                        setTask({ name: e.target.value, done: false })
                      }
                      value={tasks.name}
                      type='text'
                    />

                    <div className='list-number-of-offers'>
                      {sortedTodos.map((item) => (
                        <div className='offers'>
                          <div className='circle-offer'>
                            <div className='circle'></div>
                            <span onClick={() => handleClick(item.name)}>
                              {" "}
                              {item.name}
                            </span>
                          </div>

                          <div>
                            <div
                              onClick={() => handleDelete(item)}
                              className='delete'
                            >
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
            </div>
            <div className='time-choose-daytime'>
              {isNext ? (
                <DayTime
                  backprice={backPricing}
                  backone={BackOneOff}
                  showPart={false}
                  showSvg={true}
                />
              ) : (
                <PricingTime next={Next} />
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
