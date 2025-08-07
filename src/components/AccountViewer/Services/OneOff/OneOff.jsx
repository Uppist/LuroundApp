/** @format */

// /** @format */

import styles from "../../../AccountOwner/Services/OneOff/OneoffService/OneOff.module.css";
import React, { useContext, useState } from "react";
import VirtualContainer from "../../../AccountOwner/Services/OneOff/OneoffService/VirtualContainer";
import { Link } from "react-router-dom";
import image from "../../../elements/gallery.png";

import { ServiceContext, userContext } from "../../../Context";

export default function OneOff() {
  const [userService, setUserService] = useContext(ServiceContext);

  console.log(userService);
  return (
    <>
      <div className={styles.oneoff2}>
        <div className={styles.dataoneoff2}>
          {Array.isArray(userService) && userService.length > 0 ? (
            <>
              {userService.map((data, index) => (
                <div className={styles.eachoneoffcontainer} key={index}>
                  <div
                    className={styles.OneOffcontainer}
                    key={userService.service_name}
                  >
                    <div className={styles.titlecontainer}>
                      <div className={styles.daystimeline}>
                        <div className={styles.daystime}>
                          <img src={data.image || image} alt='' />
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
                              {data.description}
                              {/* {userService.dots} */}
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
                                </div>{" "}
                              </Link>
                            </span>
                          </div>{" "}
                        </div>
                        <Link to='/booknow' state={{ data }}>
                          <div className={styles.book}>
                            <span>Book now</span>
                          </div>
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
            <span>No Services yet</span>
          )}
        </div>
      </div>
    </>
  );
}
