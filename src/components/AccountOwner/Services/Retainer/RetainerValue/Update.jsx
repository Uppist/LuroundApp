/** @format */

import React, { useContext } from "react";
import styles from "../Retainer.module.css";
// import VirtualContainer from "../../../OneOff/OneoffService/VirtualContainer";
import { ServiceContext } from "../../../../Context";
import EmptyState from "../EmptyState";
import image from "../../../../elements/gallery.png";
import VirtualContainer from "../../OneOff/OneoffService/VirtualContainer";
import { Link } from "react-router-dom";

export default function Update({ isVisible, openDetail }) {
  const [userService, setUserService] = useContext(ServiceContext);

  return (
    <div className={styles.dataretainer}>
      {Array.isArray(userService) && userService.length > 0 ? (
        <>
          {" "}
          {userService.map((data, index) => (
            <div className={styles.eachretainercontainer}>
              <div className={styles.retainercontainer} key={data.Title}>
                <div className={styles.titlecontainer}>
                  <div className={styles.daystimeline}>
                    <div className={styles.daystime}>
                      <img src={data.image || image} alt='' />
                    </div>
                    {/* <hr className={styles.containerline} /> */}
                  </div>
                  <div className={styles.personaltrainingdetails}>
                    <div className={styles.personaltraining}>
                      <div className={styles.contenttype}>
                        <div className={styles.personalservice}>
                          <span className={styles.personal}>
                            {data.service_name}
                          </span>
                        </div>
                        <div className={styles.textvector}>
                          <span className={styles.text}>
                            {data.description}
                            {data.dots}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to='/retainer-details' state={{ data: data }}>
                      <div className={`${styles.oneoffdetails} ${isVisible}`}>
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
