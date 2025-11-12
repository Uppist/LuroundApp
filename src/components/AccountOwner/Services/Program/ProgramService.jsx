/** @format */

import { useState } from "react";
import styles2 from "../Retainer/Details.module.css";
import UploadImage from "../../Reuseables/UploadImage";
import { Link, Outlet } from "react-router-dom";

export default function ProgramService({ programService, setProgramService }) {
  const [IsAddTime, setIsAddTime] = useState([]);

  function AddTime() {
    setIsAddTime((prev) => [
      ...prev,
      { id: Date.now(), buttons: ["30", "45", "60", "90", "120", "150"] },
    ]);
  }

  function handleTimeDelete(item) {
    setIsAddTime(IsAddTime.filter((time) => time.id !== item.id));
  }

  return (
    <>
      <div className={styles2.timebased}>
        <Link to={-1}>
          <button className={styles2.timeback}>
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

        <div className={styles2.timebasedgridcontainer}>
          <UploadImage
            details={programService}
            setDetails={setProgramService}
          />

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
