/** @format */

import React from "react";
import styles from "./styles.module.css";
import QRCode from "react-qr-code";

export default function Ticket({ Close, data }) {
  const qrValue = data.service_link;
  return (
    <div className='popupcancel'>
      <div className='overlay' onClick={Close}></div>
      <div className={styles.share}>
        <div>
          <div className={styles.cancelbooking}>
            <label>View Ticket</label>
            <svg
              onClick={Close}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                stroke='currentColor'
                strokeOpacity='0.8'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          {/* <hr /> */}
        </div>
        <div className={styles.ticketContainer}>
          <div className={styles.eachContainer}>
            <QRCode
              value={qrValue}
              size={100}
              fgColor='white'
              bgColor='transparent'
            />
            <div className={styles.ticket1}>
              {data.pricing_model === "Ticket Tier" ? (
                data.tickets.map((ticket) => (
                  <>
                    <span>{ticket.ticket_type}</span>
                    <label htmlFor=''></label>
                    <p>₦{Number(ticket.amount).toLocaleString()}</p>
                  </>
                ))
              ) : (
                <span>Free</span>
              )}
            </div>
            <div className={styles.ticket2}>
              <span>{data.service_name}</span>
              <div>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12 2.25C8.27344 2.25 5.25 5.12766 5.25 8.67188C5.25 12.75 9.75 19.2127 11.4023 21.4448C11.4709 21.5391 11.5608 21.6157 11.6647 21.6686C11.7686 21.7215 11.8835 21.749 12 21.749C12.1165 21.749 12.2314 21.7215 12.3353 21.6686C12.4392 21.6157 12.5291 21.5391 12.5977 21.4448C14.25 19.2136 18.75 12.7533 18.75 8.67188C18.75 5.12766 15.7266 2.25 12 2.25Z'
                    stroke='#c0c0c0ff'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                  <path
                    d='M12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25Z'
                    stroke='#c0c0c0ff'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                  />
                </svg>{" "}
                <span>
                  {data.virtual_meeting_link || data.in_person_location}
                </span>
              </div>
              <div>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <g clip-path='url(#clip0_11171_7491)'>
                    <path
                      d='M8.1057 2.84961C8.27279 2.84961 8.43303 2.91598 8.55118 3.03413C8.66933 3.15228 8.7357 3.31252 8.7357 3.47961V4.65771H15.501V3.48771C15.501 3.32062 15.5674 3.16038 15.6855 3.04223C15.8037 2.92408 15.9639 2.85771 16.131 2.85771C16.2981 2.85771 16.4583 2.92408 16.5765 3.04223C16.6946 3.16038 16.761 3.32062 16.761 3.48771V4.65771H19.2C19.6772 4.65771 20.1349 4.84723 20.4725 5.1846C20.81 5.52197 20.9998 5.97958 21 6.45681V19.0505C20.9998 19.5277 20.81 19.9853 20.4725 20.3227C20.1349 20.6601 19.6772 20.8496 19.2 20.8496H4.8C4.32277 20.8496 3.86507 20.6601 3.52753 20.3227C3.18999 19.9853 3.00024 19.5277 3 19.0505V6.45681C3.00024 5.97958 3.18999 5.52197 3.52753 5.1846C3.86507 4.84723 4.32277 4.65771 4.8 4.65771H7.4757V3.47871C7.47594 3.31178 7.54242 3.15177 7.66054 3.03381C7.77866 2.91586 7.93877 2.84961 8.1057 2.84961ZM4.26 9.81741V19.0505C4.26 19.1214 4.27397 19.1916 4.30111 19.2572C4.32824 19.3227 4.36802 19.3822 4.41816 19.4323C4.46831 19.4825 4.52784 19.5223 4.59335 19.5494C4.65887 19.5765 4.72909 19.5905 4.8 19.5905H19.2C19.2709 19.5905 19.3411 19.5765 19.4066 19.5494C19.4722 19.5223 19.5317 19.4825 19.5818 19.4323C19.632 19.3822 19.6718 19.3227 19.6989 19.2572C19.726 19.1916 19.74 19.1214 19.74 19.0505V9.83001L4.26 9.81741ZM9.0003 16.0067V17.5061H7.5V16.0067H9.0003ZM12.7497 16.0067V17.5061H11.2503V16.0067H12.7497ZM16.5 16.0067V17.5061H14.9997V16.0067H16.5ZM9.0003 12.4274V13.9268H7.5V12.4274H9.0003ZM12.7497 12.4274V13.9268H11.2503V12.4274H12.7497ZM16.5 12.4274V13.9268H14.9997V12.4274H16.5ZM7.4757 5.91681H4.8C4.72909 5.91681 4.65887 5.93078 4.59335 5.95791C4.52784 5.98505 4.46831 6.02483 4.41816 6.07497C4.36802 6.12512 4.32824 6.18464 4.30111 6.25016C4.27397 6.31568 4.26 6.3859 4.26 6.45681V8.55831L19.74 8.57091V6.45681C19.74 6.3859 19.726 6.31568 19.6989 6.25016C19.6718 6.18464 19.632 6.12512 19.5818 6.07497C19.5317 6.02483 19.4722 5.98505 19.4066 5.95791C19.3411 5.93078 19.2709 5.91681 19.2 5.91681H16.761V6.75291C16.761 6.92 16.6946 7.08024 16.5765 7.19839C16.4583 7.31653 16.2981 7.38291 16.131 7.38291C15.9639 7.38291 15.8037 7.31653 15.6855 7.19839C15.5674 7.08024 15.501 6.92 15.501 6.75291V5.91681H8.7357V6.74481C8.7357 6.9119 8.66933 7.07214 8.55118 7.19029C8.43303 7.30843 8.27279 7.37481 8.1057 7.37481C7.93861 7.37481 7.77837 7.30843 7.66022 7.19029C7.54207 7.07214 7.4757 6.9119 7.4757 6.74481V5.91681Z'
                      fill='#c0c0c0ff'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_11171_7491'>
                      <rect
                        width='18'
                        height='18'
                        fill='white'
                        transform='translate(3 2.84961)'
                      />
                    </clipPath>
                  </defs>
                </svg>{" "}
                {data.event_schedule.map((schedule) => (
                  <span>
                    {schedule.day},{" "}
                    <span className={styles.timeSpan}>
                      {schedule.from_time}
                    </span>{" "}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
