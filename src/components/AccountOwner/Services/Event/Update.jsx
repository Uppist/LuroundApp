/** @format */

import React from "react";
import event from "./event.json";
import styles2 from "../Retainer/Retainer.module.css";
import VirtualContainer from "../OneOff/OneoffService/VirtualContainer";

export default function Update({ openDetail }) {
  return (
    <div className={styles2.dataretainer}>
      {event.map((data, index) => (
        <div className={styles2.eacheventcontainer}>
          <div className={styles2.retainercontainer} key={data.Title}>
            <div className={styles2.titlecontainer}>
              <div className={styles2.daystimeline}>
                <div className={styles2.daystime}>
                  {/* <span>{data.firstday}</span>
                        <hr className='linedays' />
                        <span>{data.secondday}</span> */}
                  <img src={data.image} alt='' />
                </div>
                {/* <hr className='containerline' /> */}
              </div>
              <div className={styles2.personaltrainingdetails}>
                <div className={styles2.personaltraining}>
                  <div className={styles2.contenttype}>
                    <div>
                      <span className={styles2.personal}>{data.Title}</span>
                      {/* <div className='service-one'>
                              <span className='servicetype'>
                                {data.servicetype}
                              </span>
                              <span className='oneofftext'>{data.oneoff}</span>
                            </div> */}
                    </div>
                    <div className={styles2.textvector}>
                      <span className={styles2.text}>{data.text}</span>
                    </div>
                  </div>
                </div>
                <div
                  className={styles2.oneoffdetails}
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
            <div className={styles2.virtualinperson}>
              <hr />
              <VirtualContainer data={data} />
            </div>{" "}
          </div>
        </div>
      ))}
    </div>
  );
}
