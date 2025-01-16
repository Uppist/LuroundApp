/** @format */
import { useState } from "react";
import styles from "./Time.module.css";

export default function Time() {
  const [isOpen, setIsOpen] = useState({});
  const [selectedOption, setSelectedOption] = useState({});
  const [time] = useState([
    "15 mins",
    "30 mins",
    "45 mins",
    "60 mins",
    "90 mins",
    "120 mins",
  ]);

  function dropDown(index) {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  function handleDropdown(index, option) {
    setSelectedOption((prevState) => ({
      ...prevState,
      [index]: option,
    }));
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: false,
    }));
  }

  return (
    <>
      <div className={`${styles.inpersonvirtual} ${styles.tofro}`}>
        <span>From</span>
        <span>To</span>
      </div>
      <div className={styles.daycheckedcontainer}>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thurday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((option, index) => (
          <div
            key={index}
            className={`${styles.inputtimecontainer} ${styles.daysselection}`}
          >
            <div>
              <div>
                <input
                  type='checkbox'
                  className='checkbox'
                  id={`check-${index}`}
                />
                <label htmlFor={`check-${index}`}>{option}</label>
              </div>
            </div>
            <div
              className={`${styles.nairavirtualinperson} ${styles.timeselection}`}
            >
              <div className={styles.nairavirtual}>
                <div className='dropdown'>
                  <div
                    className={`${styles.selecttimecontainer} ${
                      isOpen[index] ? "select-clicked" : ""
                    }`}
                    onClick={() => dropDown(index)}
                  >
                    <span className='selected-list'>
                      {selectedOption[index] || "9:00 AM"}
                    </span>
                  </div>
                  {isOpen[index] && (
                    <ul className={styles.menu}>
                      {time.map((option) => (
                        <li
                          key={option}
                          className={`menu-item ${
                            selectedOption[index] === option ? "active" : ""
                          }`}
                          onClick={() => handleDropdown(index, option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
              <div className={styles.nairainperson}>
                <div className='dropdown'>
                  <div
                    className={`${styles.selecttimecontainer} ${
                      isOpen[index] ? "select-clicked" : ""
                    }`}
                    onClick={() => dropDown(index)}
                  >
                    <span className='selected-list'>
                      {selectedOption[index] || "9:00 AM"}
                    </span>
                  </div>
                  {isOpen[index] && (
                    <ul className={styles.menu}>
                      {time.map((option) => (
                        <li
                          key={option}
                          className={`menu-item ${
                            selectedOption[index] === option ? "active" : ""
                          }`}
                          onClick={() => handleDropdown(index, option)}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
