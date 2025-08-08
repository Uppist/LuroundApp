/** @format */
import React, { useState } from "react";
import styles from "./style.module.css";

export default function Amount({ slots, updateSlot, addSlot, deleteSlot }) {
  return (
    <>
      <div className={styles.timecontainer}>
        <div className={styles.inpersonvirtual2}>
          <span className={styles.min}>min</span>
          <span>Virtual</span>
          <span>In-person</span>
          <span className={styles.del}>Delete</span>
        </div>

        {slots.map((slot) => (
          <div className={styles.inputtimecontainer} key={slot.id}>
            <div className={styles.buttonmins}>
              <input
                type='text'
                inputMode='numeric'
                maxLength={2}
                value={slot.time_allocation}
                onChange={(e) =>
                  updateSlot(slot.id, "time_allocation", e.target.value)
                }
              />
              <span>Months</span>
            </div>

            <div className={styles.nairavirtual}>
              <input
                type='number'
                name='virtual'
                placeholder='₦20,000'
                value={slot.virtual}
                onChange={(e) => updateSlot(slot.id, "virtual", e.target.value)}
              />
            </div>

            <div className={styles.nairainperson}>
              <input
                type='number'
                name='in_person'
                placeholder='₦120,000'
                value={slot.in_person}
                onChange={(e) =>
                  updateSlot(slot.id, "in_person", e.target.value)
                }
              />
            </div>

            <svg
              onClick={() => deleteSlot(slot.id)}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              style={{ cursor: "pointer" }}
            >
              <path
                d='M4 6.55556H20M18.2222 6.55556V19C18.2222 19.4715 18.0349 19.9237 17.7015 20.2571C17.3681 20.5905 16.9159 20.7778 16.4444 20.7778H7.55556C7.08406 20.7778 6.63187 20.5905 6.29848 20.2571C5.96508 19.9237 5.77778 19.4715 5.77778 19V6.55556M8.44444 6.55556V4.77778C8.44444 4.30628 8.63175 3.8541 8.96514 3.5207C9.29854 3.1873 9.75073 3 10.2222 3H13.7778C14.2493 3 14.7015 3.1873 15.0349 3.5207C15.3683 3.8541 15.5556 4.30628 15.5556 4.77778V6.55556M10.2222 11V16.3333M13.7778 11V16.3333'
                stroke='#1D2E2E'
                strokeOpacity='0.8'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        ))}
      </div>

      <div>
        <button className={styles.addtimebutton} onClick={addSlot}>
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
          <span>Add time slot</span>
        </button>
      </div>
    </>
  );
}
