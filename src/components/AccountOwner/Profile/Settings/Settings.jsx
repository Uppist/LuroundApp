/** @format */

import React, { useContext, useRef, useState } from "react";
import styles from "./Setting.module.css";
import PasswordChange from "./PasswordChange";
import ChangeWithdrawalPin from "./ChangeWithdrawalPin";
import ForgotWithdrawalPin from "./ForgotWithdrawalPin";
import CustomizeURL from "./CustomizeURL";
import Notifications from "./Notifications";
import Delete from "./Delete";
import BankDetails from "./BankDetails";
import AddBank from "../../Transactions/SavedAccount/Addbank";
import { TransactionContext } from "../../../Context";

export default function Settings() {
  const [isBank, setIsBank] = useState(false);
  const [isPinVisible, setIsPinVisible] = useState(false);
  const scrollpassword = useRef(null);
  const scrollwithdraw = useRef(null);
  const scrollforgot = useRef(null);
  const scrollaccount = useRef(null);
  const scrollurl = useRef(null);
  const scrollnotification = useRef(null);
  const scrolldelete = useRef(null);
  const scrollTo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [
    transactions,
    setTransactions,
    transactionBalance,
    setTransactionBalance,
  ] = useContext(TransactionContext);
  function Bank() {
    setIsBank(true);
  }

  function CloseBank() {
    setIsBank(false);
  }

  function Pin() {
    setIsPinVisible((prev) => !prev);
  }
  return (
    <section className={styles.settings}>
      <label>Settings</label>
      <div className={styles.settingscontainer}>
        <div className={styles.settingsfirst}>
          <div>
            <span onClick={() => scrollTo(scrollpassword)}>
              Change Login password
            </span>
            <div className={styles.withdraw} onClick={Pin}>
              <label>Withdrawal Pin management</label>
              {isPinVisible ? (
                <svg
                  onClick={Pin}
                  width='25'
                  height='25'
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
              ) : (
                <svg
                  onClick={Pin}
                  width='7'
                  height='12'
                  viewBox='0 0 7 12'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M1 11L6 6L1 1'
                    stroke='#1D2E2E'
                    strokeOpacity='0.8'
                    strokeWidth='1.5'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              )}
            </div>
            {isPinVisible && (
              <div className={styles.withdrawul}>
                <ul>
                  <li onClick={() => scrollTo(scrollwithdraw)}>
                    Change Withdrawal Pin
                  </li>
                  <li onClick={() => scrollTo(scrollforgot)}>
                    {" "}
                    Forgot Withdrawal Pin
                  </li>
                </ul>
              </div>
            )}
            <span onClick={() => scrollTo(scrollaccount)}>
              Bank account details
            </span>
            <span onClick={() => scrollTo(scrollurl)}>Customize your URL</span>
            <span onClick={() => scrollTo(scrollnotification)}>
              Notifications
            </span>
            <span onClick={() => scrollTo(scrolldelete)}>Delete account</span>
          </div>
        </div>

        <div className={styles.settingssecond}>
          <div ref={scrollpassword}>
            <PasswordChange />
          </div>
          {/* {transactionBalance.wallet_pin && ( */}
          <>
            <div ref={scrollwithdraw}>
              <ChangeWithdrawalPin />
            </div>
            <div ref={scrollforgot}>
              <ForgotWithdrawalPin />
            </div>
          </>
          {/* )} */}

          <div className={styles.bank} ref={scrollaccount}>
            <label>Bank account details</label>
            <svg
              onClick={Bank}
              width='48'
              height='40'
              viewBox='0 0 48 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V32C48 36.4183 44.4183 40 40 40H8C3.58172 40 0 36.4183 0 32V8Z'
                fill='#00CCCC'
              />
              <path
                d='M22.7757 28.5714V21.2245H15.4287V18.7755H22.7757V11.4286H25.2246V18.7755H32.5716V21.2245H25.2246V28.5714H22.7757Z'
                fill='#EBFFFF'
              />
            </svg>
          </div>
          {isBank && <AddBank onExit={CloseBank} />}

          <div ref={scrollurl}>
            <CustomizeURL />
          </div>
          <div ref={scrollnotification}>
            <Notifications />
          </div>

          <div ref={scrolldelete}>
            <Delete />
          </div>
        </div>
      </div>
    </section>
  );
}
