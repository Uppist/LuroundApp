/** @format */
import { useState } from "react";
import Delete from "../OneOff/OneoffService/Delete";
import EventService from "./CreateEvent/EventService";
import Event from "./Event";
import styles from "./Event.module.css";
import styles2 from "../Retainer/Details.module.css";
import QuickAction from "../OneOff/OneoffService/QuickAction";
import VirtualContainer from "../OneOff/OneoffService/VirtualContainer";
export default function EventDetail({ dataevent }) {
  const [isBack, setIsBack] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);
  const [isShare, setIsShare] = useState(false);

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
  function clickShare() {
    setIsShare(true);
  }

  function closeModal() {
    setIsShare(false);
  }

  return (
    <>
      {isEdit ? (
        <EventService />
      ) : isBack ? (
        <Event />
      ) : (
        <div className={styles2.timebased}>
          <button className={styles2.timeback} onClick={Back}>
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

          <div className={styles2.moredetails}>
            <div className={styles2.morecontainer}>
              <img src={dataevent.image} alt='' />
              <div className={styles2.contenttype}>
                <div className={styles2.personalservice}>
                  <span className={styles2.personal}>{dataevent.Title}</span>
                </div>
                <div className={styles2.description}>
                  <span>About event</span>
                  <span className={`${styles2.text} ${styles2.text2}`}>
                    {dataevent.text}
                    {dataevent.text2}
                    {dataevent.text3}
                  </span>
                </div>
              </div>

              <div className={styles2.availability}>
                <label>Event schedule</label>
                <div className={styles.time}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 2.25C8.27344 2.25 5.25 5.12766 5.25 8.67188C5.25 12.75 9.75 19.2127 11.4023 21.4448C11.4709 21.5391 11.5608 21.6157 11.6647 21.6686C11.7686 21.7215 11.8835 21.749 12 21.749C12.1165 21.749 12.2314 21.7215 12.3353 21.6686C12.4392 21.6157 12.5291 21.5391 12.5977 21.4448C14.25 19.2136 18.75 12.7533 18.75 8.67188C18.75 5.12766 15.7266 2.25 12 2.25Z'
                      stroke='#4A5858'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M12 11.25C13.2426 11.25 14.25 10.2426 14.25 9C14.25 7.75736 13.2426 6.75 12 6.75C10.7574 6.75 9.75 7.75736 9.75 9C9.75 10.2426 10.7574 11.25 12 11.25Z'
                      stroke='#4A5858'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>

                  <label htmlFor=''>{dataevent.location}</label>
                </div>

                <div className={styles.time}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_11171_7491)'>
                      <path
                        d='M8.1057 2.84961C8.27279 2.84961 8.43303 2.91598 8.55118 3.03413C8.66933 3.15228 8.7357 3.31252 8.7357 3.47961V4.65771H15.501V3.48771C15.501 3.32062 15.5674 3.16038 15.6855 3.04223C15.8037 2.92408 15.9639 2.85771 16.131 2.85771C16.2981 2.85771 16.4583 2.92408 16.5765 3.04223C16.6946 3.16038 16.761 3.32062 16.761 3.48771V4.65771H19.2C19.6772 4.65771 20.1349 4.84723 20.4725 5.1846C20.81 5.52197 20.9998 5.97958 21 6.45681V19.0505C20.9998 19.5277 20.81 19.9853 20.4725 20.3227C20.1349 20.6601 19.6772 20.8496 19.2 20.8496H4.8C4.32277 20.8496 3.86507 20.6601 3.52753 20.3227C3.18999 19.9853 3.00024 19.5277 3 19.0505V6.45681C3.00024 5.97958 3.18999 5.52197 3.52753 5.1846C3.86507 4.84723 4.32277 4.65771 4.8 4.65771H7.4757V3.47871C7.47594 3.31178 7.54242 3.15177 7.66054 3.03381C7.77866 2.91586 7.93877 2.84961 8.1057 2.84961ZM4.26 9.81741V19.0505C4.26 19.1214 4.27397 19.1916 4.30111 19.2572C4.32824 19.3227 4.36802 19.3822 4.41816 19.4323C4.46831 19.4825 4.52784 19.5223 4.59335 19.5494C4.65887 19.5765 4.72909 19.5905 4.8 19.5905H19.2C19.2709 19.5905 19.3411 19.5765 19.4066 19.5494C19.4722 19.5223 19.5317 19.4825 19.5818 19.4323C19.632 19.3822 19.6718 19.3227 19.6989 19.2572C19.726 19.1916 19.74 19.1214 19.74 19.0505V9.83001L4.26 9.81741ZM9.0003 16.0067V17.5061H7.5V16.0067H9.0003ZM12.7497 16.0067V17.5061H11.2503V16.0067H12.7497ZM16.5 16.0067V17.5061H14.9997V16.0067H16.5ZM9.0003 12.4274V13.9268H7.5V12.4274H9.0003ZM12.7497 12.4274V13.9268H11.2503V12.4274H12.7497ZM16.5 12.4274V13.9268H14.9997V12.4274H16.5ZM7.4757 5.91681H4.8C4.72909 5.91681 4.65887 5.93078 4.59335 5.95791C4.52784 5.98505 4.46831 6.02483 4.41816 6.07497C4.36802 6.12512 4.32824 6.18464 4.30111 6.25016C4.27397 6.31568 4.26 6.3859 4.26 6.45681V8.55831L19.74 8.57091V6.45681C19.74 6.3859 19.726 6.31568 19.6989 6.25016C19.6718 6.18464 19.632 6.12512 19.5818 6.07497C19.5317 6.02483 19.4722 5.98505 19.4066 5.95791C19.3411 5.93078 19.2709 5.91681 19.2 5.91681H16.761V6.75291C16.761 6.92 16.6946 7.08024 16.5765 7.19839C16.4583 7.31653 16.2981 7.38291 16.131 7.38291C15.9639 7.38291 15.8037 7.31653 15.6855 7.19839C15.5674 7.08024 15.501 6.92 15.501 6.75291V5.91681H8.7357V6.74481C8.7357 6.9119 8.66933 7.07214 8.55118 7.19029C8.43303 7.30843 8.27279 7.37481 8.1057 7.37481C7.93861 7.37481 7.77837 7.30843 7.66022 7.19029C7.54207 7.07214 7.4757 6.9119 7.4757 6.74481V5.91681Z'
                        fill='#4A5858'
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
                  </svg>

                  <label htmlFor=''>{dataevent.startdate}</label>
                </div>

                <div className={styles.time}>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M12 4.5C10.22 4.5 8.47991 5.02784 6.99987 6.01677C5.51983 7.00571 4.36628 8.41131 3.68509 10.0559C3.0039 11.7004 2.82567 13.51 3.17294 15.2558C3.5202 17.0016 4.37737 18.6053 5.63604 19.864C6.89472 21.1226 8.49836 21.9798 10.2442 22.3271C11.99 22.6743 13.7996 22.4961 15.4442 21.8149C17.0887 21.1337 18.4943 19.9802 19.4832 18.5001C20.4722 17.0201 21 15.28 21 13.5C20.9973 11.1139 20.0482 8.82629 18.361 7.13905C16.6737 5.45182 14.3861 4.50273 12 4.5ZM12 21C10.5166 21 9.0666 20.5601 7.83323 19.736C6.59986 18.9119 5.63856 17.7406 5.07091 16.3701C4.50325 14.9997 4.35473 13.4917 4.64411 12.0368C4.9335 10.582 5.64781 9.24559 6.6967 8.1967C7.7456 7.14781 9.08197 6.4335 10.5368 6.14411C11.9917 5.85472 13.4997 6.00325 14.8701 6.5709C16.2406 7.13856 17.4119 8.09986 18.236 9.33322C19.0601 10.5666 19.5 12.0166 19.5 13.5C19.4978 15.4884 18.7069 17.3948 17.3008 18.8008C15.8948 20.2069 13.9884 20.9978 12 21ZM16.2806 9.21938C16.3504 9.28903 16.4057 9.37175 16.4434 9.4628C16.4812 9.55384 16.5006 9.65144 16.5006 9.75C16.5006 9.84856 16.4812 9.94616 16.4434 10.0372C16.4057 10.1283 16.3504 10.211 16.2806 10.2806L12.5306 14.0306C12.4609 14.1003 12.3782 14.1556 12.2872 14.1933C12.1961 14.231 12.0986 14.2504 12 14.2504C11.9015 14.2504 11.8039 14.231 11.7128 14.1933C11.6218 14.1556 11.5391 14.1003 11.4694 14.0306C11.3997 13.9609 11.3444 13.8782 11.3067 13.7872C11.269 13.6961 11.2496 13.5985 11.2496 13.5C11.2496 13.4015 11.269 13.3039 11.3067 13.2128C11.3444 13.1218 11.3997 13.0391 11.4694 12.9694L15.2194 9.21938C15.289 9.14964 15.3718 9.09432 15.4628 9.05658C15.5538 9.01884 15.6514 8.99941 15.75 8.99941C15.8486 8.99941 15.9462 9.01884 16.0372 9.05658C16.1283 9.09432 16.211 9.14964 16.2806 9.21938ZM9 2.25C9 2.05109 9.07902 1.86032 9.21967 1.71967C9.36033 1.57902 9.55109 1.5 9.75 1.5H14.25C14.4489 1.5 14.6397 1.57902 14.7803 1.71967C14.921 1.86032 15 2.05109 15 2.25C15 2.44891 14.921 2.63968 14.7803 2.78033C14.6397 2.92098 14.4489 3 14.25 3H9.75C9.55109 3 9.36033 2.92098 9.21967 2.78033C9.07902 2.63968 9 2.44891 9 2.25Z'
                      fill='#4A5858'
                    />
                  </svg>

                  <span>{dataevent.firstday}</span>
                </div>
              </div>

              <VirtualContainer data={dataevent} />
            </div>
            <QuickAction dataValue={dataevent} setIsEdit={setIsEdit} />
          </div>
        </div>
      )}
    </>
  );
}
