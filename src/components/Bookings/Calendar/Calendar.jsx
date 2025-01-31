/** @format */

/** @format */
import React, { useState, useEffect } from "react";
import SelectTime from "./Time";
import styles from "./Calendar.module.css";

export default function Calendar({ booking, ChangeBack, onSeeLess }) {
  const [currentDate, setcurrentDate] = useState(new Date());
  const [daysInMonth, setdaysInMonth] = useState([]);
  const [startDay, setstartDay] = useState(0);
  const [selectedDate, setselectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(false);
  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const date = new Date(year, month, 1);
    const days = [];

    while (date.getMonth() === month) {
      days.push(new Date(date));
      date.setDate(date.getDate() + 1);
    }

    setdaysInMonth(days);
    setstartDay(new Date(year, month, 1).getDay());
  }, [currentDate]);

  const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  function prevMonth() {
    setcurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() - 1)));
  }

  function nextMonth() {
    setcurrentDate(new Date(currentDate.setMonth(currentDate.getMonth() + 1)));
  }

  function handleDateClick(date) {
    setselectedDate(date);
    setSelectedTime(true);
  }

  return (
    <>
      {!selectedTime ? (
        <div className={styles.fullcalendar}>
          <span className={styles.select}>Select Date</span>
          <div className={styles.calendar}>
            <div className={styles.header}>
              <svg
                onClick={prevMonth}
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
              <span>
                {currentDate.toLocaleString("default", { month: "long" })}{" "}
                {currentDate.getFullYear()}
              </span>

              <svg
                onClick={nextMonth}
                width='7'
                height='12'
                viewBox='0 0 7 12'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M1 11L6 6L1 1'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <div>
              <div className={styles.daynames}>
                {dayNames.map((day) => (
                  <div key={day} className={styles.dayname}>
                    {day}
                  </div>
                ))}
              </div>

              <div className={styles.days}>
                {Array.from({ length: startDay }).map((_, index) => (
                  <div key={index} className={styles.emptyday}></div>
                ))}

                {daysInMonth.map((day) => (
                  <div
                    key={day}
                    className={`${styles.day} ${
                      day.getDate() === new Date().getDate() &&
                      day.getMonth() === new Date().getMonth()
                        ? "today"
                        : ""
                    }${
                      selectedDate &&
                      day.toDateString() === selectedDate.toDateString()
                        ? `${styles.selected}`
                        : ""
                    }`}
                    onClick={() => handleDateClick(day)}
                  >
                    {day.getDate()}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <SelectTime
          booking={booking}
          selectedDate={selectedDate}
          ChangeBack={ChangeBack}
          onSeeLess={onSeeLess}
        />
      )}
    </>
  );
}
