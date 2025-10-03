/** @format */

import React from "react";
import Bank from "../../Transactions/SavedAccount/Bank";
import styles from "../../Transactions/SavedAccount/style.module.css";

export default function BankDetails() {
  return (
    <div>
      <div className={styles.banksvg}>
        <Bank />

        <div>
          <label>account_name</label>
          <span>bank_name | account_number</span>
        </div>
      </div>
    </div>
  );
}
