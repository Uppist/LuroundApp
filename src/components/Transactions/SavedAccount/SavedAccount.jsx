/** @format */
import React, { useState } from "react";
import styles from "./style.module.css";
import Bank from "./Bank";
import Transfer from "../Tranfer/Transfer";

export default function SavedAccount() {
  const [isTransfer, setIsTransfer] = useState(false);
  function TransferTo() {
    setIsTransfer(true);
  }

  function CancelTransfer() {
    setIsTransfer(false);
  }
  return (
    <div className={styles.savedaccount}>
      <div className={styles.radio}>
        <div className={styles.banksvg}>
          <Bank />
          <div>
            <label htmlFor=''>Melissa Gates</label>
            <span>Fidelity | 6550735271</span>
          </div>
        </div>

        <input type='radio' name='' id='' onClick={TransferTo} />

        {isTransfer && <Transfer CancelTransfer={CancelTransfer} />}
      </div>
      <hr />
    </div>
  );
}
