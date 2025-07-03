/** @format */

import React, { useState } from "react";
import styles from "./See.module.css";
import styles2 from "../Booking.module.css";
import styles3 from "../../Services/Retainer/Details.module.css";
import styles4 from "../../Services/Retainer/Retainer.module.css";
import Reschedule from "./Reschedule";
import QuickAction from "./QuickAction";
import { Link, useLocation } from "react-router-dom";
export default function See() {
  const [showReschedule, setShowReschedule] = useState(false);
  const [onCancel, setonCancel] = useState(false);

  const RescheduleDate = () => {
    setShowReschedule(true);
  };
  const location = useLocation();
  const { booking } = location.state || {};

  if (!booking) {
    return <div>No bookings yet</div>;
  }

  const openModal = () => {
    setonCancel(true);
    document.body.classList.add("active-modal");
  };

  const closeModal = () => {
    setonCancel(false);
  };

  const backReschedule = () => {
    setShowReschedule(false);
  };

  return (
    <div className={styles2.bookings}>
      <div className={styles.see}>
        <Link to='/bookings'>
          <button className={styles3.timeback}>
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
          </button>
        </Link>
        <div className={styles.seedetails}>
          <div className={styles.seemorecontainer}>
            <div className={styles.detailscontainer}>
              <div className={styles2.imagesvg}>
                <div className={styles2.imagecontainer}>
                  <div className={styles2.circlename}>
                    <img src={booking.image} />
                  </div>
                  <div className={styles2.namebook}>
                    <span className={styles2.bookingname}>{booking.Name}</span>
                    {/* <div className='imagebookedyou'>
                    <span className='bookedyou'>{booking.Booked}</span>
                    <img src={booking.bookedyou} />
                  </div> */}
                  </div>
                </div>
              </div>
              <div className={styles.dateseeless}>
                <div className={styles2.datetitle}>
                  <div className={styles2.bookingtitle}>
                    <div className={styles2.titleservice}>
                      <span className={styles2.title}>{booking.title}</span>
                      <div className='service-one'>
                        <span className={styles4.servicetype}>
                          {" "}
                          {booking.service}{" "}
                        </span>
                        <span className={styles4.oneofftext}>
                          {" "}
                          {booking.type}{" "}
                        </span>
                      </div>
                    </div>
                    <div className={styles.appointmentcon}>
                      <div className={styles.appointmentdetails}>
                        <div className={styles.appointment}>
                          <div className={styles.appointmentdate}>
                            <span className={styles.date}>
                              {" "}
                              Appointment Date{" "}
                            </span>
                            <span
                              className={`${styles2.dateam} ${styles.bookingdetails}`}
                            >
                              {booking.Date}
                            </span>
                          </div>
                          <div className={styles.appointmentdate}>
                            <span className={styles.date}>
                              {" "}
                              Appointment Time{" "}
                            </span>
                            <span
                              className={`${styles2.dateam} ${styles.bookingdetails}`}
                            >
                              {" "}
                              {booking.time}
                            </span>
                          </div>
                        </div>

                        <div className={styles.appointment}>
                          <div className={styles.appointmentdate}>
                            <span className={styles.date}> Duration </span>
                            <span
                              className={`${styles2.dateam} ${styles.bookingdetails}`}
                            >
                              {booking.hour}
                            </span>
                          </div>
                          <div className={styles.appointmentdate}>
                            <span className={styles.date}> Time Zone </span>
                            <span
                              className={`${styles2.dateam} ${styles.bookingdetails}`}
                            >
                              West African Standard Time
                            </span>
                          </div>
                        </div>

                        <div className={styles.appointment}>
                          <div className={styles.appointmentdate}>
                            <span className={styles.date}>
                              {" "}
                              Appointment Type{" "}
                            </span>
                            <span
                              className={`${styles2.dateam} ${styles.bookingdetails}`}
                            >
                              Virtual
                            </span>
                          </div>
                          <div className={styles.appointmentdate}>
                            <span className={styles.date}> Location </span>
                            <span
                              className={`${styles2.dateam} ${styles.bookingdetails}`}
                            >
                              This is a google meet web conference
                            </span>
                          </div>
                        </div>

                        <div className={styles.appointment}>
                          <div className={styles.appointmentdate}>
                            <span className={styles.date}>
                              {" "}
                              Amount Received{" "}
                            </span>
                            <span
                              className={`${styles2.dateam} ${styles.bookingdetails}`}
                            >
                              {" "}
                              35,000{" "}
                            </span>
                          </div>
                          <div className={styles.appointmentdate}>
                            <span className={styles.date}>
                              {" "}
                              Sender's Email{" "}
                            </span>
                            <span
                              className={`${styles2.dateam} ${styles.bookingdetails}`}
                            >
                              jennifermerit@gmail.com
                            </span>
                          </div>
                        </div>
                      </div>
                      <div>
                        <label className={styles.label}>Note</label>
                        <p className={styles.p}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore{" "}
                        </p>
                      </div>
                      <label className={styles.label}>
                        This booking was made on; <span>{booking.Date}</span>
                      </label>
                    </div>
                  </div>
                </div>

                <div className={styles2.seemoreline}>
                  <button className={styles2.seemore}>
                    {" "}
                    <Link to='/bookings'>See Less </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.reschedule}>
            {showReschedule ? (
              <Reschedule
                backReschedule={backReschedule}
                booking={booking}
                // onSeeLess={onSeeLess}
                // ChangeBack={ChangeBack}
              />
            ) : (
              <QuickAction
                RescheduleDate={RescheduleDate}
                onCancel={onCancel}
                openModal={openModal}
                booking={booking}
                closeModal={closeModal}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
