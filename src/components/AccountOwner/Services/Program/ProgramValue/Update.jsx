/** @format */

import React, { useContext } from "react";
import styles2 from "../../Retainer/Retainer.module.css";
import styles from "../Program.module.css";
// import program from "../program.json";
import image from "../../../../elements/gallery.png";

import VirtualContainer from "../../OneOff/OneoffService/VirtualContainer";
import { ServiceContext } from "../../../../Context";
import { Link } from "react-router-dom";
import EmptyState from "../EmptyState";

export default function Update({ isVisible, openDetail }) {
  const [userService, setUserService] = useContext(ServiceContext);

  return (
    <div>
      {Array.isArray(userService) && userService.length > 0 ? (
        <>
          {userService.map((data, index) => (
            <div className={styles.eachprogramcontainer} key={index}>
              <div className={styles.retainercontainer} key={data.service_name}>
                <div className={styles2.titlecontainer}>
                  <div className={styles2.daystimeline}>
                    <div className={styles2.daystime}>
                      {/* <span>{data.firstday}</span>
                        <hr className={styles2.linedays} />
                        <span>{data.secondday}</span> */}
                      <img src={data.image || image} alt='' />
                    </div>
                    {/* <hr className={styles2.containerline} /> */}
                  </div>
                  <div className={styles2.personaltrainingdetails}>
                    <div className={styles2.personaltraining}>
                      <div className={styles.contenttype}>
                        <div className='personal-service'>
                          <span className={styles2.personal}>
                            {data.service_name}
                          </span>
                          {/* <div className='service-one'>
                              <span className={styles2.servicetype}>
                                {data.servicetype}
                              </span>
                              <span className={styles2.oneofftext}>
                                {data.oneoff}
                              </span>
                            </div> */}
                        </div>
                        <div className={styles2.textvector}>
                          <span className={styles2.text}>
                            {data.description.slice(0, 50)}
                            {data.description.length > 50 ? "..." : ""}{" "}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to='/program-details' state={{ data: data }}>
                      <div className={`${styles2.oneoffdetails} ${isVisible}`}>
                        <span> More details</span>
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
                <div className={styles2.virtualinperson}>
                  <hr />
                  <VirtualContainer data={data} />
                </div>{" "}
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
