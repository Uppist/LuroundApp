/** @format */
import { useState } from "react";

import "react-toastify/dist/ReactToastify.css";
import UploadImage from "../../../Reuseables/UploadImage";
import styles from "./style.module.css";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function Timebased({ timebased, setTimeBased, onCancel }) {
  const location = useLocation();

  const EditTime = location.state?.data || {};

  // console.log(EditTime);

  return (
    <>
      <div className={styles.timebasedcontainer}>
        <Link to={-1}>
          <button className={styles.timebasedback}>
            <svg
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 1L1 6L6 11'
                stroke='#1D2E2E'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span>Back</span>
          </button>{" "}
        </Link>

        <div className={styles.timebased}>
          <UploadImage setDetails={setTimeBased} details={timebased} />

          <Outlet context={{ EditTime }} />
        </div>
      </div>
    </>
  );
}
