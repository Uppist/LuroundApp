/** @format */

import React, { useState } from "react";
import styles from "../../Event.module.css";
import { useNavigate } from "react-router-dom";
import Regular from "./Regular";
import arrow from "../../../../../elements/arrow.svg";
import Vip from "./Vip";

export default function StepTwo() {
  const [isTicket, setIsTicket] = useState(false);
  const [isRegularVirtual, setIsRegularVirtual] = useState(false);
  const [isVipVirtual, setIsVipVirtual] = useState(false);
  const [isRegularPerson, setIsRegularPerson] = useState(false);
  const [isVipPerson, setIsVipPerson] = useState(false);
  const [isRegular, setIsRegular] = useState(false);
  const [isVip, setIsVip] = useState(false);

  function handleTicket() {
    setIsTicket((prev) => !prev);
  }

  function handleFree() {
    setIsTicket(false);
  }

  function toggleVirtual(ticketType) {
    if (ticketType === "regular") {
      setIsRegularVirtual((prev) => !prev);
    } else if (ticketType === "vip") {
      setIsVipVirtual((prev) => !prev);
    }
  }

  function togglePerson(ticketType) {
    if (ticketType === "regular") {
      setIsRegularPerson((prev) => !prev);
    } else if (ticketType === "vip") {
      setIsVipPerson((prev) => !prev);
    }
  }

  const navigate = useNavigate();

  function handleRegular() {
    // setIsRegular(true);
    setIsRegular((prev) => {
      const newState = !prev;
      if (!newState) {
        setIsRegularVirtual(false); // reset virtual when closing
      }
      return newState;
    });
    setIsVip(false);
  }

  function handleVip() {
    setIsVip((prev) => {
      const newState = !prev;
      if (!newState) {
        setIsVipVirtual(false); // reset virtual when closing
      }
      return newState;
    });
    setIsRegular(false);
  }

  function Done() {
    navigate("/event");
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
              <>
                <div className={styles.regular} onClick={handleRegular}>
                  {isRegular ? (
                    <Regular
                      Virtual={() => toggleVirtual("regular")}
                      isRegularPerson={isRegularPerson}
                      isRegularVirtual={isRegularVirtual}
                      Person={() => togglePerson("regular")}
                    />
                  ) : (
                    <>
                      <span>Regular</span>
                      <img src={arrow} alt='' />
                    </>
                  )}
                </div>

                <div className={styles.vip} onClick={handleVip}>
                  {isVip ? (
                    <Vip
                      Virtual={() => toggleVirtual("vip")}
                      isVipPerson={isVipPerson}
                      isVipVirtual={isVipVirtual}
                      Person={() => togglePerson("vip")}
                    />
                  ) : (
                    <>
                      <span>Vip</span>
                      <img src={arrow} alt='' />
                    </>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <div className='cancel-done'>
          <button className='cancel-time'>Cancel</button>
          <button className='done-time' onClick={Done}>
            Done
          </button>
        </div>
      </div>
    </div>
  );
}
