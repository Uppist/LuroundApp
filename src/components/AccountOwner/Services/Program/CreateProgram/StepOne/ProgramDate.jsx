/** @format */

import React, { useState } from "react";
import nigeria from "../../../../../elements/nigeria.png";

import styles from "../../Program.module.css";
import DatePicker from "react-datepicker";

export default function ProgramDate({
  program,
  setProgram,
  programService,
  setProgramService,
  handleProgram,
  changeDate,
  pricing,
  handlePricing,
}) {
  const [dropdown, setDropdown] = useState(false);

  const options = [
    "Once a week",
    "Twice a week",
    "Once every 2 weeks",
    "Once every month",
    "Custom",
  ];

  function handleDropdown() {
    setDropdown((prev) => !prev);
  }

  function handleRecurrence(option) {
    setProgram((prev) => ({ ...prev, program_recurrence: option }));
    setDropdown(false);
  }

  function increaseParticipants() {
    setProgram((prev) => ({
      ...prev,
      max_participants: Math.max(0, Number(prev.max_participants) + 1),
    }));
  }

  function decreaseParticipants() {
    setProgram((prev) => ({
      ...prev,
      max_participants: Math.max(0, Number(prev.max_participants) - 1),
    }));
  }

  return (
    <div className={styles.programcalendar}>
      {/* Start & End Date */}
      <div className={styles.startcalendar}>
        <div className={styles.startenddate}>
          <span>Start date</span>
          <span>End date</span>
        </div>
        <div className={styles.inputcalendar}>
          <DatePicker
            selected={
              program.program_start_date
                ? new Date(program.program_start_date)
                : null
            }
            onChange={(date) =>
              handleProgram({
                target: { name: "program_start_date", value: date },
              })
            }
            dateFormat='dd MMM yyyy'
            placeholderText='Select a date'
            className={styles.custom}
          />
          <DatePicker
            selected={
              program.program_end_date
                ? new Date(program.program_end_date)
                : null
            }
            onChange={(date) =>
              handleProgram({
                target: { name: "program_end_date", value: date },
              })
            }
            dateFormat='dd MMM yyyy'
            placeholderText='Select a date'
            className={styles.custom}
          />
        </div>
      </div>

      {/* Recurrence */}
      <div className={styles.programrecurrence}>
        <span>Program recurrence</span>
        <button onClick={handleDropdown}>
          {program.program_recurrence || "Once a week"}
        </button>
      </div>
      {dropdown && (
        <ul className={styles.ul}>
          {options.map((option, index) => (
            <li key={index} onClick={() => handleRecurrence(option)}>
              {option}
            </li>
          ))}
        </ul>
      )}

      {/* Participants */}
      <div className={styles.noofparticipant}>
        <span>Maximum number of participants</span>
        <div className={styles.participant}>
          <svg
            onClick={decreaseParticipants}
            style={{ cursor: "pointer" }}
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.7895 10C15.7895 10.2895 15.5526 10.5263 15.2632 10.5263H4.73684C4.44737 10.5263 4.21053 10.2895 4.21053 10C4.21053 9.71053 4.44737 9.47368 4.73684 9.47368H15.2632C15.5526 9.47368 15.7895 9.71053 15.7895 10ZM20 10C20 15.5263 15.5263 20 10 20C4.47368 20 0 15.5263 0 10C0 4.47368 4.47368 0 10 0C15.5263 0 20 4.47368 20 10ZM18.9474 10C18.9474 5.05263 14.9474 1.05263 10 1.05263C5.05263 1.05263 1.05263 5.05263 1.05263 10C1.05263 14.9474 5.05263 18.9474 10 18.9474C14.9474 18.9474 18.9474 14.9474 18.9474 10Z'
              fill='#1D2E2E'
            />
          </svg>

          <input
            type='number'
            min='0'
            name='max_participants'
            value={program.max_participants || 0}
            onChange={(e) =>
              setProgram((prev) => ({
                ...prev,
                max_participants: Math.max(0, Number(e.target.value)),
              }))
            }
            placeholder='0'
          />

          <svg
            onClick={increaseParticipants}
            style={{ cursor: "pointer" }}
            width='20'
            height='20'
            viewBox='0 0 20 20'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M15.7895 10C15.7895 10.2895 15.5526 10.5263 15.2632 10.5263H10.5263V15.2632C10.5263 15.5526 10.2895 15.7895 10 15.7895C9.71053 15.7895 9.47368 15.5526 9.47368 15.2632V10.5263H4.73684C4.44737 10.5263 4.21053 10.2895 4.21053 10C4.21053 9.71053 4.44737 9.47368 4.73684 9.47368H9.47368V4.73684C9.47368 4.44737 9.71053 4.21053 10 4.21053C10.2895 4.21053 10.5263 4.44737 10.5263 4.73684V9.47368H15.2632C15.5526 9.47368 15.7895 9.71053 15.7895 10ZM20 10C20 15.5263 15.5263 20 10 20C4.47368 20 0 15.5263 0 10C0 4.47368 4.47368 0 10 0C15.5263 0 20 4.47368 20 10ZM18.9474 10C18.9474 5.05263 14.9474 1.05263 10 1.05263C5.05263 1.05263 1.05263 5.05263 1.05263 10C1.05263 14.9474 5.05263 18.9474 10 18.9474C14.9474 18.9474 18.9474 14.9474 18.9474 10Z'
              fill='#1D2E2E'
            />
          </svg>
        </div>
      </div>

      {/* Pricing */}
      <div className={styles.programfee}>
        <span>Program fee</span>
        <div className={styles.programservice}>
          <div className={styles.inperson}>
            <span>In-person</span>
            <div className={styles.nigeriaprice}>
              <button>
                <div className={styles.nigeriadown}>
                  <img src={nigeria} alt='NGN' />
                  <div className={styles.ngndown}>
                    <span>NGN</span>
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
                </div>
              </button>
              <input
                type='number'
                min='0'
                name='in_person'
                value={pricing.in_person}
                onChange={handlePricing}
                placeholder='0.00'
              />
            </div>
          </div>
          <div className={styles.inperson}>
            <span>Virtual</span>
            <div className={styles.nigeriaprice}>
              <button>
                <div className={styles.nigeriadown}>
                  <img src={nigeria} alt='NGN' />
                  <div className={styles.ngndown}>
                    <span>NGN</span>
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
                </div>
              </button>
              <input
                type='number'
                min='0'
                name='virtual'
                value={pricing.virtual}
                onChange={handlePricing}
                placeholder='0.00'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
