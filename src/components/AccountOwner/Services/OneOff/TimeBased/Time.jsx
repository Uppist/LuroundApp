/** @format */
import { useState } from "react";
import styles from "./Time.module.css";
import { useNavigate } from "react-router-dom";

export default function Time({
  setCheckedDays,
  setSelectedFrom,
  setSelectedTo,
  checkedDays,
  selectedFrom,
  selectedTo,
}) {
  const [isOpenFrom, setIsOpenFrom] = useState({});
  const [isOpenTo, setIsOpenTo] = useState({});

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
  const dayInfo = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  function toggleDropdown(index, type) {
    if (type === "from") {
      setIsOpenFrom((prev) => ({ ...prev, [index]: !prev[index] }));
    } else {
      setIsOpenTo((prev) => ({ ...prev, [index]: !prev[index] }));
    }
  }

  function handleDropdownSelect(index, option, type) {
    if (type === "from") {
      setSelectedFrom((prev) => ({ ...prev, [index]: option }));
      setIsOpenFrom((prev) => ({ ...prev, [index]: false }));
    } else {
      setSelectedTo((prev) => ({ ...prev, [index]: option }));
      setIsOpenTo((prev) => ({ ...prev, [index]: false }));
    }
  }

  function handleCheckboxChange(index, isChecked) {
    setCheckedDays((prev) => ({ ...prev, [index]: isChecked }));
  }

  return (
    <div className={styles.timegrid}>
      <div className={styles.inpersonvirtual}>
        <span className={styles.day}>Day</span>
        <span>From</span>
        <span>To</span>
      </div>

      <div className={styles.daycheckedcontainer}>
        {dayInfo.map((day, index) => (
          <div
            key={index}
            className={`${styles.inputtimecontainer} ${styles.daysselection}`}
          >
            <div className={styles.selectday}>
              <input
                type='checkbox'
                id={`check-${index}`}
                onChange={(e) => handleCheckboxChange(index, e.target.checked)}
                checked={!!checkedDays[index]}
              />
              <label htmlFor={`check-${index}`}>{day}</label>
            </div>

            <div className={styles.nairavirtual}>
              <div className='dropdown'>
                <div
                  className={`${styles.selecttimecontainer} ${
                    isOpenFrom[index] ? "select-clicked" : ""
                  }`}
                  onClick={() => toggleDropdown(index, "from")}
                >
                  <span className='selected-list'>
                    {selectedFrom[index] || "9:00 AM"}
                  </span>
                </div>
                {isOpenFrom[index] && (
                  <ul className={styles.menu}>
                    {time.map((option) => (
                      <li
                        key={option}
                        className={`menu-item ${
                          selectedFrom[index] === option ? "active" : ""
                        }`}
                        onClick={() =>
                          handleDropdownSelect(index, option, "from")
                        }
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
                    isOpenTo[index] ? "select-clicked" : ""
                  }`}
                  onClick={() => toggleDropdown(index, "to")}
                >
                  <span className='selected-list'>
                    {selectedTo[index] || "9:00 AM"}
                  </span>
                </div>
                {isOpenTo[index] && (
                  <ul className={styles.menu}>
                    {time.map((option) => (
                      <li
                        key={option}
                        className={`menu-item ${
                          selectedTo[index] === option ? "active" : ""
                        }`}
                        onClick={() =>
                          handleDropdownSelect(index, option, "to")
                        }
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
