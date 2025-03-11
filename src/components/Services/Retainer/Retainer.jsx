/** @format */

/** @format */
import { useState } from "react";

import styles from "./Retainer.module.css";
import RetainerDetail from "./RetainerDetail";
import retainer from "./retainer.json";

import VirtualContainer from "../OneOff/OneoffService/VirtualContainer";
import RetainerService from "./RetainerService";
export default function Retainer() {
  const [isDetail, setisDetail] = useState(null);
  const [isService, setisService] = useState(null);
  const [isVisible, setVisible] = useState("fade-in");

  function openDetail(index) {
    setVisible("fade-out");
    setTimeout(() => {
      setisDetail(index);
      setVisible("fade-in");
    }, 200);
  }

  function openService() {
    setisService(true);
  }

  return (
    <>
      {isService ? (
        <RetainerService />
      ) : isDetail === null ? (
        <div className={styles.retainer}>
          <div className={styles.retainerservice}>
            <div className={styles.numberofservice}>
              <span className={styles.oneoffservice}>Retainers</span>
              <span className={styles.number}>{retainer.length}</span>
            </div>
            <div>
              <button onClick={openService} className={styles.addservice}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.7755 20.5714V13.2245H3.42859V10.7755H10.7755V3.42859H13.2245V10.7755H20.5714V13.2245H13.2245V20.5714H10.7755Z'
                    fill='#FFFFFF'
                  />
                </svg>
                <span>Create</span>
              </button>
            </div>
          </div>
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
                            <span className={styles.personal}>
                              {data.Title}
                            </span>
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
        </div>
      ) : (
        <RetainerDetail dataretainer={retainer[isDetail]} />
      )}
    </>
  );
}
