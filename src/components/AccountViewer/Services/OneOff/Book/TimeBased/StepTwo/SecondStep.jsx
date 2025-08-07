/** @format */

import React, { useState } from "react";
import styles from "../../../style.module.css";

export default function SecondStep({
  handleCloseNext,
  handleDetails,
  setInformation,
  information,
}) {
  const time = [
    "9:00am",
    "9:30am",
    "10:00am",
    "10:30am",
    "11:00am",
    "11:30am",
    "12:00pm",
    "12:30am",
    "1:00pm",
    "1:30pm",
    "2:00pm",
    "2:30pm",
    "3:00pm",
    "3:30pm",
    "4:00pm",
    "4:30pm",
    "5:00pm",
  ];

  const [active, setActive] = useState(null);

  function handleSelectTime(selectedTime, index) {
    setActive(index);
    setInformation((prev) => ({
      ...prev,
      time: selectedTime,
    }));

    console.log("Selected Time:", selectedTime);
  }

  return (
    <div className={styles.selectTime}>
      <label htmlFor=''>Select time</label>{" "}
      <div className={styles.time}>
        {time.map((data, index) => (
          <div
            key={index}
            className={`${active === index ? styles.active : styles.list}`}
            onClick={() => handleSelectTime(data, index)}
          >
            <span>{data}</span>
          </div>
        ))}
      </div>
      <div className={styles.button}>
        <button className={styles.cancel} onClick={handleCloseNext}>
          Cancel
        </button>
        <button className={styles.next} onClick={handleDetails}>
          Next
        </button>
      </div>
    </div>
  );
}
