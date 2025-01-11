/** @format */

import React, { useState } from "react";
import styles from "./Financials.module.css";
import CreateNew from "./CreateNew";

export default function Financials({ onComponentSwitch }) {
  function handleChange(item) {
    onComponentSwitch(item);
  }

  return (
    <section className={styles.financial}>
      <div className={styles.financials}>
        <label>Financials</label>
        <CreateNew />
      </div>

      <div className={styles.financialcontainer}>
        <div onClick={() => handleChange("quotes")}>
          <label>Quotes</label>
        </div>
        <div onClick={() => handleChange("invoices")}>
          {" "}
          <label>Invoices</label>
        </div>
        <div onClick={() => handleChange("receipts")}>
          {" "}
          <label>Receipts</label>
        </div>
      </div>
    </section>
  );
}
