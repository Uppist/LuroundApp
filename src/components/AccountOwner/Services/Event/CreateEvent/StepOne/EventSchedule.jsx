/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import DatePicker from "react-datepicker";
import deletesvg from "../../../../../elements/delete-outline.svg";
import "react-datepicker/dist/react-datepicker.css";

export default function EventSchedule({ dates, setDates, handleDateChange }) {
  function addDateField() {
    setDates([
      ...dates,
      { id: Date.now(), date: null, from_time: "", to_time: "" },
    ]);
  }

  function deleteField(id) {
    setDates((prev) => prev.filter((item) => item.id !== id));
  }

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

  function toggleDropdown(index, type) {
    if (type === "from") {
      setIsOpenFrom((prev) => ({ ...prev, [index]: !prev[index] }));
      setIsOpenTo(false);
    } else {
      setIsOpenTo((prev) => ({ ...prev, [index]: !prev[index] }));
      setIsOpenFrom(true);
    }
  }

  function handleDropdownSelect(index, option, type) {
    if (type === "from") {
      handleDateChange(index, "from_time", option);
      setSelectedFrom((prev) => ({ ...prev, [index]: option }));
      setIsOpenFrom((prev) => ({ ...prev, [index]: false }));
    } else {
      handleDateChange(index, "to_time", option);

      setSelectedTo((prev) => ({ ...prev, [index]: option }));
      setIsOpenTo((prev) => ({ ...prev, [index]: false }));
    }
  }

  return (
    <div className={styles.timeservice}>
      <span>Event schedule</span>
      <div className={styles.timecontainer}>
        <div className={styles.startendtime}>
          <span className={styles.calendar}>calendar</span>
          <span>Start time</span>
          <span>End time</span>
          <span className={styles.calendar}>delete</span>
        </div>

        {dates.map((item, index) => (
          <div key={item.id} className={styles.inputtimecontainer}>
            <DatePicker
              selected={item.date}
              onChange={(date) => handleDateChange(index, "date", date)}
              dateFormat='dd MMM yyyy'
              placeholderText='Select a date'
              className={styles.custom}
            />

            <div className={styles.nairavirtual}>
              <div>
                <div
                  className={`${styles.selecttimecontainer} ${
                    isOpenFrom[index] ? "select-clicked" : ""
                  }`}
                  onClick={() => toggleDropdown(index, "from")}
                >
                  <span> {selectedFrom[index] || "9:00 AM"}</span>
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

            <div className={styles.nairavirtual}>
              <div>
                <div
                  className={`${styles.selecttimecontainer} ${
                    isOpenTo[index] ? "select-clicked" : ""
                  }`}
                  onClick={() => toggleDropdown(index, "to")}
                >
                  <span> {selectedTo[index] || "9:00 AM"}</span>
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

            <img
              src={deletesvg}
              onClick={() => deleteField(item.id)}
              style={{ cursor: "pointer" }}
              alt=''
            />
          </div>
        ))}

        <div>
          <button
            className={styles.addtimebutton}
            onClick={addDateField}
            type='button'
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10 0C4.4868 0 0 4.4868 0 10C0 15.5132 4.4868 20 10 20C15.5132 20 20 15.5132 20 10C20 4.4868 15.5132 0 10 0ZM10 18.5924C5.27859 18.5924 1.40763 14.7507 1.40763 10C1.40763 5.24927 5.24927 1.40763 10 1.40763C14.7214 1.40763 18.5924 5.24927 18.5924 10C18.5924 14.7507 14.7214 18.5924 10 18.5924Z'
                fill='#1D2E2E'
              />
              <path
                d='M14.6039 9.2086H10.7036V5.3083C10.7036 4.92707 10.381 4.60449 9.99981 4.60449C9.61858 4.60449 9.296 4.92707 9.296 5.3083V9.2086H5.39571C5.01447 9.2086 4.69189 9.53118 4.69189 9.91241C4.69189 10.2936 5.01447 10.6162 5.39571 10.6162H9.296V14.5165C9.296 14.8977 9.61858 15.2203 9.99981 15.2203C10.381 15.2203 10.7036 14.8977 10.7036 14.5165V10.6162H14.6039C14.9851 10.6162 15.3077 10.2936 15.3077 9.91241C15.3077 9.53118 14.9851 9.2086 14.6039 9.2086Z'
                fill='#1D2E2E'
              />
            </svg>
            <span>Add multiple dates</span>
          </button>
        </div>
      </div>
    </div>
  );
}
