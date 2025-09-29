/** @format */

import React, { useContext, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./style.module.css";
import axios from "axios";
import { bookingsContext } from "../../../../../../Context";

export default function Details({ handleCloseDetails, information }) {
  const location = useLocation();
  const navigate = useNavigate(); // Add navigate hook
  const data = location.state?.data || {};

  const hasData = Object.values(data).some((value) => value && value !== "");

  if (!hasData) return <div>No booking data available</div>;

  console.log(data);

  const today = new Date();

  const weekday = today.toLocaleDateString("en-US", { weekday: "short" });
  const day = today.toLocaleDateString("en-US", { day: "2-digit" });
  const month = today.toLocaleDateString("en-US", { month: "long" });
  const year = today.getFullYear();

  const formatted = `${weekday}, ${day} ${month} ${year}`;

  console.log(formatted);

  const { bookingsId, setBookingsId } = useContext(bookingsContext);
  // Handler for Proceed to payment button
  const handleProceedToPayment = () => {
    const token = localStorage.getItem("Token");

    console.log("Booking Service ID:", data._id);
    console.log("Booking payload:", information);

    axios
      .get(
        "https://api.luround.com/v1/payments/verify-payment?ref_id=PAY_3434534",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });

    // axios
    //   .post(
    //     `https://api.luround.com/v1/booking/book-service?serviceId=${data._id}`,
    //     information,
    //     {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //         "Content-Type": "application/json",
    //       },
    //     }
    //   )
    //   .then((res) => {
    //     console.log("Booking success:", res.data);
    //     setBookingsId(res.data.BookingId);
    //   })
    //   .catch((err) => {
    //     console.error("Booking failed:", err.response?.data || err.message);
    //   });
  };

  console.log(data.pricing?.[0]?.time_allocation);
  return (
    <section className={styles.detail}>
      <div className={styles.details}>
        <div>
          <Link to={-1}>
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
          </Link>
          <div className={styles.bookings}>
            <span>Booking details</span>
          </div>

          <div className={styles.form}>
            <div className={styles.form2}>
              <div>
                <div className={styles.name}>
                  <span>Name</span>
                  <span>{information.displayName || ""}</span>
                </div>
                <hr className={styles.line} />{" "}
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
              {data.service_type === "program" && (
                <div>
                  {" "}
                  <div className={styles.name}>
                    <span>Program name</span>
                    <span>{data.service_name || ""}</span>
                  </div>
                  <hr className={styles.line} />
                </div>
              )}
              <div>
                <div className={styles.name}>
                  <span>Service type</span>
                  <span>{data.service_type || ""}</span>
                </div>
                <hr className={styles.line} />
              </div>
              {data.service_type !== "program" && (
                <div>
                  <div className={styles.name}>
                    <span>Service name </span>
                    <span>{data.service_name || ""}</span>
                  </div>
                  <hr className={styles.line} />
                </div>
              )}
              {data.service_type !== "program" && (
                <div>
                  <div className={styles.name}>
                    <span>Date</span>
                    <span>{information.date || formatted}</span>
                  </div>
                  <hr className={styles.line} />
                </div>
              )}
              {data.service_type === "program" && (
                <div>
                  <div className={styles.name}>
                    <span>Start date</span>
                    <span>{data.program_start_date || ""}</span>
                  </div>
                  <hr className={styles.line} />
                </div>
              )}{" "}
              {data.service_type === "program" && (
                <div>
                  <div className={styles.name}>
                    <span>End date</span>
                    <span>{data.program_end_date || "N/A"}</span>
                  </div>
                  <hr className={styles.line} />
                </div>
              )}
              {data.one_off_type !== "project-based" ||
                (data.service_type === "program" && (
                  <div>
                    {" "}
                    <div className={styles.name}>
                      <span>Time</span>
                      <span>{information.time || ""}</span>
                    </div>
                    <hr className={styles.line} />
                  </div>
                ))}
              <div>
                {" "}
                <div className={styles.name}>
                  <span>Duration</span>
                  {data.service_type === "program" ? (
                    <span>{data.duration || "N/A"}</span>
                  ) : (
                    <span>
                      {data.service_type === "retainer"
                        ? `${
                            data.pricing?.[0]?.time_allocation ||
                            data.delivery_timeline
                          } months`
                        : data.pricing?.[0]?.time_allocation
                        ? `${data.pricing[0].time_allocation} mins`
                        : data.delivery_timeline}
                    </span>
                  )}
                </div>
                <hr className={styles.line} />
              </div>
              {data.service_type === "program" && (
                <div>
                  <div className={styles.name}>
                    <span>Recurrence</span>
                    <span>{data.program_recurrence}</span>
                  </div>
                  <hr className={styles.line} />
                </div>
              )}{" "}
              {data.service_type === "program" && (
                <div>
                  <div className={styles.name}>
                    <span>Max no. of participants</span>
                    <span>{data.max_participants || ""}</span>
                  </div>
                  <hr className={styles.line} />
                </div>
              )}
              {data.one_off_type !== "project-based" ||
                (data.service_type === "program" && (
                  <div>
                    <div className={styles.name}>
                      <span>Appointment type</span>
                      <span>{data.appointmentType || ""}</span>
                    </div>
                    <hr className={styles.line} />
                  </div>
                ))}
              {data.service === "program" && (
                <div>
                  <div className={styles.name}>
                    <span>Program type</span>
                    <span>{data.type || formatted}</span>
                  </div>
                  <hr className={styles.line} />
                </div>
              )}
              <div>
                <span>
                  Service fee
                  <span className={styles.bookInfo}>
                    {data.service_type === "program" ? (
                      <> ₦{Number(data.pricing).toLocaleString()}</>
                    ) : (
                      <> ₦{Number(data.project_pricing).toLocaleString()}</>
                    )}
                  </span>
                </span>
                <span>{data.serviceFee || ""}</span>
                <hr className={styles.line} />
              </div>
            </div>
          </div>

          <div className={styles.form2}>
            <div>
              <span className={styles.note}>
                Note <br />
              </span>
              <span>{information.message}</span>
              <hr className={styles.line} />
            </div>
            <div className={styles.button}>
              <Link to={-1}>
                <button onClick={handleCloseDetails} className={styles.cancel}>
                  Cancel
                </button>
              </Link>
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
