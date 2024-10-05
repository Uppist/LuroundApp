/** @format */

// /** @format */
import { useState } from "react";

// export default function ProgramDetail() {
//   return <div></div>;
// }
// import Timebased from "./TimeBased";
// import Delete from "./Delete";
import Delete from "../OneOff/Delete";
import Program from "./Program";
import ProgramService from "./ProgramService";
export default function ProgramDetail({ dataprogram }) {
  const [isBack, setIsBack] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  function Back() {
    setIsBack(true);
  }

  function toggle() {
    setIsSuspended((prevState) => !prevState);
  }

  function EditDetail() {
    setIsEdit(true);
  }

  function DeleteOneoff() {
    setIsDelete(true);
  }

  return (
    <>
      {isEdit ? (
        <ProgramService />
      ) : isBack ? (
        <Program />
      ) : (
        <div className='time-based-container'>
          <button className='time-based-back' onClick={Back}>
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

          <div className='moredetails'>
            <div className='moredetails-container'>
              <div className='content-type'>
                <div className='personal-service'>
                  <span className='personal'>{dataprogram.Title}</span>
                  <div className='service-one'>
                    <span className='servicetype'>
                      {dataprogram.servicetype}
                    </span>
                    <span className='oneofftext'>{dataprogram.oneoff}</span>
                  </div>
                </div>
              </div>
              <div className='overallvector'>
                <div className='service-one'>
                  <span className='servicetype'>Duration:</span>
                  <span className='oneofftext'>{dataprogram.Duration}</span>
                </div>
                <div className='service-one'>
                  <span className='servicetype'>Reoccurence:</span>
                  <span className='oneofftext'>{dataprogram.reoccurence}</span>
                </div>
                <div className='service-one'>
                  <span className='servicetype'>Max no. of participation:</span>
                  <span className='oneofftext'>
                    {dataprogram.participation}
                  </span>
                </div>
                <div className='service-one'>
                  <span className='servicetype'>Start Date:</span>
                  <span className='oneofftext'>{dataprogram.startdate}</span>
                </div>

                <div className='service-one'>
                  <span className='servicetype'>End Date:</span>
                  <span className='oneofftext'>{dataprogram.enddate}</span>
                </div>
              </div>

              <div className='availability'>
                <label>Available on</label>
                <div className='availability-time'>
                  <span>{dataprogram.firstday}</span>
                  <span>{dataprogram.secondday}</span>
                </div>
              </div>

              <div className='service-description'>
                <span>Service Description</span>
                <span className='text text2'>
                  {/* {dataprogram.text}
                  {dataprogram.text2} */}
                </span>
              </div>
              <div className='textvector1'>
                <span className='text text2'>{dataprogram.text}</span>
              </div>
            </div>
            <div className='quickaction-container'>
              <div className='quickaction'>
                <label>Quick actions</label>
                <hr />
              </div>

              <div className='settings-detail'>
                <div className='settings-container' onClick={EditDetail}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M15 6.00019L18 9.00019M5 16.0002L4 20.0002L8 19.0002L19.586 7.41419C19.9609 7.03913 20.1716 6.53051 20.1716 6.00019C20.1716 5.46986 19.9609 4.96124 19.586 4.58619L19.414 4.41419C19.0389 4.03924 18.5303 3.82861 18 3.82861C17.4697 3.82861 16.9611 4.03924 16.586 4.41419L5 16.0002Z'
                      stroke='currentColor'
                      strokeOpacity='0.8'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <span> Edit</span>
                </div>

                <div className='settings-container'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 16C11.6667 16 13.0833 15.4167 14.25 14.25C15.4167 13.0833 16 11.6667 16 10C16 8.33333 15.4167 6.91667 14.25 5.75C13.0833 4.58333 11.6667 4 10 4C8.33333 4 6.91667 4.58333 5.75 5.75C4.58333 6.91667 4 8.33333 4 10C4 11.6667 4.58333 13.0833 5.75 14.25C6.91667 15.4167 8.33333 16 10 16ZM10 13C9.71667 13 9.47933 12.904 9.288 12.712C9.09667 12.52 9.00067 12.2827 9 12V7C9 6.71667 9.096 6.47933 9.288 6.288C9.48 6.09667 9.71733 6.00067 10 6C10.2827 5.99933 10.5203 6.09533 10.713 6.288C10.9057 6.48067 11.0013 6.718 11 7V12C11 12.2833 10.904 12.521 10.712 12.713C10.52 12.905 10.2827 13.0007 10 13ZM6.5 13C6.21667 13 5.97933 12.904 5.788 12.712C5.59667 12.52 5.50067 12.2827 5.5 12V9C5.5 8.71667 5.596 8.47933 5.788 8.288C5.98 8.09667 6.21733 8.00067 6.5 8C6.78267 7.99933 7.02033 8.09533 7.213 8.288C7.40567 8.48067 7.50133 8.718 7.5 9V12C7.5 12.2833 7.404 12.521 7.212 12.713C7.02 12.905 6.78267 13.0007 6.5 13ZM13.5 13C13.2167 13 12.9793 12.904 12.788 12.712C12.5967 12.52 12.5007 12.2827 12.5 12V10C12.5 9.71667 12.596 9.47933 12.788 9.288C12.98 9.09667 13.2173 9.00067 13.5 9C13.7827 8.99933 14.0203 9.09533 14.213 9.288C14.4057 9.48067 14.5013 9.718 14.5 10V12C14.5 12.2833 14.404 12.521 14.212 12.713C14.02 12.905 13.7827 13.0007 13.5 13ZM10 18C7.76667 18 5.875 17.225 4.325 15.675C2.775 14.125 2 12.2333 2 10C2 7.76667 2.775 5.875 4.325 4.325C5.875 2.775 7.76667 2 10 2C12.2333 2 14.125 2.775 15.675 4.325C17.225 5.875 18 7.76667 18 10C18 10.9333 17.8543 11.8167 17.563 12.65C17.2717 13.4833 16.859 14.2417 16.325 14.925L21.3 19.9C21.4833 20.0833 21.575 20.3167 21.575 20.6C21.575 20.8833 21.4833 21.1167 21.3 21.3C21.1167 21.4833 20.8833 21.575 20.6 21.575C20.3167 21.575 20.0833 21.4833 19.9 21.3L14.925 16.325C14.2417 16.8583 13.4833 17.271 12.65 17.563C11.8167 17.855 10.9333 18.0007 10 18Z'
                      fill='currentColor'
                      fillOpacity='0.8'
                    />
                  </svg>

                  <span>Service Insight</span>
                </div>

                <div className='settings-container suspend'>
                  <div className='suspend-div'>
                    {isSuspended ? (
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g clip-path='url(#clip0_8240_2345)'>
                          <path
                            d='M12.995 3C8.02 3 4 7.03 4 12H1L4.895 15.895L4.965 16.04L9 12H6C6 8.135 9.135 5 13 5C16.865 5 20 8.135 20 12C20 15.865 16.865 19 13 19C11.065 19 9.32 18.21 8.055 16.945L6.64 18.36C8.265 19.99 10.51 21 12.995 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 12.995 3ZM12 8V13L16.28 15.54L17 14.325L13.5 12.25V8H12Z'
                            fill='currentColor'
                            fillOpacity='0.8'
                          />
                        </g>
                        <defs>
                          <clipPath id='clip0_8240_2345'>
                            <rect width='24' height='24' fill='white' />
                          </clipPath>
                        </defs>
                      </svg>
                    ) : (
                      <svg
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM12 20C9.87827 20 7.84344 19.1571 6.34315 17.6569C4.84286 16.1566 4 14.1217 4 12C3.9978 10.2233 4.59302 8.49755 5.69 7.1L16.9 18.31C15.5025 19.407 13.7767 20.0022 12 20ZM18.31 16.9L7.1 5.69C8.49755 4.59302 10.2233 3.99779 12 4C14.1217 4 16.1566 4.84285 17.6569 6.34315C19.1572 7.84344 20 9.87827 20 12C20.0022 13.7767 19.407 15.5025 18.31 16.9Z'
                          fill='currentColor'
                          fillOpacity='0.8'
                        />
                      </svg>
                    )}

                    <span>
                      {" "}
                      {isSuspended ? "Unsuspend Service" : "Suspend Service"}
                    </span>
                  </div>
                  <div className='toggle-button'>
                    <input
                      type='checkbox'
                      id='check'
                      className='check'
                      onChange={toggle}
                      checked={isSuspended}
                    />
                    <label for='check' className='toggle'></label>
                  </div>
                </div>

                <div className='settings-container'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M18 22C17.1667 22 16.4583 21.7083 15.875 21.125C15.2917 20.5417 15 19.8333 15 19C15 18.8833 15.0083 18.7623 15.025 18.637C15.0417 18.5117 15.0667 18.3993 15.1 18.3L8.05 14.2C7.76667 14.45 7.45 14.646 7.1 14.788C6.75 14.93 6.38333 15.0007 6 15C5.16667 15 4.45833 14.7083 3.875 14.125C3.29167 13.5417 3 12.8333 3 12C3 11.1667 3.29167 10.4583 3.875 9.875C4.45833 9.29167 5.16667 9 6 9C6.38333 9 6.75 9.071 7.1 9.213C7.45 9.355 7.76667 9.55067 8.05 9.8L15.1 5.7C15.0667 5.6 15.0417 5.48767 15.025 5.363C15.0083 5.23833 15 5.11733 15 5C15 4.16667 15.2917 3.45833 15.875 2.875C16.4583 2.29167 17.1667 2 18 2C18.8333 2 19.5417 2.29167 20.125 2.875C20.7083 3.45833 21 4.16667 21 5C21 5.83333 20.7083 6.54167 20.125 7.125C19.5417 7.70833 18.8333 8 18 8C17.6167 8 17.25 7.92933 16.9 7.788C16.55 7.64667 16.2333 7.45067 15.95 7.2L8.9 11.3C8.93333 11.4 8.95833 11.5127 8.975 11.638C8.99167 11.7633 9 11.884 9 12C9 12.1167 8.99167 12.2377 8.975 12.363C8.95833 12.4883 8.93333 12.6007 8.9 12.7L15.95 16.8C16.2333 16.55 16.55 16.3543 16.9 16.213C17.25 16.0717 17.6167 16.0007 18 16C18.8333 16 19.5417 16.2917 20.125 16.875C20.7083 17.4583 21 18.1667 21 19C21 19.8333 20.7083 20.5417 20.125 21.125C19.5417 21.7083 18.8333 22 18 22ZM18 6C18.2833 6 18.521 5.904 18.713 5.712C18.905 5.52 19.0007 5.28267 19 5C19 4.71667 18.904 4.479 18.712 4.287C18.52 4.095 18.2827 3.99933 18 4C17.7167 4 17.479 4.096 17.287 4.288C17.095 4.48 16.9993 4.71733 17 5C17 5.28333 17.096 5.521 17.288 5.713C17.48 5.905 17.7173 6.00067 18 6ZM6 13C6.28333 13 6.521 12.904 6.713 12.712C6.905 12.52 7.00067 12.2827 7 12C7 11.7167 6.904 11.479 6.712 11.287C6.52 11.095 6.28267 10.9993 6 11C5.71667 11 5.479 11.096 5.287 11.288C5.095 11.48 4.99933 11.7173 5 12C5 12.2833 5.096 12.521 5.288 12.713C5.48 12.905 5.71733 13.0007 6 13ZM18 20C18.2833 20 18.521 19.904 18.713 19.712C18.905 19.52 19.0007 19.2827 19 19C19 18.7167 18.904 18.479 18.712 18.287C18.52 18.095 18.2827 17.9993 18 18C17.7167 18 17.479 18.096 17.287 18.288C17.095 18.48 16.9993 18.7173 17 19C17 19.2833 17.096 19.521 17.288 19.713C17.48 19.905 17.7173 20.0007 18 20Z'
                      fill='currentColor'
                      fillOpacity='0.8'
                    />
                  </svg>
                  <span> Share Service</span>
                </div>

                <div className='settings-container'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M10 16C11.6667 16 13.0833 15.4167 14.25 14.25C15.4167 13.0833 16 11.6667 16 10C16 8.33333 15.4167 6.91667 14.25 5.75C13.0833 4.58333 11.6667 4 10 4C8.33333 4 6.91667 4.58333 5.75 5.75C4.58333 6.91667 4 8.33333 4 10C4 11.6667 4.58333 13.0833 5.75 14.25C6.91667 15.4167 8.33333 16 10 16ZM10 13C9.71667 13 9.47933 12.904 9.288 12.712C9.09667 12.52 9.00067 12.2827 9 12V7C9 6.71667 9.096 6.47933 9.288 6.288C9.48 6.09667 9.71733 6.00067 10 6C10.2827 5.99933 10.5203 6.09533 10.713 6.288C10.9057 6.48067 11.0013 6.718 11 7V12C11 12.2833 10.904 12.521 10.712 12.713C10.52 12.905 10.2827 13.0007 10 13ZM6.5 13C6.21667 13 5.97933 12.904 5.788 12.712C5.59667 12.52 5.50067 12.2827 5.5 12V9C5.5 8.71667 5.596 8.47933 5.788 8.288C5.98 8.09667 6.21733 8.00067 6.5 8C6.78267 7.99933 7.02033 8.09533 7.213 8.288C7.40567 8.48067 7.50133 8.718 7.5 9V12C7.5 12.2833 7.404 12.521 7.212 12.713C7.02 12.905 6.78267 13.0007 6.5 13ZM13.5 13C13.2167 13 12.9793 12.904 12.788 12.712C12.5967 12.52 12.5007 12.2827 12.5 12V10C12.5 9.71667 12.596 9.47933 12.788 9.288C12.98 9.09667 13.2173 9.00067 13.5 9C13.7827 8.99933 14.0203 9.09533 14.213 9.288C14.4057 9.48067 14.5013 9.718 14.5 10V12C14.5 12.2833 14.404 12.521 14.212 12.713C14.02 12.905 13.7827 13.0007 13.5 13ZM10 18C7.76667 18 5.875 17.225 4.325 15.675C2.775 14.125 2 12.2333 2 10C2 7.76667 2.775 5.875 4.325 4.325C5.875 2.775 7.76667 2 10 2C12.2333 2 14.125 2.775 15.675 4.325C17.225 5.875 18 7.76667 18 10C18 10.9333 17.8543 11.8167 17.563 12.65C17.2717 13.4833 16.859 14.2417 16.325 14.925L21.3 19.9C21.4833 20.0833 21.575 20.3167 21.575 20.6C21.575 20.8833 21.4833 21.1167 21.3 21.3C21.1167 21.4833 20.8833 21.575 20.6 21.575C20.3167 21.575 20.0833 21.4833 19.9 21.3L14.925 16.325C14.2417 16.8583 13.4833 17.271 12.65 17.563C11.8167 17.855 10.9333 18.0007 10 18Z'
                      fill='currentColor'
                      fillOpacity='0.8'
                    />
                  </svg>
                  <span>Service QR code</span>
                </div>

                <div className='settings-container' onClick={DeleteOneoff}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z'
                      fill='currentColor'
                      fill-opacity='0.8'
                    />
                  </svg>
                  <span>Delete</span>
                  {isDelete && (
                    <Delete dataprogram={dataprogram} backdelete={Back} />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
