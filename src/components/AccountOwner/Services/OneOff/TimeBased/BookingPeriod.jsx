/** @format */
import { useState } from "react";
import styles from "./style.module.css";

export default function BookingPeriod({ setPeriod }) {
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

  function handleDropdown(key) {
    setIsOpen((prev) => ({
      Period: false,
      Days: false,
      Buffer: false,
      [key]: !prev[key], // toggle selected dropdown
    }));
  }

  function handleSelect(key, value) {
    const updatedState = { ...state, [key]: value };
    setState(updatedState);

    setPeriod({
      booking_period: updatedState.Period,
      notice_period: updatedState.Days,
      appointment_buffer: updatedState.Buffer,
      in_person_location: "", // optional: update this if you add location input
      virtual_meeting_link: "", // optional: same as above
    });

    setIsOpen({ Period: false, Days: false, Buffer: false });
  }

  return (
    <div className={styles.bookingnotice}>
      {/* Booking Period */}
      <div className={styles.bookingperiod}>
        <div className={styles.pbooking}>
          <span>Booking period</span>
          <p>How far in advance can attendees book?</p>
        </div>

        <button onClick={() => handleDropdown("Period")}>
          <div>
            <div className={styles.bookingmonth}>
              <span>{state.Period}</span>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>

            {isOpen.Period && (
              <div className={styles.menubooking}>
                {months.map((monthOption, index) => (
                  <span
                    key={index}
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
      {/* Notice Period */}
      {/* <div className={styles.bookingperiod}>
        <div className={styles.pbooking}>
          <span>Notice period</span>
          <p>Minimum notice before someone can book</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => handleDropdown("Days")}>
            <div>
              {" "}
              <div className={styles.bookingmonth}>
                <span>{state.Days}</span>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                    stroke='#1D2E2E'
                    strokeOpacity='0.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                {isOpen.Days && (
                  <div className={styles.daymenu}>
                    {days.map((dayOption, index) => (
                      <span
                        key={index}
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
                )}
              </div>
            </div>
          </button>
          <button>
            <div className={styles.bookingmonth}>
              <span>days</span>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </button>
        </div>
      </div> */}
      {/* Appointment Buffer */}
      {/* <div className={styles.bookingperiod}>
        <div className={styles.pbooking}>
          <span>Appointment buffer</span>
          <p>Minimum time between appointments</p>
        </div>
        <div className={styles.buttons}>
          <button onClick={() => handleDropdown("Buffer")}>
            <div>
              <div className={styles.bookingmonth}>
                <span>{state.Buffer}</span>
                <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                  <path
                    d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                    stroke='#1D2E2E'
                    strokeOpacity='0.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                {isOpen.Buffer && (
                  <div className={styles.daymenu}>
                    {buffer.map((option, index) => (
                      <span
                        key={index}
                        className={`${styles.menuitem} ${
                          state.Buffer === option ? "active" : ""
                        }`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect("Buffer", option);
                        }}
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </button>
          <button>
            <div className={styles.bookingmonth}>
              <span>minutes</span>
              <svg width='16' height='16' viewBox='0 0 16 16' fill='none'>
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </button>
        </div>
      </div> */}
      {/* Save Button */}
      {/* <div style={{ marginTop: "2rem" }}>
        <button onClick={handleSubmit} className={styles.saveBtn}>
          Save and Continue
        </button>
      </div> */}
    </div>
  );
}
