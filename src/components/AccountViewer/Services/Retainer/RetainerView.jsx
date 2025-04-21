/** @format */

/** @format */
import { useState } from "react";

import styles from "../../../Services/Retainer/Retainer.module.css";
import retainer from "../../../Services/Retainer/retainer.json";

import VirtualContainer from "../../../Services/OneOff/OneoffService/VirtualContainer";
import Layout from "../../Layout";
import { Link } from "react-router-dom";
export default function RetainerView() {
  //   function openDetail(index) {
  //     setVisible("fade-out");
  //     setTimeout(() => {
  //       setisDetail(index);
  //       setVisible("fade-in");
  //     }, 200);
  //   }

  //   function openService() {
  //     setisService(true);
  //   }

  return (
    <div className={styles.retainer2}>
      <div className={styles.dataretainer2}>
        {retainer.map((data, index) => (
          <div className={styles.eachretainercontainer} key={index}>
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
                          <Link to='/details' state={{ data }}>
                            <div className={styles.oneoffdetails}>
                              <span>see more</span>
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
                          </Link>
                        </span>
                      </div>
                    </div>
                  </div>
                  <Link to='/booknow' state={{ data }}>
                    <div className={styles.book}>
                      <span>Book now</span>
                    </div>
                  </Link>
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
    </div>
  );
}
