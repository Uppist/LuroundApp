/** @format */
import React, { useContext, useState } from "react";
import styles from "./Quotes.module.css";
import View from "./View/View";
import Delete from "./Delete";
import Convert from "./Convert/Convert";
import Resend from "./Resend/Resend";
import { Link } from "react-router-dom";
import { QuotesContext } from "../../../Context";
import EmptyState from "./EmptyState";

export default function Quotes({ onComponentSwitch }) {
  const [isActive, setIsActive] = useState(null);
  const [isOption, setIsOption] = useState(null);
  const [selectedQuote, setSelectedQuote] = useState(null);

  const [quotes, setQuotes, savedQuotes, setSavedQuote] =
    useContext(QuotesContext);

  // 👇 add state to toggle between sent & draft
  const [activeTab, setActiveTab] = useState("sent");

  function OpenModal(Active, data) {
    setIsActive(Active);
    if (data) setSelectedQuote(data);
  }

  function CloseView() {
    setIsActive(null);
  }

  function OptionDrop(event, id) {
    event.stopPropagation();
    setIsOption((prev) => (prev === id ? null : id));
  }

  const currentQuotes = activeTab === "sent" ? quotes : savedQuotes;

  return (
    <section className={styles.quotes}>
      <div className={styles.createquote}>
        <Link to='/financials'>
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
            <label>Quotes</label>
          </div>
        </Link>
        <Link to='/quote/edit'>
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
          </div>
        </div>

        {currentQuotes && currentQuotes.length > 0 ? (
          <div>
            <div className={styles.cardline}>
              <div className={styles.statuscontainer}>
                <span>Quote No.</span>
                <span>Name</span>
                <span>Date</span>
                <span>Amount</span>
              </div>
              <hr />
            </div>

            {currentQuotes.map((data) => (
              <div className={styles.transactionline} key={data._id}>
                <div className={styles.transactionstatus}>
                  <div className={styles.transactionid}>
                    <span>{data.quote_id}</span>
                  </div>
                  <div className={styles.transactionname}>
                    <span>{data.send_to_name}</span>
                  </div>
                  <div className={styles.transactiondate}>
                    <span>{data.quote_date}</span>
                  </div>
                  <div className={styles.transactionamount}>
                    <span>₦{data.total.toLocaleString()}</span>
                  </div>

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
                      <li onClick={() => OpenModal("view", data)}>View</li>
                      <li>Send Quote</li>
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
          </div>
        ) : (
          "Nothing to show"
        )}

        {isActive === "view" && (
          <View CloseView={CloseView} data={selectedQuote} />
        )}
        {isActive === "resend" && (
          <Resend CloseView={CloseView} data={selectedQuote} />
        )}
        {isActive === "convert" && (
          <Convert CloseView={CloseView} data={selectedQuote} />
        )}
        {isActive === "delete" && (
          <Delete CloseView={CloseView} data={selectedQuote} />
        )}
      </div>
    </section>
  );
}
