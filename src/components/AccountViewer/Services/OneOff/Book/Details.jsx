/** @format */

import React from "react";
import styles from "../style.module.css";
import { Link } from "react-router-dom";

export default function Details({ data }) {
  return (
    <section className={styles.detail}>
      <div>
        <div className={styles.back}>
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 1L1 6L6 11'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <span>Back</span>
        </div>

        <div>
          <span>Booking details</span>

          <div>
            <div>
              <span>Name</span>
              <span>Olaniyan</span>
            </div>
            <div>
              <span>Email</span>
              <span>Email</span>
            </div>
            <div>
              {" "}
              <span>Phone Number</span>
              <span>phone number</span>
            </div>
            <div>
              {" "}
              <span>Service type</span>
              <span>oneoff</span>
            </div>
            <div>
              <span>Service name</span>
              <span>Personal </span>
            </div>
            <div>
              {" "}
              <span>Date</span>
              <span>date</span>
            </div>
            <div>
              {" "}
              <span>Time</span>
              <span>time</span>
            </div>
            <div>
              {" "}
              <span>Duration</span>
              <span>duration</span>
            </div>
            <div>
              {" "}
              <span>Appointment type</span>
              <span>9:00pm</span>
            </div>
            <div>
              {" "}
              <span>Service fee</span>
              <span>#25,000</span>
            </div>
            <div>
              {" "}
              <span>Note</span>
              <span>Note</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
