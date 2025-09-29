/** @format */

import React, { useContext } from "react";
import styles from "../style.module.css";
import NoOrder from "./NoOrder";
import { Link } from "react-router-dom";
import { OrderHistoryContext } from "../../../Context";
import Orders from "./Orders";

export default function Order() {
  const [orderHistory, setOrderHistory] = useContext(OrderHistoryContext);
  return (
    <div className={styles.contact}>
      <Link to={-1}>
        <button className={styles.back}>
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 1L1 6L6 11'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <span className={styles.NoOrder}>Order History</span>
        </button>
      </Link>

      <div className={styles.orderContainer}>
        <div className={styles.filter}>
          <span>Filter by:</span>
          <div>All time</div>
        </div>
        {orderHistory.length > 0 ? (
          <Orders orderHistory={orderHistory} />
        ) : (
          <NoOrder />
        )}
      </div>
    </div>
  );
}
