/** @format */

import React, { useEffect, useState } from "react";
import styles from "./OneOff.module.css";

export default function VirtualContainer({ data, index, showPart }) {
  // console.log(`Data at index ${index}:`, data.minutes);

  const [selectRadio, setSelectRadio] = useState({});
  const [isOpen, setIsOpen] = useState({});
  const [selectedOption, setSelectedOption] = useState([]);
  const OneOffoptions = [
    "15 mins",
    "30 mins",
    "45 mins",
    "60 mins",
    "90 mins",
    "120 mins",
  ];

  const retainerOption = ["3 months", "6 months", "12 months", "24 months"];

  // console.log(`Session Type at index ${index}:`, data.minutes);

  // useEffect(() => {
  //   if (data?.sessionType) {
  //     if (data.sessionType === "oneoff") {
  //       setSelectedOption(OneOffoptions);
  //     } else if (data.sessionType === "retainer") {
  //       setSelectedOption(retainerOption);
  //     } else if (data.sessionType === "event") {
  //       defaultOption = "";
  //     } else {
  //       // console.warn(`Invalid sessionType at index ${index}:`, data);
  //     }
  //   } else {
  //     // console.warn(`sessionType is missing in data at index ${index}:`, data);
  //   }
  // }, [data.sessionType]);

  function radioChange(index, type) {
    setSelectRadio((prevState) => ({
      ...prevState,
      [index]: type,
    }));
  }

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

  const sessionType = data.minutes; // Example: "oneoff" or "retainer"
  const options = sessionType === "oneoff" ? OneOffoptions : retainerOption;

  return (
    <div
      className={`${styles.pricesession}  ${
        selectRadio[index] === "virtual"
          ? `${styles.virtualbg}`
          : selectRadio[index] === "in-person"
          ? `${styles.inpersonbg}`
          : ""
      }`}
    >
      <div className={styles.radiovirtual}>
        <div className={styles.virtual}>
          <input
            type='radio'
            name='radio'
            onChange={() => radioChange(index, "virtual")}
          />
          <span>Virtual</span>
        </div>
        <div className={styles.inperson}>
          <input
            type='radio'
            name='radio'
            onChange={() => radioChange(index, "in-person")}
          />
          <span>In-person</span>
        </div>
      </div>
      <div className={styles.pricingamount}>
        <div className={styles.pricing}>
          <span>{data.pricing}</span>
          {data.sessionType !== "event" && data.sessionType !== "program" && (
            <div className={styles.minsarrow}>
              <div className={styles.dropdown}>
                <div
                  className={`${styles.selectlist} ${
                    isOpen[index] ? "select-clicked" : ""
                  }`}
                  onClick={() => dropDown(index)}
                >
                  <span className='selected-list'>
                    {selectedOption[index] || options[0]}{" "}
                  </span>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                      stroke='currentColor'
                      strokeOpacity='0.8'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
                {isOpen[index] && (
                  <ul className={styles.menu}>
                    {options.map((option) => (
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
          )}
        </div>
        <div className={styles.nairasession}>
          <span className={styles.naira}>
            {" "}
            {selectRadio[index] === "in-person" ? data.inperson : data.amount}
          </span>
          {/* <span className={styles.session}>{data.session}</span> */}
        </div>
      </div>
    </div>
  );
}
