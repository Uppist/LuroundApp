/** @format */
/** @format */
import { useState } from "react";
import styles from "./Time/module.css";
import { useNavigate } from "react-router-dom";

export default function Time({
  setCheckedDays,
  setSelectedFrom,
  setSelectedTo,
  checkedDays,
  selectedFrom,
  selectedTo,
  dayInfo,
}) {
  const [isOpenFrom, setIsOpenFrom] = useState({});
  const [isOpenTo, setIsOpenTo] = useState({});

  const time = [
    "12:00 am",
    "12:15 am",
    "12:30 am",
    "12:45 am",
    "1:00 am",
    "1:15 am",
    "1:30 am",
    "1:45 am",
    "2:00 am",
    "2:15 am",
    "2:30 am",
    "2:45 am",
    "3:00 am",
    "3:15 am",
    "3:30 am",
    "3:45 am",
    "4:00 am",
    "4:15 am",
    "4:30 am",
    "4:45 am",
    "5:00 am",
    "5:15 am",
    "5:30 am",
    "5:45 am",
    "6:00 am",
    "6:15 am",
    "6:30 am",
    "6:45 am",
    "7:00 am",
    "7:15 am",
    "7:30 am",
    "7:45 am",
    "8:00 am",
    "8:15 am",
    "8:30 am",
    "8:45 am",
    "9:00 am",
    "9:15 am",
    "9:30 am",
    "9:45 am",
    "10:00 am",
    "10:15 am",
    "10:30 am",
    "10:45 am",
    "11:00 am",
    "11:15 am",
    "11:30 am",
    "11:45 am",
    "12:00 pm",
    "12:15 pm",
    "12:30 pm",
    "12:45 pm",
    "1:00 pm",
    "1:15 pm",
    "1:30 pm",
    "1:45 pm",
    "2:00 pm",
    "2:15 pm",
    "2:30 pm",
    "2:45 pm",
    "3:00 pm",
    "3:15 pm",
    "3:30 pm",
    "3:45 pm",
    "4:00 pm",
    "4:15 pm",
    "4:30 pm",
    "4:45 pm",
    "5:00 pm",
    "5:15 pm",
    "5:30 pm",
    "5:45 pm",
    "6:00 pm",
    "6:15 pm",
    "6:30 pm",
    "6:45 pm",
    "7:00 pm",
    "7:15 pm",
    "7:30 pm",
    "7:45 pm",
    "8:00 pm",
    "8:15 pm",
    "8:30 pm",
    "8:45 pm",
    "9:00 pm",
    "9:15 pm",
    "9:30 pm",
    "9:45 pm",
    "10:00 pm",
    "10:15 pm",
    "10:30 pm",
    "10:45 pm",
    "11:00 pm",
    "11:15 pm",
    "11:30 pm",
    "11:45 pm",
  ];

  function toggleDropdown(index, type) {
    if (type === "from") {
      setIsOpenFrom((prev) => ({ ...prev, [index]: !prev[index] }));
      setIsOpenTo(false);
    } else {
      setIsOpenTo((prev) => ({ ...prev, [index]: !prev[index] }));
      setIsOpenFrom(false);
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
                  <>
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
                  </>
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
                  <>
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
                    </ul>{" "}
                  </>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
