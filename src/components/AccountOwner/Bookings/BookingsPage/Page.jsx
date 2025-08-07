/** @format */
import React from "react";
import Open from "../BookingsOpen";
import styles from "../Booking.module.css";
import { Link } from "react-router-dom";
import EmptyState from "../EmptyState/EmptyState";

export default function Page({ bookings, isOpen, SeeMore, bookingsOpen }) {
  console.log("Bookings:", bookings);

  return (
    <div className={styles.bookingcontainer}>
      {Array.isArray(bookings) && bookings.length > 0 ? (
        bookings.map((data, index) => {
          const userInfo = data.booking_user_info || {};
          const service = data.service_details || {};
          const initials = userInfo.displayName
            ? userInfo.displayName
                .split(" ")
                .map((word) => word[0])
                .join("")
            : "?";

          return (
            <div className={styles.bookcontainer} key={data._id || index}>
              <div className={styles.imagesvg}>
                <div className={styles.imagecontainer}>
                  <div className={styles.circlename}>
                    <span className={styles.initials}>{initials}</span>
                  </div>
                  <div className={styles.namebook}>
                    <span className={styles.bookingname}>
                      {userInfo.displayName || "No Name"}
                    </span>
                    <small className={styles.bookingid}>
                      ID: {data._id || "N/A"}
                    </small>
                  </div>
                </div>

                <div>
                  <svg
                    className={`${isOpen === index ? "open" : ""}`}
                    width='24'
                    height='38'
                    viewBox='0 0 24 28'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    onClick={() => bookingsOpen(index)}
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
                  {isOpen === index && (
                    <Open
                      isOpen={isOpen === index}
                      onClose={() => bookingsOpen(index)}
                      data={data}
                    />
                  )}
                </div>
              </div>

              <div className={styles.datetitle}>
                <div className={styles.titleservice}>
                  <span className={styles.date}>
                    {data.start_time || "No Date"}
                  </span>
                  <span className={styles.title}>
                    {service.service_name || "Untitled"}
                  </span>
                </div>
                <div className={styles.timehour}>
                  <span className={styles.dateam}>
                    {data.start_time || "No Time"}
                  </span>
                  <div className={styles.timer}>
                    <span className={styles.hour}>
                      {service.service_type || "N/A"}
                    </span>
                  </div>
                </div>
              </div>

              <div className={styles.seemoreline}>
                <button
                  onClick={() => SeeMore(index)}
                  className={styles.seemore}
                >
                  <Link to='/bookingspage' state={{ booking: bookings[index] }}>
                    See More
                  </Link>
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
