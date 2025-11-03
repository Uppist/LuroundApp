/** @format */

import React from "react";
import styles from "../../Event.module.css";
import nigeria from "../../../../../elements/nigeria.png";
export default function Vip({
  Person,
  isVipVirtual,
  isVipPerson,
  Virtual,
  tickets,
  setTickets,
  handleTicketTier,
}) {
  function Remove() {
    setTickets("");
  }
  return (
    <div className={styles.ticket}>
      <div className={styles.ticketname}>
        <span>Name</span>
        <input
          type='text'
          name='name'
          value={tickets.vip.name}
          onChange={handleTicketTier}
          id=''
          onClick={(e) => e.stopPropagation()}
          placeholder='e.g VIP'
        />
      </div>
      <div className={styles.ticketname}>
        <span>Description</span>
        <textarea
          name='description'
          value={tickets.vip.description}
          onChange={handleTicketTier}
          id=''
          onClick={(e) => e.stopPropagation()}
          placeholder='Write a brief descriptive summary of this ticket tier'
        ></textarea>
      </div>
      <div className={styles.tickettype}>
        <label htmlFor=''>Event Type</label>
        <div className={styles.ticketevent}>
          <div>
            <input
              type='checkbox'
              name=''
              id=''
              checked={isVipVirtual}
              onChange={Virtual}
              onClick={(e) => e.stopPropagation()}
            />
            <span>Virtual</span>
          </div>
          {isVipVirtual && (
            <div className={styles.virtual}>
              <div>
                <input
                  type='text'
                  name='virtual_link'
                  value={tickets.vip.virtual_link}
                  onChange={handleTicketTier}
                  id=''
                  onClick={(e) => e.stopPropagation()}
                  placeholder='Add meeting link for virtual event'
                />
              </div>
              <div>
                <span>Perks</span>
                <input
                  type='text'
                  name='virtual_perks'
                  value={tickets.vip.virtual_perks}
                  onChange={handleTicketTier}
                  onClick={(e) => e.stopPropagation()}
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
                  <input
                    type='number'
                    name='virtual_amount'
                    value={tickets.vip.virtual_amount}
                    onChange={handleTicketTier}
                    placeholder='0.00'
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>{" "}
            </div>
          )}
          <div>
            {" "}
            <input
              type='checkbox'
              name=''
              id=''
              checked={isVipPerson}
              onChange={Person}
              onClick={(e) => e.stopPropagation()}
            />
            <span>In-person</span>
          </div>

          {isVipPerson && (
            <div className={styles.virtual}>
              <div>
                <input
                  type='text'
                  name='virtual_link'
                  value={tickets.vip.in_person_location}
                  onChange={handleTicketTier}
                  id=''
                  onClick={(e) => e.stopPropagation()}
                  placeholder='Add meeting link for virtual event'
                />
              </div>
              <div>
                <span>Perks</span>
                <input
                  type='text'
                  name='perks'
                  value={tickets.vip.in_person_perks}
                  onChange={handleTicketTier}
                  onClick={(e) => e.stopPropagation()}
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
                  <input
                    type='number'
                    name='amount'
                    value={tickets.vip.in_person_amount}
                    onChange={handleTicketTier}
                    placeholder='0.00'
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>{" "}
            </div>
          )}
        </div>
      </div>
      <div className={styles.button}>
        {" "}
        <button onClick={Remove}>Remove</button>
      </div>
    </div>
  );
}
