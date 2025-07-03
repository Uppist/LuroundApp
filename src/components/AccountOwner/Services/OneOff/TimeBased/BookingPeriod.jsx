/** @format */
import { useState } from "react";
import styles from "./Time.module.css";

export default function BookingPeriod() {
  const [state, setState] = useState({
    Period: "3 months",
    Days: "1",
    Buffer: "15",
  });
  const [isOpen, setIsOpen] = useState({
    Period: false,
    Days: false,
    Buffer: false,
  });

  function handleDropdown(key) {
    setIsOpen((prev) => ({
      Period: false,
      Days: false,
      Buffer: false,
      [key]: !prev[key], // Toggle the specific dropdown
    }));
  }

  function handleSelect(key, value) {
    setState((prev) => ({ ...prev, [key]: value }));
    setIsOpen({ Period: false, Days: false, Buffer: false });
  }

  const months = [
    "1 month",
    "2 months",
    "3 months",
    "4 months",
    "5 months",
    "6 months",
    "7 months",
    "8 months",
    "9 months",
    "10 months",
    "11 months",
    "12 months",
  ];

  const days = ["1", "2", "3", "4", "5"];
  const buffer = ["15", "30", "45", "50"];

  return (
    <div className={styles.bookingnotice}>
      <div className={styles.bookingperiod}>
        <div className={styles.pbooking}>
          <span>Booking period</span>
          <p>how far in advance can attendees book?</p>
        </div>

        <button onClick={() => handleDropdown("Period")}>
          <div>
            <div className={styles.bookingmonth}>
              <span>{state.Period}</span>

              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>

            {isOpen.Period && (
              <div className={styles.menubooking}>
                {months.map((monthOption, monthIndex) => (
                  <span
                    key={monthIndex}
                    className={`${styles.menuitem} ${
                      state.Period === monthOption ? "active" : ""
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();

                      handleSelect("Period", monthOption);
                    }}
                  >
                    {monthOption}
                  </span>
                ))}
              </div>
            )}
          </div>
        </button>
      </div>

      <div className={styles.bookingperiod}>
        <div className={styles.pbooking}>
          <span>Notice period</span>
          <p>how far in advance can attendees book?</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => handleDropdown("Days")}>
            <div className={styles.bookingmonth}>
              <span>{state.Days}</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
              {isOpen.Days && (
                <div className={styles.menubooking}>
                  {days.map((dayOption, dayIndex) => (
                    <span
                      key={dayIndex}
                      className={`${styles.menuitem} ${
                        state.Days === dayOption ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect("Days", dayOption);
                      }}
                    >
                      {dayOption}
                    </span>
                  ))}
                </div>
              )}{" "}
            </div>
          </button>
          <button>
            <div className={styles.bookingmonth}>
              <span>days</span>

              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className={styles.bookingperiod}>
        <div className={styles.pbooking}>
          <span>Appointment buffer</span>
          <p>how far in advance can attendees book?</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => handleDropdown("Buffer")}>
            <div className={styles.bookingmonth}>
              <span>{state.Buffer}</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              {isOpen.Buffer && (
                <div className={styles.menubooking}>
                  {buffer.map((bufferOption, bufferIndex) => (
                    <span
                      key={bufferIndex}
                      className={`${styles.menuitem} ${
                        state.Buffer === bufferOption ? "active" : ""
                      }`}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleSelect("Buffer", bufferOption);
                      }}
                    >
                      {bufferOption}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </button>
          <button>
            <div className={styles.bookingmonth}>
              <span>minutes</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
