/** @format */

import React, { useState } from "react";
import styles from "./Event.module.css";
import nigeria from "../../../elements/nigeria.png";

export default function SecondEvent({ handleClick }) {
  const [isTicket, setIsTicket] = useState(false);
  const [isVirtual, setIsVirtual] = useState(false);
  const [isPerson, setIsPerson] = useState(false);

  function handleTicket() {
    setIsTicket((prev) => !prev);
  }

  function handleFree() {
    setIsTicket(false);
  }

  function Virtual() {
    setIsVirtual((prev) => !prev);
  }

  function Person() {
    setIsPerson((prev) => !prev);
  }

  return (
    <div className={styles.createservice}>
      <div className={styles.createtimebased}>
        <span>Create an Event</span>
        <div className={styles.eventtype}>
          <span>Pricing model</span>
          <div className={styles.eventcheckbox}>
            <div className={styles.checkvirtual}>
              {" "}
              <input
                name='pricing'
                type='radio'
                onChange={handleFree}
                checked={!isTicket}
              />
              <label>Free</label>
            </div>

            <div className={styles.checkinperson}>
              {" "}
              <input
                name='pricing'
                type='radio'
                onChange={handleTicket}
                checked={isTicket}
              />
              <label>Ticket Tiers</label>
            </div>
            {isTicket && (
              <div className={styles.ticket}>
                <div className={styles.ticketname}>
                  <span>Name</span>
                  <input type='text' name='' id='' />
                </div>
                <div className={styles.ticketname}>
                  <span>Description</span>
                  <textarea
                    name=''
                    id=''
                    placeholder='Write a brief descriptive summary of this ticket tier'
                  ></textarea>
                </div>
                <div className={styles.tickettype}>
                  <label htmlFor=''>Event Type</label>
                  <div className={styles.ticketevent}>
                    <div>
                      <input type='checkbox' name='' id='' onChange={Virtual} />
                      <span>Virtual</span>
                    </div>
                    {isVirtual && (
                      <div className={styles.virtual}>
                        <div>
                          <input
                            type='text'
                            name=''
                            id=''
                            placeholder='Add meeting link for virtual event'
                          />
                        </div>
                        <div>
                          <span>Perks</span>
                          <input
                            type='text'
                            name=''
                            id=''
                            placeholder='List out the perks of this ticket tier'
                          />
                        </div>
                        <div className={styles.pricingproject}>
                          <span>Pricing</span>
                          <div className={styles.nigeriaprice}>
                            <button>
                              <div className={styles.nigeriadown}>
                                <img src={nigeria} />
                                <div className={styles.ngndown}>
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
                        </div>{" "}
                      </div>
                    )}
                    <div>
                      {" "}
                      <input type='checkbox' name='' id='' />
                      <span>In-person</span>
                    </div>
                  </div>
                </div>
                <div className={styles.button}>
                  {" "}
                  <button>Remove</button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className='cancel-done'>
          <button className='cancel-time'>Cancel</button>
          <button
            className='done-time'
            onClick={() => handleClick("eventService")}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
