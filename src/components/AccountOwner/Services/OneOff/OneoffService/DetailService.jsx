/** @format */

import { useContext, useState } from "react";
import styles from "./DetailService.module.css";
import Timebased from "../TimeBased/TimeBased";
import VirtualContainer from "./VirtualContainer";
import image from "../../../../elements/gallery.png";

import QuickAction from "./QuickAction";
import { Link, useLocation } from "react-router-dom";
export default function DetailOne({ handleClick }) {
  const [isEdit, setIsEdit] = useState(false);

  const location = useLocation();
  const { data } = location.state || {};

  console.log(data);

  return (
    <>
      {isEdit ? (
        <Timebased />
      ) : (
        <div className={styles.timebasedcontainer}>
          <Link to='/oneoff'>
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
                  stroke='currentColor'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <span>Back</span>
            </button>
          </Link>

          <div className={styles.moredetails}>
            <div className={styles.morecontainer}>
              <img src={data.image || image} alt='' />
              <div className={styles.contenttype}>
                <div className={styles.personalservice}>
                  <span className={styles.personal}>{data.service_name}</span>
                </div>
                <div className={styles.description}>
                  <span>About service</span>
                  <span className={`${styles.text} ${styles.text2}`}>
                    {data.description}
                    {/* {dataValue.text2} */}
                  </span>
                </div>
              </div>

              {data.one_off_type === "time-based" ? (
                <>
                  <div className={styles.availability}>
                    <label>Service schedule</label>
                    <div className={styles.time}>
                      {data.availability && data.availability.length > 0 ? (
                        data.availability.map((slot, idx) => (
                          <span key={idx}>
                            {slot.day}: {slot.from_time} - {slot.to_time}
                          </span>
                        ))
                      ) : (
                        <span>No availability set</span>
                      )}
                    </div>
                  </div>

                  <VirtualContainer data={data} />
                </>
              ) : (
                <>
                  <div className={styles.delivery}>
                    <div className={styles.timeline}>
                      <span>Delivery Timeline</span>
                      <label htmlFor=''>Within {data.delivery_timeline}</label>
                    </div>
                    <span>
                      ₦ {Number(data.project_pricing).toLocaleString()}
                    </span>
                  </div>
                </>
              )}
            </div>

            <QuickAction
              showPart={true}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              data={data}
              // Back={Back}
            />
          </div>
        </div>
      )}
    </>
  );
}
