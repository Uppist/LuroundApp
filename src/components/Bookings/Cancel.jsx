/** @format */

/** @format */
import { useState } from "react";
export default function CancelN({ booking, onClose }) {
  return (
    <div>
      <div className='popupcancel'>
        <div className='overlay' onClick={onClose}></div>
        <div className='body-modal'>
          <div className='cancel-booking-line'>
            <div className='cancel-booking'>
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
            <hr />
          </div>

          <div className='cancel-container'>
            <div className='titleservice cancel-title'>
              <span className='title'>{booking.title}</span>
              <div className='service-one'>
                <span className='servicetype'> {booking.service} </span>
                <span className='oneofftext'> {booking.type} </span>
              </div>
            </div>
            <p>
              Please confirm that you would like to cancel this booking. A
              cancellation email will be sent to the other party.
            </p>
            <div className='reason-for-cancelling'>
              <label>Reason for cancelling</label>
              <textarea></textarea>
            </div>
          </div>
          <div className='do-cancel-container'>
            <button className='do-not-cancel' onClick={onClose}>
              Do not cancel
            </button>
            <button className='do-cancel'>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
}
