/** @format */
import React, { useState } from "react";
import styles from "./style.module.css";
import Bank from "./Bank";
import Transfer from "../Tranfer/Transfer";

export default function SavedAccount({ savedBanks }) {
  const [isTransfer, setIsTransfer] = useState(null);
  function TransferTo(index) {
    setIsTransfer(index);
  }

  function CancelTransfer() {
    setIsTransfer(null);
  }

  console.log(savedBanks);
  return (
    <div className={styles.savedaccount}>
      {savedBanks.map((account, index) => (
        <>
          <div className={styles.radio} key={index}>
            <div className={styles.banksvg}>
              <Bank />

              <div>
                <label htmlFor={`account-radio-${index}`}>
                  {account.account_name}
                </label>
                <span>
                  {account.bank_name} | {account.account_number}
                </span>
              </div>
            </div>

            <input
              type='radio'
              name='saved-account-radio'
              id={`account-radio-${index}`}
              onClick={() => TransferTo(index)}
            />

            {isTransfer === index && (
              <Transfer
                // isSavedAccount={isSavedAccount}
                account={account}
                CancelTransfer={CancelTransfer}
              />
            )}
          </div>
          <hr />
        </>
      ))}
    </div>
  );
}
