/** @format */
import { useState } from "react";
import Time from "./Time";
import BookingPeriod from "./BookingPeriod";
export default function DayTime({ backprice, backone, showPart, showSvg }) {
  const [period] = useState(["1", "2", "3", "4", "5"]);

  const [days] = useState(["days", "months"]);

  const [date] = useState(["15 mins", "30 mins", "45 mins", "60 mins"]);

  const [minute] = useState(["minute"]);

  return (
    <>
      <button className='reschedulebook' onClick={backprice}>
        {showSvg && (
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
        )}

        <span>Choose Day and Time</span>
      </button>
      <hr />

      <div className='input-time'>
        <div className='warning-container first-warning'>
          <svg
            width='14'
            height='15'
            viewBox='0 0 14 15'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_8381_1228)'>
              <path
                d='M7 14.0625C5.70206 14.0625 4.43327 13.6776 3.35407 12.9565C2.27488 12.2354 1.43374 11.2105 0.937043 10.0114C0.440343 8.81222 0.310384 7.49272 0.5636 6.21972C0.816815 4.94672 1.44183 3.7774 2.35961 2.85961C3.2774 1.94183 4.44672 1.31682 5.71972 1.0636C6.99272 0.810384 8.31222 0.940343 9.51136 1.43704C10.7105 1.93374 11.7354 2.77488 12.4565 3.85407C13.1776 4.93327 13.5625 6.20206 13.5625 7.5C13.5625 9.24049 12.8711 10.9097 11.6404 12.1404C10.4097 13.3711 8.74049 14.0625 7 14.0625ZM7 1.8125C5.87512 1.8125 4.7755 2.14607 3.8402 2.77102C2.90489 3.39597 2.17591 4.28424 1.74544 5.32349C1.31496 6.36274 1.20233 7.50631 1.42179 8.60958C1.64124 9.71285 2.18292 10.7263 2.97833 11.5217C3.77374 12.3171 4.78716 12.8588 5.89043 13.0782C6.99369 13.2977 8.13726 13.185 9.17651 12.7546C10.2158 12.3241 11.104 11.5951 11.729 10.6598C12.3539 9.7245 12.6875 8.62488 12.6875 7.5C12.6875 5.99158 12.0883 4.54495 11.0217 3.47833C9.95506 2.41172 8.50842 1.8125 7 1.8125Z'
                fill='#EBF9FF'
              />
              <path
                d='M7 11C6.82694 11 6.65777 10.9487 6.51388 10.8525C6.36998 10.7564 6.25783 10.6197 6.19161 10.4598C6.12538 10.3 6.10805 10.124 6.14181 9.9543C6.17558 9.78456 6.25891 9.62865 6.38128 9.50628C6.50365 9.38391 6.65956 9.30057 6.8293 9.26681C6.99903 9.23305 7.17496 9.25038 7.33485 9.31661C7.49473 9.38283 7.63139 9.49498 7.72754 9.63888C7.82368 9.78277 7.875 9.95194 7.875 10.125C7.875 10.3571 7.78281 10.5796 7.61872 10.7437C7.45462 10.9078 7.23206 11 7 11ZM7 8.375C6.88397 8.375 6.77269 8.32891 6.69064 8.24686C6.60859 8.16481 6.5625 8.05353 6.5625 7.9375V4C6.5625 3.88397 6.60859 3.77269 6.69064 3.69064C6.77269 3.60859 6.88397 3.5625 7 3.5625C7.11603 3.5625 7.22731 3.60859 7.30936 3.69064C7.39141 3.77269 7.4375 3.88397 7.4375 4V7.9375C7.4375 8.05353 7.39141 8.16481 7.30936 8.24686C7.22731 8.32891 7.11603 8.375 7 8.375Z'
                fill='#EBF9FF'
              />
            </g>
            <defs>
              <clipPath id='clip0_8381_1228'>
                <rect
                  width='14'
                  height='14'
                  fill='white'
                  transform='translate(0 0.5)'
                />
              </clipPath>
            </defs>
          </svg>
          <span>Make sure to input time in every selected day</span>
        </div>
        <div className='time-booking-period'>
          <Time />
          {showPart && <BookingPeriod />}
        </div>
        <div className='cancel-done'>
          <button className='cancel-time' onClick={backone}>
            Cancel
          </button>
          <button className='done-time' onClick={backone}>
            Done
          </button>
        </div>
      </div>
    </>
  );
}
