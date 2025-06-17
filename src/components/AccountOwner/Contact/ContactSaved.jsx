/** @format */

import React, { useState } from "react";
import styles from "./Contact.module.css";
import Transaction from "./Transaction";

export default function ContactSaved({ contacts, handleClick }) {
  const [transaction, setTransaction] = useState(false);
  const [isSend, setIsSend] = useState(false);

  function History() {
    setTransaction(true);
  }

  function Send() {
    setIsSend((prev) => !prev);
    // handleClick(item);
  }

  function Cancel() {
    setTransaction(false);
    setIsSend(false);
  }

  function Click(item) {
    handleClick(item);
    console.log("clicked", item);
  }
  return (
    <div className={styles.account}>
      <div className={styles.export}>
        <span>Export Contact</span>
      </div>
      <div>
        <div className={styles.saved}>
          <span>Name</span>
          <span>Email</span>
          <span>Phone</span>
        </div>
        <hr />
      </div>

      <div className='transaction-line'>
        {contacts.map((contact, index) => (
          <div className={styles.saveddetail} key={index}>
            <span>{contact.name}</span>
            <span>{contact.email}</span>
            <span>{contact.phone}</span>
            <div className={styles.send}>
              <span>Send</span>
              <svg
                onClick={Send}
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#FFFFFF'
                  stroke-opacity='0.8'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
              {isSend && (
                <ul className={styles.sendlist}>
                  <li onClick={() => Click("quotes")}>Quote</li>
                  <li onClick={() => Click("invoices")}>Invoice</li>
                  <li onClick={() => Click("receipts")}>Receipt</li>
                </ul>
              )}
            </div>

            <svg
              onClick={History}
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
            {transaction && <Transaction Cancel={Cancel} />}
          </div>
        ))}
      </div>
    </div>
  );
}
