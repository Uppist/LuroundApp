/** @format */

/** @format */
import React, { useState } from "react";

import book from "../../booking.json";
import See from "./SeeMore";
import Open from "./BookingsOpen";
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
  const [visible, setVisible] = useState("fade-in");

  function handleOneOffClick(container) {
    setVisible("fade-out");
    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
    }, 200);
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

  return (
    <div className='bookings'>
      {visibleBooking === null ? (
        <>
          <div className='retainerservice'>
            <div className='numberofservice'>
              <span className='one-offservice'>Bookings</span>
              <span className='number'>{book.length}</span>
            </div>
            <div className='filter-by'>
              <span>Filter by:</span>

              {/* <div className='popupcancel'> */}
              {/* <div className='overlayshare'></div> */}
              <div className='dropdown'>
                <div
                  className={`select-list alltime ${
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
                  <ul className='menu transaction-time'>
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

          <div className='bookingcontainer'>
            {book.map((data, index) => (
              <div className='bookcontainer' key={data.Name}>
                <div className='imagesvg'>
                  <div className='imagecontainer'>
                    <div className='circlename'>
                      <img src={data.image} />
                    </div>
                    <div className='namebook'>
                      <span className='bookingname'>{data.Name}</span>
                      <div className='imagebookedyou'>
                        <span className='bookedyou'>{data.Booked}</span>
                        <img src={data.bookedyou} />
                      </div>
                    </div>
                  </div>

                  <div>
                    <svg
                      key={data.Name}
                      className={`${isOpen} ? "open": "`}
                      width='24'
                      onClick={() => bookingsOpen(index)}
                      height='38'
                      viewBox='0 0 24 28'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
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
                <div className='datetitle'>
                  <span className='date'>{data.Date}</span>
                  <div className='titleservice'>
                    <span className='title'>{data.title}</span>
                    <div className='service-one'>
                      <span className='servicetype'>{data.service}</span>
                      <span className='oneofftext'>{data.type}</span>
                    </div>
                  </div>
                  <div className='timehour'>
                    <span className='dateam'>{data.time}</span>
                    <div className='timer'>
                      <svg
                        width='20'
                        height='20'
                        viewBox='0 0 20 20'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M10 3.125C8.51664 3.125 7.0666 3.56487 5.83323 4.38898C4.59986 5.21309 3.63856 6.38443 3.07091 7.75487C2.50325 9.12532 2.35472 10.6333 2.64411 12.0882C2.9335 13.543 3.64781 14.8794 4.6967 15.9283C5.7456 16.9772 7.08197 17.6915 8.53683 17.9809C9.99168 18.2703 11.4997 18.1218 12.8701 17.5541C14.2406 16.9864 15.4119 16.0251 16.236 14.7918C17.0601 13.5584 17.5 12.1084 17.5 10.625C17.4977 8.63657 16.7068 6.73024 15.3008 5.32421C13.8948 3.91818 11.9884 3.12727 10 3.125ZM10 16.875C8.76387 16.875 7.5555 16.5084 6.52769 15.8217C5.49988 15.1349 4.6988 14.1588 4.22576 13.0168C3.75271 11.8747 3.62894 10.6181 3.8701 9.40569C4.11125 8.1933 4.70651 7.07966 5.58059 6.20558C6.45466 5.3315 7.56831 4.73625 8.78069 4.49509C9.99307 4.25393 11.2497 4.37771 12.3918 4.85075C13.5338 5.3238 14.5099 6.12488 15.1967 7.15269C15.8834 8.18049 16.25 9.38887 16.25 10.625C16.2481 12.282 15.5891 13.8707 14.4174 15.0424C13.2457 16.2141 11.657 16.8731 10 16.875ZM13.5672 7.05781C13.6253 7.11586 13.6714 7.18479 13.7029 7.26066C13.7343 7.33654 13.7505 7.41787 13.7505 7.5C13.7505 7.58213 13.7343 7.66346 13.7029 7.73934C13.6714 7.81521 13.6253 7.88414 13.5672 7.94219L10.4422 11.0672C10.3841 11.1253 10.3152 11.1713 10.2393 11.2027C10.1634 11.2342 10.0821 11.2503 10 11.2503C9.91788 11.2503 9.83656 11.2342 9.76069 11.2027C9.68482 11.1713 9.61588 11.1253 9.55782 11.0672C9.49975 11.0091 9.45368 10.9402 9.42226 10.8643C9.39083 10.7884 9.37466 10.7071 9.37466 10.625C9.37466 10.5429 9.39083 10.4616 9.42226 10.3857C9.45368 10.3098 9.49975 10.2409 9.55782 10.1828L12.6828 7.05781C12.7409 6.9997 12.8098 6.9536 12.8857 6.92215C12.9615 6.8907 13.0429 6.87451 13.125 6.87451C13.2071 6.87451 13.2885 6.8907 13.3643 6.92215C13.4402 6.9536 13.5091 6.9997 13.5672 7.05781ZM7.5 1.25C7.5 1.08424 7.56585 0.925268 7.68306 0.808058C7.80027 0.690848 7.95924 0.625 8.125 0.625H11.875C12.0408 0.625 12.1997 0.690848 12.3169 0.808058C12.4342 0.925268 12.5 1.08424 12.5 1.25C12.5 1.41576 12.4342 1.57473 12.3169 1.69194C12.1997 1.80915 12.0408 1.875 11.875 1.875H8.125C7.95924 1.875 7.80027 1.80915 7.68306 1.69194C7.56585 1.57473 7.5 1.41576 7.5 1.25Z'
                          fill='#1D2E2E'
                          fillOpacity='0.8'
                        />
                      </svg>

                      <span className='hour'>{data.hour}</span>
                    </div>
                  </div>
                </div>
                <div className='seemoreline'>
                  <button
                    key={data.Name}
                    onClick={() => SeeMore(index)}
                    className='seemore'
                  >
                    See More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <See
          booking={book[visibleBooking]}
          onSeeLess={SeeLess}
          ChangeBack={ChangeBack}
        />
      )}
    </div>
  );
}
