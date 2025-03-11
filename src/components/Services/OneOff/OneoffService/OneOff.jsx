/** @format */

// /** @format */

import styles from "./OneOff.module.css";
import Data from "./data.json";
import React, { useState } from "react";

import DetailOne from "./DetailService";
import Timebased from "../TimeBased/TimeBased";
import Projectbased from "../ProjectBased/ProjectBased";
import Create from "./CreateService";
import VirtualContainer from "./VirtualContainer";

export default function One({ backone }) {
  const [isDetail, setisDetail] = useState(null);
  const [isTimeBased, setIsTimeBased] = useState(false);
  const [isProjectBased, setIsProjectBased] = useState(false);
  const [isVisible, setVisible] = useState("fade-in");

  function TimeBased() {
    setIsTimeBased(true);
  }

  function ProjectBased() {
    setIsProjectBased(true);
  }

  function openDetail(index) {
    setVisible("fade-out");
    setTimeout(() => {
      setisDetail(index);
      setVisible("fade-in");
    }, 200);
  }

  return (
    <>
      {isProjectBased ? (
        <Projectbased backone={backone} />
      ) : isTimeBased ? (
        <Timebased />
      ) : isDetail === null ? (
        <div className={styles.oneoff}>
          <div className={styles.oneoffservice}>
            <div className={styles.numberofservice}>
              <span className={styles.oneoffservice}>One-off</span>
              <span className={styles.number}>4</span>
            </div>
            <div>
              <Create onTime={TimeBased} onProject={ProjectBased} />
            </div>
          </div>
          <div className={styles.dataoneoff}>
            {Data.map((data, index) => (
              <div className={styles.eachoneoffcontainer}>
                <div className={styles.OneOffcontainer} key={data.title}>
                  <div className={styles.titlecontainer}>
                    <div className={styles.daystimeline}>
                      <div className={styles.daystime}>
                        <img src={data.image} alt='' />
                      </div>
                    </div>
                    <div className={styles.personaltrainingdetails}>
                      <div className={styles.personaltraining}>
                        <div className={styles.contenttype}>
                          <div className={styles.personalservice}>
                            <span className={styles.personal}>
                              {data.Title}
                            </span>
                          </div>
                          <span className={styles.text}>
                            {data.text}
                            {data.dots}
                          </span>
                        </div>{" "}
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

                    <VirtualContainer data={data} index={index} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <DetailOne backonedetail={backone} dataValue={Data[isDetail]} />
      )}
    </>
  );
}
