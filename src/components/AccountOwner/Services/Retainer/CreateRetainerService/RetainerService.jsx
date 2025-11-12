/** @format */
import { useState } from "react";
import styles from "../Details.module.css";

import UploadImage from "../../../Reuseables/UploadImage";
import { Link, Outlet } from "react-router-dom";
export default function RetainerService({
  retainerService,
  setRetainerService,
}) {
  return (
    <>
      <div className={styles.timebased}>
        <Link to={-1}>
          {" "}
          <button className={styles.timeback}>
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
          </button>
        </Link>

        <div className={styles.timebasedgridcontainer}>
          <UploadImage
            details={retainerService}
            setDetails={setRetainerService}
          />
          <div className='time-service-description'>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
