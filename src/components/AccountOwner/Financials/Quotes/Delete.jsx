/** @format */

import React, { useContext } from "react";
import styles from "./Quotes.module.css";
import { useLocation } from "react-router-dom";
import axios from "axios";
import {
  InvoiceContext,
  QuotesContext,
  ReceiptContext,
} from "../../../Context";
import { toast } from "react-toastify";

export default function Delete({ CloseView, data }) {
  const location = useLocation();
  const invoicePage = location.pathname.includes("invoice");
  const receiptsPage = location.pathname.includes("receipt");

  const [invoices, setInvoices, notPaidInvoices, setNotPaidInvoices] =
    useContext(InvoiceContext);
  const [receipt, setReceipt] = useContext(ReceiptContext);
  const [quotes, setQuotes] = useContext(QuotesContext);

  console.log(data);

  function Delete() {
    const token = localStorage.getItem("Token");
    if (receiptsPage) {
      axios
        .delete(
          `https://api.luround.com/v1/receipt/delete-receipt?receiptId=${data._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log("Receipt deleted");
          toast.success("Receipt Deleted");
          setReceipt((prev) => prev.filter((item) => item._id !== data._id));
          CloseView();
        });
      return;
    }

    if (invoicePage) {
      axios
        .delete(
          `https://api.luround.com/v1/invoice/delete-invoice?invoice_id=${data._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log("Invoice deleted");
          toast.success("Invoice Deleted");

          if (data.payment_status === "PENDING") {
            setNotPaidInvoices((prev) =>
              prev.filter((item) => item._id !== data._id)
            );
            CloseView();
          } else {
            setInvoices((prev) => prev.filter((item) => item._id !== data._id));
            CloseView();
          }
        });

      return;
    }

    if (!invoicePage && !receiptsPage) {
      axios
        .delete(
          `https://api.luround.com/v1/quotes/delete-quote?quote_id=${data._id}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then((res) => {
          console.log("Quote deleted");
          toast.success("Quote Deleted");
          setQuotes((prev) => prev.filter((item) => item._id !== data._id));
        });
      return;
    }
  }
  return (
    <>
      {" "}
      <div className={styles.popup}>
        <div className={styles.overlay} onClick={CloseView}></div>
        <div className={styles.delete}>
          <label>
            Are you sure you want to delete this{" "}
            {receiptsPage ? "receipt" : invoicePage ? "invoice" : "quote"}?
          </label>

          <div className={styles.cancelsubmit}>
            <button className={styles.canceltime} onClick={CloseView}>
              Cancel
            </button>
            <button className={styles.donetime} onClick={Delete} type='submit'>
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
