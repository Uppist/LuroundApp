/** @format */

import React, { useState } from "react";
import Calendar from "./Calendar";
import CancelN from "./Cancel";
export default function See({ booking, onSeeLess, ChangeBack }) {
  const [showReschedule, setShowReschedule] = useState(false);
  const [onCancel, setonCancel] = useState(false);

  const Reschedule = () => {
    setShowReschedule(true);
  };

  if (!booking) {
    return <div></div>;
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
    <div className='see'>
      <button className='time-based-back' onClick={onSeeLess}>
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
      <div className='seedetails'>
        <div className='seemorecontainer'>
          <div className='detailscontainer'>
            <div className='imagesvg'>
              <div className='imagecontainer'>
                <div className='circlename'>
                  <img src={booking.image} />
                </div>
                <div className='namebook'>
                  <span className='bookingname'>{booking.Name}</span>
                  <div className='imagebookedyou'>
                    <span className='bookedyou'>{booking.Booked}</span>
                    <img src={booking.bookedyou} />
                  </div>
                </div>
              </div>
            </div>
            <div className='dateseeless'>
              <div className='datetitle'>
                <div className='bookingtitle'>
                  <div className='titleservice'>
                    <span className='title'>{booking.title}</span>
                    <div className='service-one'>
                      <span className='servicetype'> {booking.service} </span>
                      <span className='oneofftext'> {booking.type} </span>
                    </div>
                  </div>
                  <div className='appointmentcon'>
                    <div className='appointmentdetails'>
                      <div className='appointment'>
                        <div className='appointmentdate'>
                          <span className='date'> Appointment Date </span>
                          <span className='dateam bookingdetails'>
                            {booking.Date}
                          </span>
                        </div>
                        <div className='appointmentdate'>
                          <span className='date'> Appointment Time </span>
                          <span className='dateam bookingdetails'>
                            {" "}
                            {booking.time}
                          </span>
                        </div>
                      </div>

                      <div className='appointment'>
                        <div className='appointmentdate'>
                          <span className='date'> Duration </span>
                          <span className='dateam bookingdetails'>
                            {booking.hour}
                          </span>
                        </div>
                        <div className='appointmentdate'>
                          <span className='date'> Time Zone </span>
                          <span className='dateam bookingdetails'>
                            West African Standard Time
                          </span>
                        </div>
                      </div>

                      <div className='appointment'>
                        <div className='appointmentdate'>
                          <span className='date'> Appointment Type </span>
                          <span className='dateam bookingdetails'>Virtual</span>
                        </div>
                        <div className='appointmentdate'>
                          <span className='date'> Location </span>
                          <span className='dateam bookingdetails'>
                            This is a google meet web conference
                          </span>
                        </div>
                      </div>

                      <div className='appointment'>
                        <div className='appointmentdate'>
                          <span className='date'> Amount Received </span>
                          <span className='dateam bookingdetails'>
                            {" "}
                            35,000{" "}
                          </span>
                        </div>
                        <div className='appointmentdate'>
                          <span className='date'> Sender's Email </span>
                          <span className='dateam bookingdetails'>
                            jennifermerit@gmail.com
                          </span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className='label'>Note</label>
                      <p className='p'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore{" "}
                      </p>
                    </div>
                    <label className='label'>
                      This booking was made on; <span>{booking.Date}</span>
                    </label>
                  </div>
                </div>
              </div>

              <div className='seemoreline'>
                <button onClick={onSeeLess} className='seemore'>
                  See Less
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className='reschedule'>
          {showReschedule ? (
            <div>
              <div className='reschedulebooking'>
                <div className='former-reschedule'>
                  <div className='linereschedule'>
                    <button className='reschedulebook' onClick={backReschedule}>
                      <svg
                        width='7'
                        height='12'
                        viewBox='0 0 7 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M6 1L1 6L6 11'
                          stroke='#1D2E2E'
                          strokeWidth='1.5'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </svg>
                      <span>Reschedule Booking</span>
                    </button>
                    <hr />
                  </div>

                  <div className='formerschedule'>
                    <label>Former schedule</label>
                    <div className='date-time'>
                      <div className='svg-date'>
                        <svg
                          width='20'
                          height='20'
                          viewBox='0 0 20 20'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <g clipPath='url(#clip0_8039_2817)'>
                            <path
                              d='M5.673 0C5.85865 0 6.0367 0.0737498 6.16797 0.205025C6.29925 0.336301 6.373 0.514348 6.373 0.7V2.009H13.89V0.709C13.89 0.523348 13.9637 0.345301 14.095 0.214025C14.2263 0.0827498 14.4043 0.009 14.59 0.009C14.7757 0.009 14.9537 0.0827498 15.085 0.214025C15.2162 0.345301 15.29 0.523348 15.29 0.709V2.009H18C18.5303 2.009 19.0388 2.21958 19.4139 2.59443C19.7889 2.96929 19.9997 3.47774 20 4.008V18.001C19.9997 18.5313 19.7889 19.0397 19.4139 19.4146C19.0388 19.7894 18.5303 20 18 20H2C1.46974 20 0.961184 19.7894 0.58614 19.4146C0.211096 19.0397 0.00026513 18.5313 0 18.001L0 4.008C0.00026513 3.47774 0.211096 2.96929 0.58614 2.59443C0.961184 2.21958 1.46974 2.009 2 2.009H4.973V0.699C4.97327 0.513522 5.04713 0.335731 5.17838 0.204672C5.30963 0.0736123 5.48752 -1.89263e-07 5.673 0ZM1.4 7.742V18.001C1.4 18.0798 1.41552 18.1578 1.44567 18.2306C1.47583 18.3034 1.52002 18.3695 1.57574 18.4253C1.63145 18.481 1.69759 18.5252 1.77039 18.5553C1.84319 18.5855 1.92121 18.601 2 18.601H18C18.0788 18.601 18.1568 18.5855 18.2296 18.5553C18.3024 18.5252 18.3685 18.481 18.4243 18.4253C18.48 18.3695 18.5242 18.3034 18.5543 18.2306C18.5845 18.1578 18.6 18.0798 18.6 18.001V7.756L1.4 7.742ZM6.667 14.619V16.285H5V14.619H6.667ZM10.833 14.619V16.285H9.167V14.619H10.833ZM15 14.619V16.285H13.333V14.619H15ZM6.667 10.642V12.308H5V10.642H6.667ZM10.833 10.642V12.308H9.167V10.642H10.833ZM15 10.642V12.308H13.333V10.642H15ZM4.973 3.408H2C1.92121 3.408 1.84319 3.42352 1.77039 3.45367C1.69759 3.48382 1.63145 3.52802 1.57574 3.58374C1.52002 3.63945 1.47583 3.70559 1.44567 3.77839C1.41552 3.85119 1.4 3.92921 1.4 4.008V6.343L18.6 6.357V4.008C18.6 3.92921 18.5845 3.85119 18.5543 3.77839C18.5242 3.70559 18.48 3.63945 18.4243 3.58374C18.3685 3.52802 18.3024 3.48382 18.2296 3.45367C18.1568 3.42352 18.0788 3.408 18 3.408H15.29V4.337C15.29 4.52265 15.2162 4.7007 15.085 4.83197C14.9537 4.96325 14.7757 5.037 14.59 5.037C14.4043 5.037 14.2263 4.96325 14.095 4.83197C13.9637 4.7007 13.89 4.52265 13.89 4.337V3.408H6.373V4.328C6.373 4.51365 6.29925 4.6917 6.16797 4.82297C6.0367 4.95425 5.85865 5.028 5.673 5.028C5.48735 5.028 5.3093 4.95425 5.17803 4.82297C5.04675 4.6917 4.973 4.51365 4.973 4.328V3.408Z'
                              fill='#1D2E2E'
                              fillOpacity='0.8'
                            />
                          </g>
                          <defs>
                            <clipPath id='clip0_8039_2817'>
                              <rect width='20' height='20' fill='white' />
                            </clipPath>
                          </defs>
                        </svg>

                        <span> Friday, 14 July 2023</span>
                      </div>
                      <div className='svg-time'>
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
                        <span>9:30am - 11:00 am</span>
                      </div>
                    </div>
                    <hr />
                  </div>
                </div>
                <Calendar
                  booking={booking}
                  ChangeBack={ChangeBack}
                  onSeeLess={onSeeLess}
                />
              </div>
            </div>
          ) : (
            <div className='reschedulecontent'>
              <div className='quickaction'>
                <label>Quick actions</label>
                <hr />
              </div>
              <div className='reschedule-cancel'>
                <button className='rescheduletext' onClick={Reschedule}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M14.1001 10.9001C13.7001 10.5001 13.1001 10.5001 12.7001 10.9001L12.0001 11.6001L11.3001 10.9001C10.9001 10.5001 10.3001 10.5001 9.9001 10.9001C9.5001 11.3001 9.5001 11.9001 9.9001 12.3001L10.6001 13.0001L9.9001 13.7001C9.5001 14.1001 9.5001 14.7001 9.9001 15.1001C10.1001 15.3001 10.4001 15.4001 10.6001 15.4001C10.8001 15.4001 11.1001 15.3001 11.3001 15.1001L12.0001 14.4001L12.7001 15.1001C12.9001 15.3001 13.2001 15.4001 13.4001 15.4001C13.6001 15.4001 13.9001 15.3001 14.1001 15.1001C14.5001 14.7001 14.5001 14.1001 14.1001 13.7001L13.4001 13.0001L14.1001 12.3001C14.5001 11.9001 14.5001 11.3001 14.1001 10.9001Z'
                      fill='currentColor'
                      fillOpacity='0.8'
                    />
                    <path
                      d='M18 5V4C18 3.4 17.6 3 17 3C16.4 3 16 3.4 16 4V5H8V4C8 3.4 7.6 3 7 3C6.4 3 6 3.4 6 4V5C3.8 5 2 6.8 2 9V16C2 18.2 3.8 20 6 20H18C20.2 20 22 18.2 22 16V9C22 6.8 20.2 5 18 5ZM20 16C20 17.1 19.1 18 18 18H6C4.9 18 4 17.1 4 16V9C4 7.9 4.9 7 6 7C6 7.6 6.4 8 7 8C7.6 8 8 7.6 8 7H16C16 7.6 16.4 8 17 8C17.6 8 18 7.6 18 7C19.1 7 20 7.9 20 9V16Z'
                      fill='currentColor'
                      fillOpacity='0.8'
                    />
                  </svg>

                  <span>Reschedule</span>
                </button>

                <button className='cancel' onClick={openModal}>
                  <svg
                    className={` ${onCancel ? "open" : ""}`}
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z'
                      fill='currentColor'
                      fillOpacity='0.8'
                    />
                  </svg>

                  <span>Cancel</span>
                </button>
                {onCancel && <CancelN onClose={closeModal} booking={booking} />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
