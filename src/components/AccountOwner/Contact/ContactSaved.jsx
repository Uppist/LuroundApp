/** @format */

import React, { useState, useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import Transaction from "./Transaction";
import { Link, useLocation } from "react-router-dom";
import NewContact from "./NewContact";

export default function ContactSaved() {
  const location = useLocation();

  const { contacts } = location.state || { contacts: [] }; // Default to an empty array if state is undefined

  console.log("contact", contacts);
  const [transactionIndex, setTransactionIndex] = useState(null);
  const [isSend, setIsSend] = useState(false);
  const dropdownRef = useRef([]);

  useEffect(() => {
    dropdownRef.current = contacts.map(() => React.createRef());
  }, [contacts]);

  // Toggle dropdown open/close
  function Send(index, e) {
    e.stopPropagation();
    setIsSend((prevIndex) => (prevIndex === index ? false : index));
  }

  // Handle sending quote/invoice/receipt
  function Click(type) {
    handleClick(type);
    console.log("clicked", type);
    setIsSend(false); // Close dropdown after clicking item
  }

  // Open transaction for specific contact
  function History(index) {
    setTransactionIndex(index);
  }

  // Close transaction and dropdown
  function Cancel() {
    setTransactionIndex(null);
    setIsSend(false);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef[isSend] &&
        !dropdownRef[isSend].current.contains(event.target)
      ) {
        setIsSend(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSend]);

  return (
    <div className={styles.contact}>
      <NewContact />
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
                  onClick={(e) => Send(index, e)}
                  width='16'
                  height='16'
                  viewBox='0 0 16 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                    stroke='#FFFFFF'
                    strokeOpacity='0.8'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>

                {isSend === index && (
                  <ul
                    className={styles.sendlist}
                    ref={dropdownRef.current[index]}
                  >
                    <Link to='/quote'>
                      {" "}
                      <li>Quote</li>
                    </Link>
                    <li onClick={() => Click("invoices")}>Invoice</li>
                    <Link to='/receipt'>
                      <li>Receipt</li>
                    </Link>
                  </ul>
                )}
              </div>

              <svg
                onClick={() => History(index)}
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

              {transactionIndex === index && <Transaction Cancel={Cancel} />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
