/** @format */

import React from "react";
import styles from "./Edit.module.css";
import image from "../../../../elements/image.png";
import AddService from "./AddService";
import BankSvg from "./BankSvg";

export default function Edit({ onComponentSwitch }) {
  function Back(item) {
    onComponentSwitch(item);
  }
  return (
    <section className={styles.edit}>
      <div className={styles.editsvg}>
        <svg
          onClick={() => {
            Back("quotes");
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
        <label>Back</label>
      </div>

      <div className={styles.editcontainer}>
        <div className={styles.quotehr}>
          <label>Quote</label>
          <label></label>
          <hr />
        </div>

        <div>
          <div>
            <div className={styles.details}>
              <img src={image} alt='' />
              <div className={styles.label}>
                <label htmlFor=''>Kafayah</label>
                <span htmlFor=''>k@gmail.com</span>
                <span htmlFor=''>09037654672</span>
              </div>
            </div>
            <hr />
          </div>

          <div>
            <div className={styles.sendto}>
              <label>Send to</label>
              <button>
                <div className={styles.textfield}>
                  <span>Receiver's name</span>

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
            <div className={styles.clientdetail}>
              <div className={styles.sendto}>
                <label>Email Address</label>
                <input type='email' name='' id='' placeholder='k@gmail.com' />
              </div>
              <div className={styles.sendto}>
                <label>Phone Number</label>
                <input type='text' name='' id='' placeholder='09047653782' />
              </div>
            </div>
            <div className={styles.clientdetail}>
              <div className={styles.sendto}>
                <label>Quote date</label>
                <button>
                  <div className={styles.textfield}>
                    <span>Receiver's name</span>

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
              <div className={styles.sendto}>
                <label>Due date</label>
                <button>
                  <div className={styles.textfield}>
                    <span>Receiver's name</span>

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
            <hr />
            <AddService />
            <hr />
            <div className={styles.payment}>
              <label>Payment Details</label>

              <div className={styles.paymentcontainer}>
                <div className={styles.bankradio}>
                  <div className={styles.bank}>
                    <BankSvg />
                    <div>
                      <label>Melissa Gates</label>
                      <span>Fidelity Bank | 6550067619</span>
                    </div>
                  </div>
                  <input type='radio' name='radio' id='' />
                </div>
                <hr />

                <div className={styles.bankradio}>
                  <div className={styles.bank}>
                    <BankSvg />
                    <div>
                      <label>Melissa Gates</label>
                      <span>Fidelity Bank | 6550067619</span>
                    </div>
                  </div>
                  <input type='radio' name='radio' id='' />
                </div>
              </div>
            </div>
            <div className={styles.cancelsubmit}>
              <button className={styles.canceltime}>Cancel</button>
              <button className={styles.donetime} type='submit'>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
