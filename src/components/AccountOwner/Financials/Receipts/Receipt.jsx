/** @format */

import React, { useContext, useState, useEffect } from "react";
import styles from "../Quotes/Quotes.module.css";
import CreateNew from "../../Financials/CreateNew";
import quote from "../../Financials/Quotes/Quotes.json";
import View from "../Quotes/View/View";
import Resend from "../../Financials/Quotes/Resend/Resend";
import Convert from "../../Financials/Quotes/Convert/Convert";
import { Link } from "react-router-dom";
import { ReceiptContext } from "../../../Context";
import EmptyState from "../Quotes/EmptyState";
import Delete from "../Quotes/Delete";

export default function Receipt({ onComponentSwitch }) {
  const [isActive, setIsActive] = useState(null);
  const [isOption, setIsOption] = useState(null);
  const [selectedReceipt, setSelectedReceipt] = useState(null);

  const [receipt, setReceipt, saveReceipt, setSaveReceipt] =
    useContext(ReceiptContext);

  console.log(receipt);
  console.log(saveReceipt);

  const [activeTab, setActiveTab] = useState("sent");

  const currentReceipt = activeTab === "sent" ? receipt : saveReceipt;

  function OpenModal(Active, data) {
    setIsActive(Active);
    if (data) setSelectedReceipt(data);
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

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside() {
      if (isOption) {
        setIsOption(null);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOption]);

  return (
    <section className={styles.quotes}>
      {/* Top Bar */}
      <div className={styles.createquote}>
        <Link to={-1}>
          <div className={styles.quotesvg}>
            <svg
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
            <label>Receipts</label>
          </div>
        </Link>

        <Link to='/receipt/edit'>
          <div className={styles.createnew}>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.7755 20.5714V13.2245H3.42859V10.7755H10.7755V3.42859H13.2245V10.7755H20.5714V13.2245H13.2245V20.5714H10.7755Z'
                fill='#FFFFFF'
              />
            </svg>
            <label>Create new</label>
          </div>
        </Link>
      </div>

      {/* Content */}
      <div className={styles.quotecontainer}>
        <div className={styles.float}>
          <div className={styles.quotestatus}>
            <label
              className={activeTab === "sent" ? styles.sent : styles.sent}
              onClick={() => setActiveTab("sent")}
            >
              Sent
            </label>
            <label
              className={activeTab === "draft" ? styles.draft : styles.draft}
              onClick={() => setActiveTab("draft")}
            >
              Draft
            </label>
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
              <g clipPath='url(#clip0_8039_2817)'>
                <path
                  d='M5.673 0C5.85865 0 6.0367 0.0737498 6.16797 0.205025C6.29925 0.336301 6.373 0.514348 6.373 0.7V2.009H13.89V0.709C13.89 0.523348 13.9637 0.345301 14.095 0.214025C14.2263 0.0827498 14.4043 0.009 14.59 0.009C14.7757 0.009 14.9537 0.0827498 15.085 0.214025C15.2162 0.345301 15.29 0.523348 15.29 0.709V2.009H18C18.5303 2.009 19.0388 2.21958 19.4139 2.59443C19.7889 2.96929 19.9997 3.47774 20 4.008V18.001C19.9997 18.5313 19.7889 19.0397 19.4139 19.4146C19.0388 19.7894 18.5303 20 18 20H2C1.46974 20 0.961184 19.7894 0.58614 19.4146C0.211096 19.0397 0.00026513 18.5313 0 18.001L0 4.008C0.00026513 3.47774 0.211096 2.96929 0.58614 2.59443C0.961184 2.21958 1.46974 2.009 2 2.009H4.973V0.699C4.97327 0.513522 5.04713 0.335731 5.17838 0.204672C5.30963 0.0736123 5.48752 -1.89263e-07 5.673 0ZM1.4 7.742V18.001C1.4 18.0798 1.41552 18.1578 1.44567 18.2306C1.47583 18.3034 1.52002 18.3695 1.57574 18.4253C1.63145 18.481 1.69759 18.5252 1.77039 18.5553C1.84319 18.5855 1.92121 18.601 2 18.601H18C18.0788 18.601 18.1568 18.5855 18.2296 18.5553C18.3024 18.5252 18.3685 18.481 18.4243 18.4253C18.48 18.3695 18.5242 18.3034 18.5543 18.2306C18.5845 18.1578 18.6 18.0798 18.6 18.001V7.756L1.4 7.742Z'
                  fill='#1D2E2E'
                  fillOpacity='0.8'
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

        {currentReceipt && currentReceipt.length > 0 ? (
          <div>
            {/* Header Row */}
            <div className={styles.cardline}>
              <div className={styles.statuscontainer}>
                <span>Receipt No.</span>
                <span>Name</span>
                <span>Date</span>
                <span>Amount</span>
              </div>
              <hr />
            </div>

            {/* Receipt List */}
            {currentReceipt.map((data) => (
              <div
                className={styles.transactionline}
                key={data._id || data.receipt_id}
              >
                <div className={styles.transactionstatus}>
                  <div className={styles.transactionid}>
                    <span>{data.receipt_id}</span>
                  </div>
                  <div className={styles.transactionname}>
                    <span>{data.send_to_name}</span>
                  </div>
                  <div className={styles.transactiondate}>
                    <span>{data.receipt_date}</span>
                  </div>
                  <div className={styles.transactionamount}>
                    <span>₦{data.total.toLocaleString()}</span>
                  </div>

                  {/* Options Dropdown */}
                  <svg
                    onClick={(event) => OptionDrop(event, data._id)}
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

                  {isOption === data._id && (
                    <ul className={styles.lists}>
                      {activeTab === "sent" && (
                        <li onClick={() => OpenModal("view", data)}>View</li>
                      )}
                      {activeTab === "draft" && <li>Generate Receipt</li>}
                      {activeTab === "sent" && (
                        <>
                          <li onClick={() => OpenModal("resend")}>Resend</li>
                          <li>Download</li>
                          <li onClick={() => OpenModal("convert")}>
                            Convert to Invoice
                          </li>
                        </>
                      )}

                      <li onClick={() => OpenModal("delete", data)}>Delete</li>
                    </ul>
                  )}
                </div>
                <hr />
              </div>
            ))}

            {/* Modals */}
            {isActive === "view" && (
              <View CloseView={CloseView} data={selectedReceipt} />
            )}
            {isActive === "resend" && (
              <Resend CloseView={CloseView} data={selectedReceipt} />
            )}
            {isActive === "delete" && (
              <Delete CloseView={CloseView} data={selectedReceipt} />
            )}
          </div>
        ) : (
          "Nothing to show yet"
        )}
      </div>
    </section>
  );
}
