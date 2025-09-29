/** @format */

import styles from "./style.module.css";

export default function TransactionTime({ transactions }) {
  console.log(transactions);

  function formatDate(timestamp) {
    const date = new Date(Number(timestamp));

    // Get day of the week (short form like Mon, Tue, Wed…)
    const dayName = date.toLocaleDateString("en-US", { weekday: "short" });

    // Get day number
    const day = date.getDate();

    // Get full month name (January, February…)
    const month = date.toLocaleDateString("en-US", { month: "long" });

    // Full year
    const year = date.getFullYear();

    return `${dayName}, ${day} ${month}, ${year}`;
  }

  return (
    <div className='card-line'>
      <div className={styles.transact}>
        <span>Transaction ID</span>
        <span>Date</span>
        <span>Amount</span>
        <span>Status</span>
      </div>
      <hr />

      {transactions.map((transfer) => (
        <div className='transaction-line'>
          <div className={styles.transact}>
            <div className={styles.id}>
              <span>{transfer.ID}</span>
              <span>{transfer.Idnumber}</span>
            </div>
            <div className={styles.date}>
              <span>{formatDate(transfer.transaction_date)}</span>
              <label>{transfer.transaction_time}</label>
            </div>
            <div className={styles.amount}>
              <span
                className={
                  transfer.transaction_status === "RECEIVED"
                    ? `${styles.credit}`
                    : `${styles.debit}`
                }
              >
                ₦{transfer.amount}
              </span>
              {transfer.transaction_status === "RECEIVED" ? (
                <svg
                  width='12'
                  height='13'
                  viewBox='0 0 12 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    y='0.666016'
                    width='11.6609'
                    height='11.6667'
                    rx='2'
                    fill='#44C566'
                  />
                  <path
                    d='M3.43749 9.5625H6.25499C6.49416 9.5625 6.69249 9.36417 6.69249 9.125C6.69249 8.88583 6.49416 8.6875 6.25499 8.6875H4.49333L8.99666 4.18417C9.16583 4.015 9.16583 3.735 8.99666 3.56583C8.90916 3.47833 8.79833 3.4375 8.68749 3.4375C8.57666 3.4375 8.46583 3.47833 8.37833 3.56583L3.87499 8.06917V6.3075C3.87499 6.06833 3.67666 5.87 3.43749 5.87C3.19833 5.87 2.99999 6.06833 2.99999 6.3075V9.125C2.99999 9.36417 3.19833 9.5625 3.43749 9.5625Z'
                    fill='#EFFAF2'
                  />
                </svg>
              ) : (
                <svg
                  width='12'
                  height='13'
                  viewBox='0 0 12 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    x='11.6609'
                    y='12.334'
                    width='11.6609'
                    height='11.6667'
                    rx='2'
                    transform='rotate(180 11.6609 12.334)'
                    fill='#D12727'
                  />
                  <path
                    d='M8.2234 3.4375H5.4059C5.16673 3.4375 4.9684 3.63583 4.9684 3.875C4.9684 4.11417 5.16673 4.3125 5.4059 4.3125H7.16756L2.66423 8.81583C2.49506 8.985 2.49506 9.265 2.66423 9.43417C2.75173 9.52167 2.86256 9.5625 2.9734 9.5625C3.08423 9.5625 3.19506 9.52167 3.28256 9.43417L7.7859 4.93083V6.6925C7.7859 6.93167 7.98423 7.13 8.2234 7.13C8.46256 7.13 8.6609 6.93167 8.6609 6.6925V3.875C8.6609 3.63583 8.46256 3.4375 8.2234 3.4375Z'
                    fill='#FCEEEE'
                  />
                </svg>
              )}
            </div>
            {transfer.transaction_status === "RECEIVED" ? (
              <span className={styles.transactstatus}>
                {transfer.transaction_status}
              </span>
            ) : (
              <span className={styles.transactstatus}>Transferred </span>
            )}
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
