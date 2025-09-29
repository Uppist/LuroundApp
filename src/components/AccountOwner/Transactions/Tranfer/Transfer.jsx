/** @format */

import React, { useContext, useState } from "react";
import styles from "./transfer.module.css";
import Confirm from "./Confirm";
import { TransactionContext } from "../../../Context";
import { toast } from "react-toastify";

export default function Transfer({ CancelTransfer, account }) {
  const [isConfirm, setIsConfirm] = useState(false);
  const [isFadeOut, setIsFadeOut] = useState("fade-in");
  const [
    transactions,
    setTransactions,
    transactionBalance,
    setTransactionBalance,
  ] = useContext(TransactionContext);

  const [details, setDetails] = useState({ amount: "", remarks: "" });
  function NextConfirm() {
    // setIsFadeOut("fade-out");

    console.log(details);
    if (transactionBalance.wallet_balance < Number(details.amount)) {
      toast.error("you have insufficient balance");
      // setIsConfirm(false);
      return;
    } else {
      setTimeout(() => {
        setIsConfirm(true);
        setIsFadeOut("fade-in");
      }, 200);
    }
  }
  function handleChange(e) {
    const { name, value } = e.target;
    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const Next = details.amount.length > 1;

  console.log(account);
  return (
    <>
      {isConfirm ? (
        <Confirm Cancel={CancelTransfer} details={details} account={account} />
      ) : (
        <div className='popupcancel popupwithdrawpin'>
          <div className='overlay' onClick={CancelTransfer}></div>
          <div className={`${styles.withdrawpin} ${isFadeOut}`}>
            <div className={styles.setpin}>
              <div className={styles.transferto}>
                <label htmlFor=''>Transfer To</label>
                <div className={styles.container}>
                  <div className={styles.bank}>
                    <label>Bank</label>
                    <span htmlFor=''>{account.bank_name}</span>
                  </div>
                  <div className={styles.number}>
                    <div className={styles.name}>
                      <label htmlFor=''>Account Number</label>
                      <span>{account.account_number}</span>
                    </div>
                    <div className={styles.name}>
                      <label htmlFor=''>Account Name</label>
                      <span>{account.account_name}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.transferto}>
                <label htmlFor=''>Transfer From</label>
                <div className={styles.container2}>
                  <span>Wallet</span>

                  <div className={styles.balance}>
                    <label htmlFor=''>Balance</label>
                    <span>₦{transactionBalance.wallet_balance}</span>
                  </div>
                </div>
              </div>
              <div className={styles.amount}>
                <div className={styles.amount2}>
                  <label htmlFor=''>Enter amount</label>
                  <input
                    type='text'
                    inputMode='numeric'
                    name='amount'
                    pattern='/d*'
                    value={details.amount}
                    onChange={handleChange}
                    onInput={(e) =>
                      (e.target.value = e.target.value.replace(/\D/g, ""))
                    }
                    id=''
                  />
                </div>
                <div className={styles.amount2}>
                  <span>Remarks (Optional)</span>
                  <input
                    type='text'
                    name='remarks'
                    value={details.remarks}
                    onChange={handleChange}
                    id=''
                  />
                </div>
              </div>
              <div className={styles.button}>
                <button disabled={!Next} onClick={NextConfirm}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
