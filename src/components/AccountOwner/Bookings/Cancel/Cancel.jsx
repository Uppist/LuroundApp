/** @format */

import axios from "axios";
import styles from "./Cancel.module.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { bookingsContext } from "../../../Context";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import check from "../../../elements/bookings/check.svg";

/** @format */
export default function CancelN({ booking, onClose }) {
  const navigate = useNavigate();

  const { bookings, setBookings } = useContext(bookingsContext);
  function Delete() {
    const token = localStorage.getItem("Token");
    axios
      .delete(
        `https://api.luround.com/v1/booking/delete?bookingId=${booking._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log("Data deleted");
        toast("Booking Cancelled. A notification has been sent", {
          icon: () => <img src={check} />,
          className: styles.toast,
        });
        setBookings((prev) => prev.filter((item) => item._id !== booking._id));
        setTimeout(() => {
          navigate("/bookings");
        }, 3000);
      });
  }
  return (
    <div>
      <div className={styles.popupcancel}>
        <div className={styles.overlay} onClick={onClose}></div>
        <div className={styles.body}>
          <div className={styles.booking}>
            <label>Cancel Booking</label>
            <svg
              onClick={onClose}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                stroke='#1D2E2E'
                strokeOpacity='0.8'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>

          <div className={styles.container}>
            <div className={styles.title}>
              <span className='title'>
                {booking.service_details.service_name}
              </span>
              <div className={styles.service}>
                <span className={styles.servicetype}> Service Type: </span>
                <span className={styles.oneofftext}>
                  {" "}
                  {booking.service_details.service_type}{" "}
                </span>
              </div>
            </div>
            <p>
              Please confirm that you would like to cancel this booking. A
              cancellation email will be sent to the other party.
            </p>
            <div className={styles.cancelling}>
              <label>Reason for cancelling</label>
              <textarea></textarea>
            </div>
          </div>
          <div className={styles.cancelcontainer}>
            <button className={styles.donot} onClick={onClose}>
              Do not cancel
            </button>
            <button onClick={Delete} className={styles.do}>
              Cancel
            </button>
          </div>
        </div>
      </div>
      <ToastContainer
        position='bottom-center'
        autoClose={3000} // 3 seconds
        hideProgressBar={true}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
