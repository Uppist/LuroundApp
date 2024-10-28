/** @format */

import transactiondata from "../transaction.json";
export default function TransactionTime() {
  return (
    <div className='card-line'>
      <div className='transaction-status'>
        <span>Transaction ID</span>
        <span>Date</span>
        <span>Amount</span>
        <span>Status</span>
      </div>
      <hr />

      {transactiondata.map((transfer) => (
        <div className='transaction-line'>
          <div className='transaction-status'>
            <div className='transaction-id'>
              <span>{transfer.ID}</span>
              <span>{transfer.Idnumber}</span>
            </div>
            <div className='transaction-date'>
              <span>{transfer.Date}</span>
              <label>{transfer.Time}</label>
            </div>
            <div className='transaction-amount'>
              <span className={transfer.type === "credit" ? "credit" : "debit"}>
                {transfer.Amount}
              </span>
              <label
                dangerouslySetInnerHTML={{ __html: transfer.Amountimg }}
              ></label>
            </div>
            <span className='status-transaction'>{transfer.Status}</span>
          </div>
          <hr />
        </div>
      ))}
    </div>
  );
}
