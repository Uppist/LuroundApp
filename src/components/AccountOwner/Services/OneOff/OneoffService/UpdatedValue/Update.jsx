/** @format */

import React, { useContext } from "react";
import VirtualContainer from "../VirtualContainer";
import styles from "../OneOff.module.css";
import image from "../../../../../elements/gallery.png";

import { ServiceContext } from "../../../../../Context";
import EmptyState from "../EmptyState";
import { Link } from "react-router-dom";

export default function Update({ isVisible }) {
  const [userService, setUserService] = useContext(ServiceContext);

  return (
    <div className={styles.dataoneoff}>
      {Array.isArray(userService) && userService.length > 0 ? (
        <>
          {userService.map((data, index) => (
            <div className={styles.eachoneoffcontainer}>
              <div className={styles.OneOffcontainer} key={data.title}>
                <div className={styles.titlecontainer}>
                  <div className={styles.daystimeline}>
                    <div className={styles.daystime}>
                      <img src={data.imageUrl || image} alt='' />
                    </div>
                  </div>
                  <div className={styles.personaltrainingdetails}>
                    <div className={styles.personaltraining}>
                      <div className={styles.contenttype}>
                        <div className={styles.personalservice}>
                          <span className={styles.personal}>
                            {data.service_name}
                          </span>
                        </div>
                        <span className={styles.text}>
                          {data.description.slice(0, 50)}
                          {data.description.length > 50 ? "..." : ""}
                        </span>
                      </div>{" "}
                    </div>

                    <Link to='/one-off-details' state={{ data: data }}>
                      <div
                        className={`${styles.oneoffdetails} ${isVisible}`}
                        // onClick={() => openDetail(index)}
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
                      </div>{" "}
                    </Link>
                  </div>
                </div>
                <div className={styles.virtualinperson}>
                  {data.one_off_type === "time-based" ? (
                    <>
                      {" "}
                      <hr />
                      <VirtualContainer data={data} index={index} />
                    </>
                  ) : (
                    <>
                      <hr />

                      <div className={styles.delivery}>
                        <div className={styles.timeline}>
                          <span>Delivery Timeline</span>
                          <label htmlFor=''>
                            Within {data.delivery_timeline}
                          </label>
                        </div>
                        <span>
                          ₦ {Number(data.project_pricing).toLocaleString()}
                        </span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </>
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
