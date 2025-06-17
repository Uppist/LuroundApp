/** @format */

import { useState } from "react";
import styles from "./DetailService.module.css";
import Timebased from "../TimeBased/TimeBased";
import VirtualContainer from "./VirtualContainer";
import QuickAction from "./QuickAction";
export default function DetailOne({ dataValue, handleClick }) {
  const [isEdit, setIsEdit] = useState(false);

  return (
    <>
      {isEdit ? (
        <Timebased />
      ) : (
        <div className={styles.timebasedcontainer}>
          <button className={styles.timebasedback} onClick={handleClick}>
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

          <div className={styles.moredetails}>
            <div className={styles.morecontainer}>
              <img src={dataValue.image} alt='' />
              <div className={styles.contenttype}>
                <div className={styles.personalservice}>
                  <span className={styles.personal}>{dataValue.Title}</span>
                </div>
                <div className={styles.description}>
                  <span>About service</span>
                  <span className={`${styles.text} ${styles.text2}`}>
                    {dataValue.text}
                    {dataValue.text2}
                  </span>
                </div>
              </div>

              <div className={styles.availability}>
                <label>Service schedule</label>
                <div className={styles.time}>
                  <span>{dataValue.firstday}</span>
                  <span>{dataValue.secondday}</span>
                </div>
              </div>

              <VirtualContainer data={dataValue} />
            </div>

            <QuickAction
              showPart={true}
              isEdit={isEdit}
              setIsEdit={setIsEdit}
              dataValue={dataValue}
              // Back={Back}
            />
          </div>
        </div>
      )}
    </>
  );
}
