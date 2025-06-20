/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "../style.module.css";

export default function Details() {
  const location = useLocation();
  const data = location.state?.data || {};

  // Check if any meaningful data is provided, otherwise show no data message
  const hasData = Object.values(data).some((value) => value && value !== "");

  if (!hasData) return <div>No booking data available</div>;

  return (
    <section className={styles.detail}>

        {/* Container for booking details with added spacing */}
        <div className={styles.details}>
          <div>
          {/* Back navigation link with SVG arrow */}
          <Link to="/bookings" className={styles.backs} aria-label="Go back">
            <svg
              width="7"
              height="12"
              viewBox="0 0 7 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1L1 6L6 11"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className={styles.backz}>Back</span>
          </Link>
          <div className={styles.bookings}>
            <span>Booking details</span>
          </div>

          {/* Form section with key-value pairs and separators */}
          <div className={styles.form}>
            <div className={styles.form2}>
              <div>
                <span className="name">Name</span>
                <span>{data.name || ""}</span>
                <hr className={styles.line} /> {/* Horizontal line as a separator */}
              </div>
              <div>
                <span>Email</span>
                <span>{data.email || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Phone number</span>
                <span>{data.phoneNumber || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Service type</span>
                <span>{data.serviceType || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Service name</span>
                <span>{data.serviceName || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Date</span>
                <span>{data.date || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Time</span>
                <span>{data.time || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Duration</span>
                <span>{data.duration || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Appointment type</span>
                <span>{data.appointmentType || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Service fee</span>
                <span>{data.serviceFee || ""}</span>
                <hr className={styles.line} />
              </div>
            </div>
          </div>

          {/* New section for Note and Buttons */}
          <div className={styles.form2}>
            <div>
              <span className={styles.note}>Note <br /></span>
              <span>
                <br />Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. <br /> <br />
              </span>
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </span>
              <hr className={styles.line} />
            </div>
            <div className={styles.button}>
              <button className={styles.cancel}>Cancel</button>
              <button className={styles.next}>Proceed to payment</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}