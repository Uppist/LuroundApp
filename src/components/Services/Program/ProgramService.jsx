/** @format */
import { useState } from "react";
import Retainer from "../Retainer/Retainer";
import DayTime from "../OneOff/DayTime";
import ServiceCreate from "../OneOff/SeviceCreate";
export default function ProgramService() {
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

  function Next() {
    setIsNext(true);
  }

  function backPricing() {
    setIsNext(false);
  }
  return (
    <>
      {isBack ? (
        <Retainer />
      ) : (
        <div className='time-based-container'>
          <button className='time-based-back' onClick={BackOneOff}>
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

          <div className='time-based-grid-container'>
            <div className='create-time-based'>
              <div className='create-time-service'>
                <span>Create Program service</span>
              </div>
              <ServiceCreate />
            </div>
            <div className='time-choose-daytime'>
              {isNext ? (
                <DayTime backprice={backPricing} backone={BackOneOff} />
              ) : (
                <>
                  <DayTime showPart={false} showSvg={false} />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
