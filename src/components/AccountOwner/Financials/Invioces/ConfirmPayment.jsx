/** @format */

import React, { useContext, useState } from "react";
import styles from "../Quotes/View/View.module.css";
import ngn from "../../../elements/nigeria.svg";
import arrow from "../../../elements/arrow.svg";
import axios from "axios";
import { InvoiceContext } from "../../../Context";
import { toast } from "react-toastify";
export default function ConfirmPayment({ CloseView, data }) {
  const [dropdown, setDropdown] = useState(false);
  const [selected, setSelected] = useState("Card");

  const [amount, setAmount] = useState("");

  const [invoices, setInvoices] = useContext(InvoiceContext);

  function toggleDropdown() {
    setDropdown(!dropdown);
  }

  function handleAmount(e) {
    const value = e.target.value.replace(/\D/g, "");
    setAmount(value);
  }

  const isSave = amount.length > 0 && selected.trim() !== "";

  function Save() {
    console.log(amount, selected);

    const invoiceData = {
      amount_paid: amount,
      payment_method: selected,
    };

    const token = localStorage.getItem("Token");

    axios
      .put(
        `https://api.luround.com/v1/invoice/add-invoice-payment-detail?invoiceId=${data._id}`,
        invoiceData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        setInvoices((prev) => ({
          ...prev,
          [data._id]: res.data,
          //   res.data
        }));
      })
      .catch((err) => {
        console.log(err);

        toast.error(err.response.data.message.message);
      });
  }
  return (
    <div className={styles.popup}>
      <div className={styles.overlay} onClick={CloseView}></div>
      <div className={styles.recordpreview}>
        <div className={styles.recordsvg}>
          <label>Record Payment </label>
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
        <div className={styles.invoicenumber}>
          <span>Amount Paid</span>
          <div className={styles.number}>
            <div>
              <img src={ngn} alt='' />
              <span>NGN</span>
              <img src={arrow} alt='' />
            </div>

            <input
              type='text'
              name='amount'
              value={amount}
              onChange={handleAmount}
              inputMode='numeric'
            />
          </div>
        </div>
        <div className={styles.invoicenumber}>
          <span>Payment Method</span>

          <div className={styles.card} onClick={toggleDropdown}>
            <span>{selected}</span>
            <img src={arrow} alt='' />
          </div>
          {dropdown && (
            <div className={styles.dropdown}>
              <span
                className={styles.option}
                onClick={() => {
                  setSelected("Card");
                  setDropdown(false);
                }}
              >
                Card
              </span>
              <span
                className={styles.option}
                onClick={() => {
                  setSelected("Bank Transfer");
                  setDropdown(false);
                }}
              >
                Bank Transfer
              </span>
              <span
                onClick={() => {
                  setSelected("Others");
                  setDropdown(false);
                }}
                className={styles.option}
              >
                Others
              </span>
            </div>
          )}
        </div>
        <div className={styles.cancelsubmit}>
          <button className={styles.canceltime} onClick={CloseView}>
            Cancel
          </button>
          <button
            className={styles.donetime}
            disabled={!isSave}
            onClick={Save}
            type='button'
          >
            Save
          </button>
        </div>{" "}
      </div>
    </div>
  );
}
