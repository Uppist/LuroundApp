/** @format */

import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Updated import
import styles from "./style.module.css";
import axios from "axios";
import { bookingsContext } from "../../../../../../Context";

export default function Details({ handleCloseDetails, information }) {
  const location = useLocation();
  const navigate = useNavigate(); // Add navigate hook
  const data = location.state?.data || {};

  // Check if any meaningful data is provided, otherwise show no data message
  const hasData = Object.values(data).some((value) => value && value !== "");

  if (!hasData) return <div>No booking data available</div>;

  const { bookingsId, setBookingsId } = useContext(bookingsContext);
  // Handler for Proceed to payment button
  const handleProceedToPayment = () => {
    const token = localStorage.getItem("Token");

    console.log("Booking Service ID:", data._id);
    console.log("Booking payload:", information);

    axios
      .post(
        `https://api.luround.com/v1/booking/book-service?serviceId=${data._id}`,
        information,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("Booking success:", res.data);
        setBookingsId(res.data.BookingId);
      })
      .catch((err) => {
        console.error("Booking failed:", err.response?.data || err.message);
      });
  };

  console.log(data.pricing?.[0]?.time_allocation);
  return (
    <section className={styles.detail}>
      {/* Container for booking details with added spacing */}
      <div className={styles.details}>
        <div>
          {/* Back navigation link with SVG arrow */}
          <div
            onClick={handleCloseDetails}
            className={styles.backs}
            aria-label='Go back'
          >
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
            <span className={styles.backz}>Back</span>
          </div>
          <div className={styles.bookings}>
            <span>Booking details</span>
          </div>

          {/* Form section with key-value pairs and separators */}
          <div className={styles.form}>
            <div className={styles.form2}>
              <div>
                <div className={styles.name}>
                  <span>Name</span>
                  <span>{information.displayName || ""}</span>
                </div>
                <hr className={styles.line} />{" "}
                {/* Horizontal line as a separator */}
              </div>
              <div>
                <div className={styles.name}>
                  <span>Email</span>
                  <span>{information.email || ""}</span>
                </div>
                <hr className={styles.line} />
              </div>
              <div>
                <div className={styles.name}>
                  <span>Phone number</span>
                  <span>{information.phone_number || ""}</span>
                </div>
                <hr className={styles.line} />
              </div>
              <div>
                <div className={styles.name}>
                  <span>Service type</span>
                  <span>{data.service_type || ""}</span>
                </div>
                <hr className={styles.line} />
              </div>
              <div>
                <div className={styles.name}>
                  <span>Service name </span>
                  <span>{data.service_name || ""}</span>
                </div>
                <hr className={styles.line} />
              </div>
              <div>
                <div className={styles.name}>
                  <span>Date</span>
                  <span>{information.date || ""}</span>
                </div>
                <hr className={styles.line} />
              </div>
              <div>
                {" "}
                <div className={styles.name}>
                  <span>Time</span>
                  <span>{information.time || ""}</span>
                </div>
                <hr className={styles.line} />
              </div>
              <div>
                {" "}
                <div className={styles.name}>
                  <span>Duration</span>
                  <span>{data.pricing?.[0]?.time_allocation || ""}mins</span>
                </div>
                <hr className={styles.line} />
              </div>
              <div>
                <div className={styles.name}>
                  <span>Appointment type</span>
                  <span>{data.appointmentType || ""}</span>
                </div>
                <hr className={styles.line} />
              </div>
              <div>
                <span>
                  Service fee
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
              <span className={styles.note}>
                Note <br />
              </span>
              <span>{information.message}</span>
              <hr className={styles.line} />
            </div>
            <div className={styles.button}>
              <button onClick={handleCloseDetails} className={styles.cancel}>
                Cancel
              </button>
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
