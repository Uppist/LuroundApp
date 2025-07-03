/** @format */
import { useState } from "react";
import styles from "./Time.module.css";

export default function Time() {
  const [isOpenFrom, setIsOpenFrom] = useState({});
  const [isOpenTo, setIsOpenTo] = useState({});

  const [selectedFrom, setSelectedFrom] = useState({});
  const [selectedTo, setSelectedTo] = useState({});
  const time = [
    "12:00 AM",
    "12:15 AM",
    "12:30 AM",
    "12:45 AM",
    "1:00 AM",
    "1:15 AM",
    "1:30 AM",
    "1:45 AM",
    "2:00 AM",
    "2:15 AM",
    "2:30 AM",
    "2:45 AM",
    "3:00 AM",
    "3:15 AM",
    "3:30 AM",
    "3:45 AM",
    "4:00 AM",
    "4:15 AM",
    "4:30 AM",
    "4:45 AM",
    "5:00 AM",
    "5:15 AM",
    "5:30 AM",
    "5:45 AM",
    "6:00 AM",
    "6:15 AM",
    "6:30 AM",
    "6:45 AM",
    "7:00 AM",
    "7:15 AM",
    "7:30 AM",
    "7:45 AM",
    "8:00 AM",
    "8:15 AM",
    "8:30 AM",
    "8:45 AM",
    "9:00 AM",
    "9:15 AM",
    "9:30 AM",
    "9:45 AM",
    "10:00 AM",
    "10:15 AM",
    "10:30 AM",
    "10:45 AM",
    "11:00 AM",
    "11:15 AM",
    "11:30 AM",
    "11:45 AM",
    "12:00 PM",
    "12:15 PM",
    "12:30 PM",
    "12:45 PM",
    "1:00 PM",
    "1:15 PM",
    "1:30 PM",
    "1:45 PM",
    "2:00 PM",
    "2:15 PM",
    "2:30 PM",
    "2:45 PM",
    "3:00 PM",
    "3:15 PM",
    "3:30 PM",
    "3:45 PM",
    "4:00 PM",
    "4:15 PM",
    "4:30 PM",
    "4:45 PM",
    "5:00 PM",
    "5:15 PM",
    "5:30 PM",
    "5:45 PM",
    "6:00 PM",
    "6:15 PM",
    "6:30 PM",
    "6:45 PM",
    "7:00 PM",
    "7:15 PM",
    "7:30 PM",
    "7:45 PM",
    "8:00 PM",
    "8:15 PM",
    "8:30 PM",
    "8:45 PM",
    "9:00 PM",
    "9:15 PM",
    "9:30 PM",
    "9:45 PM",
    "10:00 PM",
    "10:15 PM",
    "10:30 PM",
    "10:45 PM",
    "11:00 PM",
    "11:15 PM",
    "11:30 PM",
    "11:45 PM",
  ];

  function dropDown(index, type) {
    if (type === "from") {
      setIsOpenFrom((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    } else {
      setIsOpenTo((prevState) => ({
        ...prevState,
        [index]: !prevState[index],
      }));
    }
  }

  function CloseDropdown() {
    setIsOpenFrom(false);
    setIsOpenTo(false);
  }

  function handleDropdown(index, option, type) {
    if (type === "from") {
      setSelectedFrom((prevState) => ({
        ...prevState,
        [index]: option,
      }));
      setIsOpenFrom((prevState) => ({
        ...prevState,
        [index]: false,
      }));
    } else {
      setSelectedTo((prevState) => ({
        ...prevState,
        [index]: option,
      }));
      setIsOpenTo((prevState) => ({
        ...prevState,
        [index]: false,
      }));
    }
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
                      isOpenFrom[index] ? "select-clicked" : ""
                    }`}
                    onClick={() => dropDown(index, "from")}
                  >
                    <span className='selected-list'>
                      {selectedFrom[index] || "9:00 AM"}
                    </span>
                  </div>
                  {isOpenFrom[index] && (
                    <>
                      {/* <div className='popup'> */}
                      <div onClick={setIsOpenFrom}></div>
                      <ul className={styles.menu}>
                        {time.map((option) => (
                          <li
                            key={option}
                            className={`menu-item ${
                              selectedFrom[index] === option ? "active" : ""
                            }`}
                            onClick={() =>
                              handleDropdown(index, option, "from")
                            }
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </>
                    // </div>
                  )}
                </div>
              </div>
              <div className={styles.nairainperson}>
                <div className='dropdown'>
                  <div
                    className={`${styles.selecttimecontainer} ${
                      isOpenTo[index] ? "select-clicked" : ""
                    }`}
                    onClick={() => dropDown(index, "to")}
                  >
                    <span className='selected-list'>
                      {selectedTo[index] || "9:00 AM"}
                    </span>
                  </div>
                  {isOpenTo[index] && (
                    <>
                      {/* // <div className='popupdropdown'> */}
                      <div onClick={setIsOpenTo}></div>
                      <ul className={styles.menu}>
                        {time.map((option) => (
                          <li
                            key={option}
                            className={`menu-item ${
                              selectedTo[index] === option ? "active" : ""
                            }`}
                            onClick={() => handleDropdown(index, option, "to")}
                          >
                            {option}
                          </li>
                        ))}
                      </ul>
                    </>
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
