/** @format */

/** @format */
import React, { useContext, useState } from "react";

import book from "./booking.json";

import styles from "./Booking.module.css";
import styles2 from "../Services/Retainer/Retainer.module.css";
import See from "./BookingsPage/Details/SeeMore";
import Open from "./BookingsOpen";
import { Link } from "react-router-dom";
import EmptyState from "./EmptyState/EmptyState";
import { bookingsContext } from "../../Context";
import Page from "./BookingsPage/Page";
export default function Bookings(ChangeBack) {
  const [visibleBooking, setVisibleBooking] = useState(null);
  const [isOpen, setIsOpen] = useState(null);
  const [selectedTime, setSelectedTime] = useState("All time");

  const [time] = useState([
    "Today",
    "Yesterday",
    "This week",
    "Last 7 days",
    "This month",
    "Last 30 days",
    "All Time",
  ]);

  const [isAlltime, setIsAlltime] = useState(false);
  function SeeMore(index) {
    setVisibleBooking(index);
  }

  function SeeLess() {
    setVisibleBooking(null);
  }

  function ChangeBack() {
    setSelectedTime(false);
  }

  function Alltime() {
    setIsAlltime((prev) => !prev);
  }

  function handleAlltime(option) {
    setSelectedTime(option);
    setIsAlltime(false);
  }

  function onCloseTime() {
    setIsAlltime(false);
    setIsOpen(null);
  }

  function bookingsOpen(index) {
    setIsOpen(isOpen === index ? null : index);
  }

  const { bookings, setBookings } = useContext(bookingsContext);
  console.log(bookings);

  return (
    <div className={styles.bookings}>
      {/* {visibleBooking === null ? ( */}
      {/* <> */}
      <div className={styles2.retainerservice}>
        <div className={styles2.numberofservice}>
          <span className={styles2.oneoffservice}>Bookings</span>
          <span className={styles2.number}>
            {Array.isArray(bookings)
              ? bookings.reduce(
                  (total, item) =>
                    total +
                    (Array.isArray(item.details) ? item.details.length : 0),
                  0
                )
              : 0}
          </span>
        </div>
        <div className={styles.filterby}>
          <span>Filter by:</span>

          {/* <div className='popupcancel'> */}
          {/* <div className='overlayshare'></div> */}
          <div className='dropdown'>
            <div
              className={`select-list ${styles.alltime} ${
                isAlltime ? "select-clicked" : ""
              }`}
              onClick={Alltime}
            >
              <span className='selected-list'>{selectedTime}</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='currentColor'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            {isAlltime && (
              <ul className={styles.dropdown}>
                {time.map((option) => (
                  <li
                    key={option}
                    className={`menu-item ${
                      selectedTime === option ? "active" : ""
                    }`}
                    onClick={() => handleAlltime(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      {/* </div> */}

      {!bookings || bookings.length === 0 ? (
        <EmptyState />
      ) : (
        <Page
          bookings={bookings}
          isOpen={isOpen}
          SeeMore={SeeMore}
          bookingsOpen={bookingsOpen}
        />
      )}
    </div>
  );
}
