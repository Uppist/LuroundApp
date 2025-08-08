/** @format */
import nigeria from "../../../elements/nigeria.png";

import { useState } from "react";
import styles2 from "../Retainer/Details.module.css";

import DayTime from "../OneOff/TimeBased/DayTime";
import Program from "./Program";
import Upload from "./CreateProgram/Upload";
import ProgramDate from "./CreateProgram/StepOne/ProgramDate";
import CreateService from "./CreateProgram/StepOne/CreateService";
import { Link, Outlet, useNavigate } from "react-router-dom";
// import ServiceCreate from "../OneOff/SeviceCreate";
export default function ProgramService({ handleClick }) {
  const [isBack, setIsBack] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const [IsAddTime, setIsAddTime] = useState([]);

  function BackOneOff() {
    setIsBack(true);
  }

  function AddTime() {
    setIsAddTime((prev) => [
      ...prev,
      { id: Date.now(), buttons: ["30", "45", "60", "90", "120", "150"] },
    ]);
  }

  function handleTimeDelete(item) {
    setIsAddTime(IsAddTime.filter((time) => time.id !== item.id));
  }

  const navigate = useNavigate();

  function backPricing() {
    setIsNext(false);
  }
  return (
    <>
      {isBack ? (
        <Program />
      ) : (
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
            <Upload />

            <div>
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
