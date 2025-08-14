/** @format */
import React from "react";
import Open from "../BookingsOpen";
import styles from "../Booking.module.css";
import { Link } from "react-router-dom";
import EmptyState from "../EmptyState/EmptyState";

export default function Page({ bookings, isOpen, bookingsOpen }) {
  console.log("Bookings:", bookings);

  if (!Array.isArray(bookings) || bookings.length === 0) {
    return <EmptyState />;
  }

  return (
    <div className={styles.bookingcontainer}>
      {bookings.map((booking, bookingIndex) =>
        (booking.details || []).map((detail, detailIndex) => {
          return (
            <div key={`${bookingIndex}-${detailIndex}`}>
              <div className={styles.bookcontainer}>
                <div className={styles.imagesvg}>
                  <div className={styles.imagecontainer}>
                    <div className={styles.circlename}>
                      <span className={styles.initials}>
                        {detail.image && <img src={detail.image} alt='' />}
                        {!detail.image && detail.booking_user_info.displayName
                          ? detail.booking_user_info.displayName
                              .charAt(0)
                              .toUpperCase()
                          : "No"}
                      </span>
                    </div>
                    <div className={styles.namebook}>
                      <span className={styles.bookingname}>
                        {detail.booking_user_info.displayName || "No Name"}
                      </span>
                    </div>
                  </div>

                  <div>
                    <svg
                      className={`${isOpen === bookingIndex ? "open" : ""}`}
                      width='24'
                      height='38'
                      viewBox='0 0 24 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      onClick={() => bookingsOpen(bookingIndex)}
                      style={{ cursor: "pointer" }}
                    >
                      <path
                        d='M12 9C13.1046 9 14 8.10457 14 7C14 5.89543 13.1046 5 12 5C10.8954 5 10 5.89543 10 7C10 8.10457 10.8954 9 12 9Z'
                        fill='#1D2E2E'
                      />
                      <path
                        d='M12 16C13.1046 16 14 15.1046 14 14C14 12.8954 13.1046 12 12 12C10.8954 12 10 12.8954 10 14C10 15.1046 10.8954 16 12 16Z'
                        fill='#1D2E2E'
                      />
                      <path
                        d='M12 23C13.1046 23 14 22.1046 14 21C14 19.8954 13.1046 19 12 19C10.8954 19 10 19.8954 10 21C10 22.1046 10.8954 23 12 23Z'
                        fill='#1D2E2E'
                      />
                    </svg>
                    {isOpen === bookingIndex && (
                      <Open
                        isOpen={isOpen === bookingIndex}
                        onClose={() => bookingsOpen(bookingIndex)}
                        // data={data}
                      />
                    )}
                  </div>
                </div>

                <div className={styles.datetitle}>
                  <div className={styles.titleservice}>
                    <span className={styles.date}>
                      {detail.service_details.date || "No Date"}
                    </span>
                    <span className={styles.title}>
                      {detail.service_details?.service_name || "Untitled"}
                    </span>
                  </div>
                </div>

                <div className={styles.datetime}>
                  <span className={styles.date}>
                    {detail.service_details.time}
                  </span>
                  <span className={styles.title}>
                    {detail.service_details.duration}{" "}
                  </span>
                </div>
                <Link to='/bookingspage' state={{ data: detail }}>
                  <div className={styles.seemoreline}>
                    <button
                      // onClick={() => SeeMore(bookingIndex)}
                      className={styles.seemore}
                    >
                      See More
                    </button>
                  </div>{" "}
                </Link>
              </div>
            </div>
          );
        })
      )}
    </div>
  );
}
