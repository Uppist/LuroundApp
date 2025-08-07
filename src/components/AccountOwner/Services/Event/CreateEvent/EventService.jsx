/** @format */

import styles from "./style.module.css";
import styles2 from "../../Retainer/Details.module.css";
import Upload from "./Upload";
import { Link, Outlet } from "react-router-dom";
export default function EventService({ closeService, handleClick }) {
  return (
    <>
      <div className={styles2.timebased}>
        <Link to={-1}>
          {" "}
          <button className={styles2.timeback} onClick={closeService}>
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

        <div className={styles.createeventservice}>
          <Upload />
          <Outlet />
          {/* <CreateEvent handleClick={handleClick} /> */}
        </div>
      </div>
    </>
  );
}
