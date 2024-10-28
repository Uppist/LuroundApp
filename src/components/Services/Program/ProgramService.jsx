/** @format */
import nigeria from "../../elements/nigeria.png";

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
                <span>Create a Program service</span>
              </div>
              <ServiceCreate />

              <div className="program-calendar">
                <div className="start-calendar">
                  <div className="start-end-date">
                    <span>Start date</span>
                    <span>End date</span>
                  </div>
                  <div className="input-calendar">
                    <input type='calendar' />
                    <input type='calendar' />
                  </div>
                </div>
                <div className="program-recurrence">
                  <span>Program recurrence</span>
                  <button></button>
                </div>
                <div className="no_of_participant">
                  <span>Maximum number of participants</span>
                  <div className="participant">
                    <span>0</span>
                  </div>
                </div>

                <div>
                  <span>Program fee</span>
                  <div>
                    <div>
                      <span>In-person</span>
                      <div className='nigeria-price'>
                        <button>
                          <div className='nigeria-down'>
                            <img src={nigeria} />
                            <div className='ngn-down'>
                              <span>NGN</span>
                              <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                                  stroke='#1D2E2E'
                                  strokeOpacity='0.8'
                                  strokeMiterlimit='10'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <input type='text' placeholder='0.00' />
                      </div>
                    </div>
                    <div>
                      <span>Virtual</span>
                      <div className='nigeria-price'>
                        <button>
                          <div className='nigeria-down'>
                            <img src={nigeria} />
                            <div className='ngn-down'>
                              <span>NGN</span>
                              <svg
                                width='16'
                                height='16'
                                viewBox='0 0 16 16'
                                fill='none'
                                xmlns='http://www.w3.org/2000/svg'
                              >
                                <path
                                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                                  stroke='#1D2E2E'
                                  strokeOpacity='0.8'
                                  strokeMiterlimit='10'
                                  strokeLinecap='round'
                                  strokeLinejoin='round'
                                />
                              </svg>
                            </div>
                          </div>
                        </button>
                        <input type='text' placeholder='0.00' />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
