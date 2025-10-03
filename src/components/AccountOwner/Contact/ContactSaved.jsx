/** @format */

import React, { useState, useEffect, useRef, useContext } from "react";
import styles from "./Contact.module.css";
import Transaction from "./Transaction";
import { Link, useLocation } from "react-router-dom";
import NewContact from "./NewContact";
import exportsvg from "../../../components/elements/contact/export.svg";
import { ContactContext } from "../../Context";
import axios from "axios";
import MobileContactSaved from "./mobileContact/MobileContactSaved";

export default function ContactSaved({
  Transactions,
  setTransactions,
  transactions,
  setTransactionIndex,
  transactionIndex,
}) {
  const [isSend, setIsSend] = useState(false);
  const dropdownRef = useRef([]);

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
    // alert("Transaction history");
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

  const [isContacts, setIsContacts] = useContext(ContactContext);

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

  const mobileview = window.innerWidth <= 900;
  function exportContactsCSV() {
    if (!isContacts || isContacts.length === 0) {
      alert("No contacts to export");
      return;
    }

    const headers = ["Name", "Email", "Phone"];
    const rows = isContacts.map((contact) => [
      contact.name,
      contact.email,
      contact.phone_number,
    ]);

    let csvContent =
      "data:text/csv;charset=utf-8," +
      [headers, ...rows].map((e) => e.join(",")).join("\n");

    const link = document.createElement("a");
    link.setAttribute("href", encodeURI(csvContent));
    link.setAttribute("download", "contacts.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <>
      {mobileview ? (
        <MobileContactSaved
          Transactions={Transactions}
          setTransactions={setTransactions}
          setTransactionIndex={setTransactionIndex}
        />
      ) : (
        <div className={styles.account}>
          <div className={styles.export}>
            <img src={exportsvg} alt='' />
            <span onClick={exportContactsCSV}>Export contacts</span>
          </div>

          <div>
            <div className={styles.saved}>
              <span>Name</span>
              <span>Email </span>
              <span>Phone</span>
              <span className={styles.text}>send</span>
              <span className={styles.text}> transaction</span>
            </div>
            <hr />
          </div>

          <div className='transaction-line'>
            {isContacts.map((contact, index) => (
              <div className={styles.saveddetail} key={index}>
                <span>{contact.name}</span>
                <span>{contact.email}</span>
                <span>{contact.phone_number}</span>

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
                      <Link
                        to='/quote/edit'
                        state={{
                          name: contact.name,
                          email: contact.email,
                          phone: contact.phone_number,
                        }}
                      >
                        {" "}
                        <li>Quote</li>
                      </Link>
                      <Link
                        to='/invoice/edit'
                        state={{
                          name: contact.name,
                          email: contact.email,
                          phone: contact.phone_number,
                        }}
                      >
                        <li>Invoice</li>
                      </Link>
                      <Link
                        to='/receipt/edit'
                        state={{
                          name: contact.name,
                          email: contact.email,
                          phone: contact.phone_number,
                        }}
                      >
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
                {transactionIndex === index && (
                  <Transaction
                    transactions={transactions[contact.email]}
                    Cancel={Cancel}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
