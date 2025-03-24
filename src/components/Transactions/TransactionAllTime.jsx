/** @format */

import transactiondata from "../transaction.json";
import styles from "./style.module.css";
export default function TransactionTime() {
  return (
    <div className='card-line'>
      <div className={styles.transact}>
        <span>Transaction ID</span>
        <span>Date</span>
        <span>Amount</span>
        <span>Status</span>
      </div>
      <hr />

      {transactiondata.map((transfer) => (
        <div className='transaction-line'>
          <div className={styles.transact}>
            <div className={styles.id}>
              <span>{transfer.ID}</span>
              <span>{transfer.Idnumber}</span>
            </div>
            <div className={styles.date}>
              <span>{transfer.Date}</span>
              <label>{transfer.Time}</label>
            </div>
            <div className={styles.amount}>
              <span
                className={
                  transfer.type === "credit"
                    ? `${styles.credit}`
                    : `${styles.debit}`
                }
              >
                {transfer.Amount}
              </span>
              <label
                dangerouslySetInnerHTML={{ __html: transfer.Amountimg }}
              ></label>
            </div>
            <span className={styles.transactstatus}>{transfer.Status}</span>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
