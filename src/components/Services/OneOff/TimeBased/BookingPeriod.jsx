/** @format */
import { useState } from "react";
export default function BookingPeriod() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("3 months");

  function handleDropdown(option) {
    setSelectedOption(option);
    setIsOpen(false);
  }

  function dropDownMonth() {
    setIsOpen((prev) => !prev);
  }

  const [months] = useState([
    "1 month",
    "2 months",
    "3 months",
    "4 months",
    "5 months",
    "6 months",
    "7 months",
    "8 months",
    "9 months",
    "10 months",
    "11 months",
    "12 months",
  ]);
  return (
    <div className='booking-notice-appoint'>
      <div className='booking-period'>
        <div className='p-booking'>
          <span>Booking period</span>
          <p>how far in advance can attendees book?</p>
        </div>

        <button>
          <div className='booking-month' onClick={dropDownMonth}>
            <span>{selectedOption}</span>

            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                stroke='#1D2E2E'
                strokeOpacity='0.8'
                strokeMiterlimit='10'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            {isOpen && (
              <ul className='menu'>
                {months.map((monthOption, monthIndex) => (
                  <li
                    key={monthIndex}
                    className={`menu-item ${
                      selectedOption === monthOption ? "active" : ""
                    }`}
                    onClick={() => handleDropdown(monthOption)}
                  >
                    {monthOption}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </button>
      </div>

      <div className='notice-period'>
        <div className='p-notice'>
          <span>Notice period</span>
          <p>how far in advance can attendees book?</p>
        </div>
        <div className='buttons'>
          <button>
            <div className='booking-month'>
              <span>2</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </button>
          <button>
            <div className='booking-month'>
              <span>days</span>

              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className='appointment-buffer'>
        <div className='p-appoint'>
          <span>Appointment buffer</span>
          <p>how far in advance can attendees book?</p>
        </div>
        <div className='buttons'>
          <button>
            <div className='booking-month'>
              <span>30</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </button>
          <button>
            <div className='booking-month'>
              <span>minutes</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
