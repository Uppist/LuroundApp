/** @format */

import React, { useState } from "react";
import Calendar from "./Calendar";
import Next from "./Next";
import styles from "./Calendar.module.css";

export default function SelectTime({
  booking,
  selectedDate,
  ChangeBack,
  onSeeLess,
}) {
  const weekday = selectedDate.toLocaleDateString("en-US", { weekday: "long" });
  const day = selectedDate.toLocaleDateString("en-US", { day: "numeric" });
  const month = selectedDate.toLocaleDateString("en-US", { month: "long" });
  const year = selectedDate.toLocaleDateString("en-US", { year: "numeric" });

  const formattedDate = `${weekday}, ${day} ${month}, ${year}`;

  const [activeButtonIndex, setActiveButtonIndex] = useState(null);
  const [isCalendar, setisCalendar] = useState(false);
  const times = ["9:00", "10:30", "12:00", "1:30", "3:00", "4:30"];
  const [isNext, setisNext] = useState("true");
  const [selectedTime, setSelectedTime] = useState(null);
  const handleClick = (index) => {
    setActiveButtonIndex(index);
    setSelectedTime(times[index]);
  };

  function changeDate() {
    setisCalendar(true);
  }

  function NextPage() {
    setisNext(false);
  }

  return (
    <>
      {isNext ? (
        isCalendar ? (
          <Calendar
            booking={booking}
            selectedDate={selectedDate}
            ChangeBack={ChangeBack}
          />
        ) : (
          <>
            <div className={styles.selecteddatecontainer}>
              <div className={styles.changedate}>
                <label className={styles.formatteddate}>{formattedDate}</label>

                <button onClick={changeDate} className={styles.change}>
                  Change
                </button>
              </div>
              <span className={styles.selecttime}>Select Time</span>

              <label className={styles.duration}>
                Duration: {booking.hour}
              </label>
              <div className={styles.timeselectioncontainer}>
                {times.map((time, index) => (
                  <div key={index} className={styles.buttoncontainer}>
                    <button
                      onClick={() => handleClick(index)}
                      className={`${styles.buttontime} ${
                        activeButtonIndex === index ? styles.active : ""
                      }`}
                    >
                      {time}
                    </button>
                    <button
                      onClick={NextPage}
                      className={`${styles.buttonnext} ${
                        activeButtonIndex === index ? styles.show : ""
                      }`}
                    >
                      Next
                    </button>{" "}
                  </div>
                ))}
              </div>
            </div>
          </>
        )
      ) : (
        <Next
          formattedDate={formattedDate}
          time={selectedTime}
          selectedDate={selectedDate}
          booking={booking}
          ChangeBack={ChangeBack}
          onSeeLess={onSeeLess}
        />
      )}
    </>
  );
}
