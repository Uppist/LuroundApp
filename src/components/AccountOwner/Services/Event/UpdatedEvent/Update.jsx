/** @format */

import React, { useContext } from "react";
import styles2 from "../../Retainer/Retainer.module.css";
import styles from "./style.module.css";

import { ServiceContext } from "../../../../Context";
import image from "../../../../elements/gallery.png";
import Container from "./Container";
import { Link } from "react-router-dom";

export default function Update() {
  const [userService, setUserService] = useContext(ServiceContext);

  return (
    <div className={styles2.dataretainer}>
      {Array.isArray(userService) && userService.length > 0 ? (
        <>
          {userService.map((data, index) => (
            <div className={styles2.eacheventcontainer}>
              <div
                className={styles2.retainercontainer}
                key={data.service_name}
              >
                <div className={styles2.titlecontainer}>
                  <div className={styles2.daystimeline}>
                    <div className={styles2.daystime}>
                      {/* <span>{data.firstday}</span>
                        <hr className='linedays' />
                        <span>{data.secondday}</span> */}
                      <img src={data.image || image} alt='' />
                    </div>
                    {/* <hr className='containerline' /> */}
                  </div>
                  <div className={styles2.personaltrainingdetails}>
                    <div className={styles2.personaltraining}>
                      <div className={styles2.contenttype}>
                        <div>
                          <span className={styles2.personal}>
                            {data.service_name}
                          </span>
                          {/* <div className='service-one'>
                              <span className='servicetype'>
                                {data.servicetype}
                              </span>
                              <span className='oneofftext'>{data.oneoff}</span>
                            </div> */}
                        </div>
                        <div className={styles2.textvector}>
                          <span className={styles2.text}>
                            {data.description.length > 50
                              ? data.description.slice(0, 50) + "..."
                              : data.description}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Link to='/event-details' state={{ data: data }}>
                      <div className={styles2.oneoffdetails}>
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
                  <Container data={data} />
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
