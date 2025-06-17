/** @format */

import React, { useState } from "react";
import styles from "../Quotes/Quotes.module.css";
import CreateNew from "../CreateNew";
import quote from "../../Quotes/Quotes.json";
import View from "../../Quotes/View/View";
import Resend from "../../Quotes/Resend/Resend";
// import Delete from "./Delete";
import Convert from "../Convert/Convert";

export default function Invoice({ onComponentSwitch }) {
  const [isActive, setIsActive] = useState(null);
  const [isOption, setIsOption] = useState(null);

  function OpenModal(Active) {
    setIsActive(Active);
  }

  function CloseView() {
    setIsActive(null);
  }

  function handleBack(item) {
    onComponentSwitch(item);
  }

  function OptionDrop(event, id) {
    event.stopPropagation();

    setIsOption((prev) => (prev === id ? null : id));
  }

  function closeOption() {
    setIsOption(false);
  }
  return (
    <section className={styles.quotes}>
      <div className={styles.createquote}>
        <div className={styles.quotesvg}>
          <svg
            onClick={() => {
              handleBack("financial");
            }}
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 1L1 6L6 11'
              stroke='hsla(180, 23%, 15%, 0.8)'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <label>Invoices</label>
        </div>
        <CreateNew onComponentSwitch={onComponentSwitch} />
      </div>

      <div className={styles.quotecontainer}>
        <div className={styles.float}>
          <div className={styles.quotestatus}>
            <label className={styles.sent}>Paid</label>
            <label className={styles.draft}>Unpaid</label>
            <label className={styles.draft}>Due</label>
          </div>
          <div className={styles.quoteday}>
            <label>Last 90 days</label>
            <svg
              width='16'
              height='16'
              viewBox='0 0 20 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <g clip-path='url(#clip0_8039_2817)'>
                <path
                  d='M5.673 0C5.85865 0 6.0367 0.0737498 6.16797 0.205025C6.29925 0.336301 6.373 0.514348 6.373 0.7V2.009H13.89V0.709C13.89 0.523348 13.9637 0.345301 14.095 0.214025C14.2263 0.0827498 14.4043 0.009 14.59 0.009C14.7757 0.009 14.9537 0.0827498 15.085 0.214025C15.2162 0.345301 15.29 0.523348 15.29 0.709V2.009H18C18.5303 2.009 19.0388 2.21958 19.4139 2.59443C19.7889 2.96929 19.9997 3.47774 20 4.008V18.001C19.9997 18.5313 19.7889 19.0397 19.4139 19.4146C19.0388 19.7894 18.5303 20 18 20H2C1.46974 20 0.961184 19.7894 0.58614 19.4146C0.211096 19.0397 0.00026513 18.5313 0 18.001L0 4.008C0.00026513 3.47774 0.211096 2.96929 0.58614 2.59443C0.961184 2.21958 1.46974 2.009 2 2.009H4.973V0.699C4.97327 0.513522 5.04713 0.335731 5.17838 0.204672C5.30963 0.0736123 5.48752 -1.89263e-07 5.673 0ZM1.4 7.742V18.001C1.4 18.0798 1.41552 18.1578 1.44567 18.2306C1.47583 18.3034 1.52002 18.3695 1.57574 18.4253C1.63145 18.481 1.69759 18.5252 1.77039 18.5553C1.84319 18.5855 1.92121 18.601 2 18.601H18C18.0788 18.601 18.1568 18.5855 18.2296 18.5553C18.3024 18.5252 18.3685 18.481 18.4243 18.4253C18.48 18.3695 18.5242 18.3034 18.5543 18.2306C18.5845 18.1578 18.6 18.0798 18.6 18.001V7.756L1.4 7.742ZM6.667 14.619V16.285H5V14.619H6.667ZM10.833 14.619V16.285H9.167V14.619H10.833ZM15 14.619V16.285H13.333V14.619H15ZM6.667 10.642V12.308H5V10.642H6.667ZM10.833 10.642V12.308H9.167V10.642H10.833ZM15 10.642V12.308H13.333V10.642H15ZM4.973 3.408H2C1.92121 3.408 1.84319 3.42352 1.77039 3.45367C1.69759 3.48382 1.63145 3.52802 1.57574 3.58374C1.52002 3.63945 1.47583 3.70559 1.44567 3.77839C1.41552 3.85119 1.4 3.92921 1.4 4.008V6.343L18.6 6.357V4.008C18.6 3.92921 18.5845 3.85119 18.5543 3.77839C18.5242 3.70559 18.48 3.63945 18.4243 3.58374C18.3685 3.52802 18.3024 3.48382 18.2296 3.45367C18.1568 3.42352 18.0788 3.408 18 3.408H15.29V4.337C15.29 4.52265 15.2162 4.7007 15.085 4.83197C14.9537 4.96325 14.7757 5.037 14.59 5.037C14.4043 5.037 14.2263 4.96325 14.095 4.83197C13.9637 4.7007 13.89 4.52265 13.89 4.337V3.408H6.373V4.328C6.373 4.51365 6.29925 4.6917 6.16797 4.82297C6.0367 4.95425 5.85865 5.028 5.673 5.028C5.48735 5.028 5.3093 4.95425 5.17803 4.82297C5.04675 4.6917 4.973 4.51365 4.973 4.328V3.408Z'
                  fill='#1D2E2E'
                  fill-opacity='0.8'
                />
              </g>
              <defs>
                <clipPath id='clip0_8039_2817'>
                  <rect width='20' height='20' fill='white' />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div>
          <div className={styles.cardline}>
            <div className={styles.statuscontainer}>
              <span>Invoice No.</span>
              <span>Name</span>

              <span>Date</span>
              <span>Amount</span>
            </div>
            <hr />
          </div>

          {quote.map((data) => (
            <div className={styles.transactionline} key={data.ID}>
              <div className={styles.transactionstatus}>
                <div className={styles.transactionid}>
                  <span>{data.ID}</span>
                </div>
                <div className={styles.transactionname}>
                  <span>{data.Name}</span>
                </div>
                <div className={styles.transactiondate}>
                  <span>{data.Date}</span>
                </div>
                <div className={styles.transactionamount}>
                  <span>{data.Amount}</span>
                </div>

                <svg
                  onClick={(event) => OptionDrop(event, data.ID)}
                  width='20'
                  height='20'
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
                {isOption === data.ID && (
                  //   <div className={styles.popup}>
                  //     <div className={styles.overlay} onClick={closeOption}>
                  //   <div className={styles.listoption}>
                  <ul className={styles.lists}>
                    <li onClick={() => OpenModal("view")}>View</li>
                    <li onClick={() => handleBack("edit")}>Edit</li>
                    <li onClick={() => OpenModal("resend")}>Resend</li>
                    <li>Download</li>
                    {/* <li onClick={() => OpenModal("convert")}>
                      Convert to Invoice
                    </li> */}
                    <li onClick={() => OpenModal("delete")}>Delete</li>
                  </ul>
                  //   </div>
                  // </div>
                  //   </div>
                )}
              </div>

              <hr />
            </div>
          ))}

          {isActive === "view" && <View CloseView={CloseView} />}
          {isActive === "resend" && <Resend CloseView={CloseView} />}
          {/* {isActive === "convert" && <Convert CloseView={CloseView} />} */}
          {isActive === "delete" && <Delete CloseView={CloseView} />}
        </div>
      </div>
    </section>
  );
}
