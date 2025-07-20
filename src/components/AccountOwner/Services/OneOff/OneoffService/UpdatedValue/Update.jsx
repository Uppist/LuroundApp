/** @format */

import React, { useContext } from "react";
import Data from "../data.json";
import VirtualContainer from "../VirtualContainer";
import styles from "../OneOff.module.css";
import image from "../../../../../elements/gallery.png";

import { userContext } from "../../../../../Context";
import EmptyState from "../EmptyState";
import { Link } from "react-router-dom";

export default function Update({ handleClick, isVisible, openDetail }) {
  const [userData, setUserData, userService, setUserService] =
    useContext(userContext);

  console.log(userService);

  return (
    <div className={styles.dataoneoff}>
      {Array.isArray(userService) && userService.length > 0 ? (
        <>
          {userService.map((data, index) => (
            // console.log(data, index);

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
                          {data.description}
                          {data.dots}
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
                  <hr />

                  <VirtualContainer data={data} index={index} />
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
