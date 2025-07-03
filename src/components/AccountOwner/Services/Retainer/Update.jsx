/** @format */

import React from "react";
import retainer from "./retainer.json";
import styles from "./Retainer.module.css";
import VirtualContainer from "../OneOff/OneoffService/VirtualContainer";

export default function Update({ isVisible, openDetail }) {
  return (
    <div className='dataretainer'>
      {retainer.map((data, index) => (
        <div className={styles.eachretainercontainer}>
          <div className={styles.retainercontainer} key={data.Title}>
            <div className={styles.titlecontainer}>
              <div className={styles.daystimeline}>
                <div className={styles.daystime}>
                  <img src={data.image} alt='' />
                </div>
                {/* <hr className={styles.containerline} /> */}
              </div>
              <div className={styles.personaltrainingdetails}>
                <div className={styles.personaltraining}>
                  <div className={styles.contenttype}>
                    <div className={styles.personalservice}>
                      <span className={styles.personal}>{data.Title}</span>
                    </div>
                    <div className={styles.textvector}>
                      <span className={styles.text}>
                        {data.text}
                        {data.dots}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className={`${styles.oneoffdetails} ${isVisible}`}
                  onClick={() => openDetail(index)}
                >
                  <span>More details</span>
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M13.1666 7.81706L3.16663 7.81706'
                      stroke='#00CCCC'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                    <path
                      d='M9.13342 3.80083L13.1668 7.81683L9.13342 11.8335'
                      stroke='#00CCCC'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div className={styles.virtualinperson}>
              <hr />
              <VirtualContainer data={data} />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
