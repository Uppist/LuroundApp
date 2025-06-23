/** @format */

import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Updated import
import styles from "../style.module.css";

export default function Details({ handleCloseDetails }) {
  const location = useLocation();
  const navigate = useNavigate(); // Add navigate hook
  const data = location.state?.data || {};

  // Check if any meaningful data is provided, otherwise show no data message
  const hasData = Object.values(data).some((value) => value && value !== "");

  if (!hasData) return <div>No booking data available</div>;

  // Handler for Proceed to payment button
  const handleProceedToPayment = () => {
    navigate("/Success"); // Navigate to success page
  };

  return (
    <section className={styles.detail}>
      {/* Container for booking details with added spacing */}
      <div className={styles.details}>
        <div>
          {/* Back navigation link with SVG arrow */}
          <div onClick={handleCloseDetails} className={styles.backs} aria-label="Go back">
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
          </div>
          <div className={styles.bookings}>
            <span>Booking details</span>
          </div>

          {/* Form section with key-value pairs and separators */}
          <div className={styles.form}>
            <div className={styles.form2}>
              <div>
                <span className="name">
                  Name &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}> Jane Cooper </span>
                </span>
                <span>{data.name || ""}</span>
                <hr className={styles.line} /> {/* Horizontal line as a separator */}
              </div>
              <div>
                <span>
                  Email
                  &emsp;&emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}>janecooper@email.com</span>
                </span>
                <span>{data.email || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>
                  Phone number
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}>(+234) 853 573 658</span>
                </span>
                <span>{data.phoneNumber || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Service type
                  &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}>One-off Service</span>
                </span>
                <span>{data.serviceType || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Service name
                  &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}>Personal Training</span>
                </span>
                <span>{data.serviceName || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Date
                  &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}>Mon, 14 March 2023</span>
                </span>
                <span>{data.date || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Time
                  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}>10:30 AM</span>
                </span>
                <span>{data.time || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Duration
                  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}>30 mins</span>
                </span>
                <span>{data.duration || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Appointment type
                  &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}>In-person</span>
                </span>
                <span>{data.appointmentType || ""}</span>
                <hr className={styles.line} />
              </div>
              <div>
                <span>Service fee
                  &emsp; &emsp; &emsp; &emsp; &emsp; &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                  <span className={styles.bookInfo}>₦25,000</span>
                </span>
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
              <button onClick={handleCloseDetails} className={styles.cancel}>Cancel</button>
              <button className={styles.next} onClick={handleProceedToPayment}>
                Proceed to payment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}