/** @format */

import React from "react";
import styles from "../View/View.module.css";
import BankSvg from "../Edit/BankSvg";

export default function Convert({ CloseView }) {
  return (
    <>
      <div className={styles.popup}>
        <div className={styles.overlay} onClick={CloseView}></div>
        <div className={styles.quotepreview}>
          <div className={styles.preview}>
            <div className={styles.quotesvg}>
              <label>Convert to Invoice Preview</label>
              <svg
                onClick={CloseView}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                  stroke='#1D2E2E'
                  stroke-opacity='0.8'
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <hr />

            <div className={styles.sendfrom}>
              <label>Sent from:</label>
              <div className={styles.label}>
                <label htmlFor=''>Kafayah</label>
                <span htmlFor=''>k@gmail.com</span>
                <span htmlFor=''>09037654672</span>
              </div>
            </div>
            <hr />

            <div className={styles.sendfrom}>
              <label>Sent to:</label>
              <div className={styles.label}>
                <label htmlFor=''>Kafayah</label>
                <span htmlFor=''>k@gmail.com</span>
                <span htmlFor=''>09037654672</span>
              </div>
            </div>
            <hr />

            <div className={styles.quotedetail}>
              <label>Quotes Details</label>
              <div className={styles.service}>
                <div>
                  <label>Status</label>
                  <span className={styles.sent}>SENT</span>
                </div>
                <div>
                  {" "}
                  <label>Quote Number</label>
                  <span>#000001</span>
                </div>
                <div>
                  {" "}
                  <label>Valid till</label>
                  <span>14, Oct 2023</span>
                </div>
                <div>
                  {" "}
                  <label>Grand Total</label>
                  <span>₦82,000</span>
                </div>
                <hr />
              </div>
            </div>

            <div className={styles.products}>
              <label>Product/Services</label>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.93066 5.86086L12.0686 9.99879L7.93066 14.1367'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <hr />

            <div className={styles.service2}>
              <div>
                <label>Subtotal</label>
                <span>₦39,000</span>
              </div>
              <div>
                {" "}
                <label>Discount</label>
                <span>-₦2,500</span>
              </div>
              <div>
                {" "}
                <label>VAT</label>
                <span>₦500</span>
              </div>
              <div>
                {" "}
                <label>Total</label>
                <span>₦36,500</span>
              </div>
            </div>

            <div className={styles.note}>
              <label>Note</label>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.93066 5.86086L12.0686 9.99879L7.93066 14.1367'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeWidth='2'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>

            <div className={styles.payment}>
              <label>Payment Details</label>

              <div className={styles.paymentcontainer}>
                <div className={styles.bankcopy}>
                  <div className={styles.bank}>
                    <BankSvg />
                    <div>
                      <label>Melissa Gates</label>
                      <span>Fidelity Bank | 6550067619</span>
                    </div>
                  </div>
                  <svg
                    width='18'
                    height='19'
                    viewBox='0 0 18 19'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g clip-path='url(#clip0_110_2657)'>
                      <path
                        d='M12 1.45728H3C2.17125 1.45728 1.5 2.12853 1.5 2.95728V13.4573H3V2.95728H12V1.45728ZM14.25 4.45728H6C5.17125 4.45728 4.5 5.12853 4.5 5.95728V16.4573C4.5 17.286 5.17125 17.9573 6 17.9573H14.25C15.0787 17.9573 15.75 17.286 15.75 16.4573V5.95728C15.75 5.12853 15.0787 4.45728 14.25 4.45728ZM14.25 16.4573H6V5.95728H14.25V16.4573Z'
                        fill='#1D2E2E'
                        fill-opacity='0.65'
                      />
                    </g>
                    <defs>
                      <clipPath id='clip0_110_2657'>
                        <rect
                          width='18'
                          height='18'
                          fill='white'
                          transform='translate(0 0.707275)'
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <button className={styles.convert}>Convert to Invoice</button>
        </div>
      </div>
    </>
  );
}
