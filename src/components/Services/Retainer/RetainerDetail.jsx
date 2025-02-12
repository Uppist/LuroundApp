/** @format */
import { useState } from "react";
// import styles from "./Retainer.module.css";

import Timebased from "../OneOff/TimeBased/TimeBased";
import Delete from "../OneOff/OneoffService/Delete";
import Retainer from "./Retainer";
import styles from "./Details.module.css";
import RetainerService from "./RetainerService";
import VirtualContainer from "../OneOff/OneoffService/VirtualContainer";
import QuickAction from "../OneOff/OneoffService/QuickAction";
export default function RetainerDetail({ dataretainer }) {
  const [isBack, setIsBack] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  function Back() {
    setIsBack(true);
  }

  function toggle() {
    setIsSuspended((prevState) => !prevState);
  }

  function EditDetail() {
    setIsEdit(true);
  }

  function DeleteOneoff() {
    setIsDelete(true);
  }

  return (
    <>
      {isEdit ? (
        <RetainerService />
      ) : isBack ? (
        <Retainer />
      ) : (
        <div className={styles.timebased}>
          <button className={styles.timeback} onClick={Back}>
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
              <img src={dataretainer.image} alt='' />
              <div className={styles.contenttype}>
                <div className={styles.personalservice}>
                  <span className={styles.personal}>{dataretainer.Title}</span>
                </div>
                <div className={styles.description}>
                  <span>About service</span>
                  <span className={`${styles.text} ${styles.text2}`}>
                    {dataretainer.text}
                    {dataretainer.text2}
                    {dataretainer.text3}
                  </span>
                </div>
                <div className={styles.overallvector}>
                  <div className={styles.vectordata}>
                    <div className={styles.vectorretainer}></div>
                    <span>{dataretainer.services1}</span>
                  </div>
                  <div className={styles.vectordata}>
                    <div className={styles.vectorretainer}></div>
                    <span>{dataretainer.services2}</span>
                  </div>
                  <div className={styles.vectordata}>
                    <div className={styles.vectorretainer}></div>
                    <span>{dataretainer.services3}</span>
                  </div>
                  <div className={styles.vectordata}>
                    <div className={styles.vectorretainer}></div>
                    <span>{dataretainer.services4}</span>
                  </div>
                </div>
              </div>

              <div className={styles.availability}>
                <label>Service schedule</label>
                <div className={styles.time}>
                  <span>{dataretainer.firstday}</span>
                  <span>{dataretainer.secondday}</span>
                </div>
              </div>

              <VirtualContainer data={dataretainer} />
            </div>
            <QuickAction dataValue={dataretainer} setIsEdit={setIsEdit} />
          </div>
        </div>
      )}
    </>
  );
}
