/** @format */

import React, { useState } from "react";
import styles from "./Project.module.css";
import arrow from "../../../../elements/arrow.svg";

export default function Delivery({ setDeliveryTime }) {
  const [dropdown, setDropdown] = useState("3 days");
  const [open, setOpen] = useState(false);

  const options = [
    "3 days",
    "7 days",
    "2 weeks",
    "1 month",
    "3 months",
    "6 months",
  ];

  function handleDropdown() {
    setOpen((prev) => !prev);
  }

  function handleSelect(option) {
    setDropdown(option);
    setDeliveryTime(option);
    setOpen(false);
  }

  return (
    <>
      <div className={styles.delivery}>
        <label htmlFor=''>Delivery Timeline</label>
        <span>Starts counting from the day of booking</span>
      </div>

      <div className={styles.date} onClick={handleDropdown}>
        <span>{dropdown}</span>
        <img src={arrow} alt='arrow' />
      </div>

      {open && (
        <ul className={styles.dropdownList}>
          {options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleSelect(option)}
              className={styles.dropdownItem}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </>
  );
}
