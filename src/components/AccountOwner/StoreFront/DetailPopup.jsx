/** @format */

import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./style.module.css";
import product from "../../elements/product.png";

export default function DetailPopup({ Close }) {
  const location = useLocation();

  const data = location.state.data || {};
  console.log(data);

  function displayCategory(category) {
    return category.replace("_", "  ").replace("/", " & ");
  }

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

          <span>Back</span>
        </button>
      </Link>
      <div className={styles.detailImg}>
        <img src={data.photoURL} alt='' />

        <div className={styles.details}>
          {" "}
          <div className={styles.product}>
            <div>
              <span>{data.product_name}</span>
              <label htmlFor=''>₦{Number(data.price).toLocaleString()}</label>
            </div>
            <span>by {data.owner_name}</span>
          </div>
          <div className={styles.description}>
            <label htmlFor=''>Description</label>
            <span>{data.description}</span>
          </div>
          <div className={styles.category}>
            <label htmlFor=''>Category -</label>
            <span>{displayCategory(data.category)}</span>
          </div>
          {/* <label htmlFor=''>{data.price}</label> */}
        </div>
      </div>
      {/* </div> */}
    </div>
  );
}
