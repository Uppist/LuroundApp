/** @format */

import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "../Contact.module.css";
import Transaction from "../Transaction";
import { Link, useLocation } from "react-router-dom";
import exportsvg from "../../../../components/elements/contact/export.svg";
import { ContactContext } from "../../../Context";
import axios from "axios";
import email from "../../../../components/elements/contact/email.svg";
import call from "../../../../components/elements/contact/call.svg";
import MobileTransaction from "./MobileTransaction";

export default function MobileContactSaved({
  Transactions,
  setTransactions,
  setTransactionIndex,
}) {
  //   const [transactionIndex, setTransactionIndex] = useState(null);
  const [isSend, setIsSend] = useState(false);
  //   const [transactions, setTransactions] = useState({});
  const dropdownRef = useRef([]);

  // Toggle dropdown open/close
  function Send(index, e) {
    e.stopPropagation();
    setIsSend((prevIndex) => (prevIndex === index ? false : index));
  }

  //   // Handle sending quote/invoice/receipt
  //   function Click(type) {
  //     handleClick(type);
  //     console.log("clicked", type);
  //     setIsSend(false); // Close dropdown after clicking item
  //   }

  // Open transaction for specific contact
  function History(index) {
    Transactions();
    setTransactionIndex(index);
  }

  //   // Close transaction and dropdown
  //   function Cancel() {
  //     setTransactionIndex(null);
  //     setIsSend(false);
  //   }

  const [isContacts, setIsContacts] = useContext(ContactContext);

  console.log(isContacts);

  //get transactions

  useEffect(() => {
    const token = localStorage.getItem("Token");
    isContacts.forEach((contact) => {
      axios
        .get(
          `https://api.luround.com/v1/crm/customer-transactions?customer_email=${contact.email}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log(`Transactions for ${contact.email}:`, res.data);
          setTransactions((prev) => ({
            ...prev,
            [contact.email]: res.data,
          }));
        });
    });
  }, [isContacts]);

  const [mobileDropdown, setMobileDropdown] = useState(false);

  function handleDropdown(index) {
    setMobileDropdown((prev) => (prev === index ? null : index));
  }

  // console.log(transactions);
  return (
    <div className={styles.account}>
      <div className={styles.searchinput}>
        <svg
          className={styles.search}
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='9.80547'
            cy='9.80547'
            r='7.49047'
            stroke='#1D2E2E'
            strokeOpacity='0.8'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.0153 15.4043L17.9519 18.3334'
            stroke='#1D2E2E'
            strokeOpacity='0.8'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
        <input
          className={styles.input}
          type='search'
          placeholder='Search'
          name=''
          id=''
        />{" "}
      </div>

      <div className={styles.export}>
        <img src={exportsvg} alt='' />
        <span>Export contacts</span>
      </div>
      <hr />

      <div className={styles.line}>
        {isContacts.map((contact, index) => (
          <div
            className={
              mobileDropdown === index ? styles.seeMore : styles.saveddetail
            }
            key={index}
          >
            <div>
              <span className={styles.initials}>
                {contact.name.charAt(0).toUpperCase()}
              </span>
              <span>{contact.name}</span>
            </div>

            <svg
              onClick={() => handleDropdown(index)}
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              className={mobileDropdown === index ? styles.rotatedArrow : ""}
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

            {mobileDropdown === index && (
              <div className={styles.more}>
                <span>
                  <img src={email} alt='' />
                  {contact.email}
                </span>
                <span>
                  <img src={call} alt='' />
                  {contact.phone_number}
                </span>
                <div className={styles.buttons}>
                  <Link to='/quote'>
                    {" "}
                    <button>send quote</button>
                  </Link>
                  <Link to='/invoice'>
                    {" "}
                    <button>send invoice</button>
                  </Link>
                  <Link to='/receipt'>
                    {" "}
                    <button>send receipt</button>
                  </Link>
                </div>

                <label onClick={() => History(index)}>
                  Transaction history
                </label>
              </div>
            )}

            {/* {transactionIndex === index && (
              <MobileTransaction
                transactions={transactions[contact.email] || []}
              />
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
}
