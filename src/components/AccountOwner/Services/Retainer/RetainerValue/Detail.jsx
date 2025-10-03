/** @format */
import { useState } from "react";
// import styles from "./Retainer.module.css";

import Retainer from "../Retainer";
import styles from "../Details.module.css";
// import VirtualContainer from "../OneOff/OneoffService/VirtualContainer";
import QuickAction from "../../OneOff/OneoffService/QuickAction";
import VirtualContainer from "../../OneOff/OneoffService/VirtualContainer";
import image from "../../../../elements/gallery.png";

import { Link, useLocation } from "react-router-dom";
export default function RetainerDetail({}) {
  const [isBack, setIsBack] = useState(false);
  const [isSuspended, setIsSuspended] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  const location = useLocation();

  const { data } = location.state || {};

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
          <Link to={-1}>
            <button className={styles.timeback}>
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
                  </span>
                </div>
                <div className={styles.overallvector}>
                  {data.core_features?.map((core) => (
                    <div className={styles.vectordata}>
                      <div className={styles.vectorretainer}></div>
                      <span>{core}</span>
                    </div>
                  ))}{" "}
                </div>
              </div>

              <div className={styles.availability}>
                <label>Service schedule</label>
                <div className={styles.time}>
                  {data.availability?.map((item, index) => (
                    <span key={index}>
                      {item.day}: {item.from_time}-{item.to_time}
                    </span>
                  ))}
                </div>
              </div>

              <VirtualContainer data={data} />
            </div>
            <QuickAction data={data} setIsEdit={setIsEdit} />
          </div>
        </div>
      )}
    </>
  );
}
