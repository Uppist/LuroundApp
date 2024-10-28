/** @format */
import { useState } from "react";
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
      <div className='inperson-virtual to-fro'>
        <span>From</span>
        <span>To</span>
      </div>
      <div className='day-checked-container'>
        {[
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thurday",
          "Friday",
          "Saturday",
          "Sunday",
        ].map((option, index) => (
          <div key={index} className='input-time-container days-selection'>
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
            <div className='naira-virtual-inperson time-selection'>
              <div className='naira-virtual'>
                <div className='dropdown'>
                  <div
                    className={`select-time-container ${
                      isOpen[index] ? "select-clicked" : ""
                    }`}
                    onClick={() => dropDown(index)}
                  >
                    <span className='selected-list'>
                      {selectedOption[index] || "9:00 AM"}
                    </span>
                  </div>
                  {isOpen[index] && (
                    <ul className='menu'>
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
              <div className='naira-inperson'>
                <div className='dropdown'>
                  <div
                    className={`select-time-container ${
                      isOpen[index] ? "select-clicked" : ""
                    }`}
                    onClick={() => dropDown(index)}
                  >
                    <span className='selected-list'>
                      {selectedOption[index] || "9:00 AM"}
                    </span>
                  </div>
                  {isOpen[index] && (
                    <ul className='menu'>
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
