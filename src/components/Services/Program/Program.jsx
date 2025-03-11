/** @format */
import { useState } from "react";
import program from "./program.json";
import Timebased from "../OneOff/TimeBased/TimeBased";
import Projectbased from "../OneOff/ProjectBased/ProjectBased";
import RetainerService from "../Retainer/RetainerService";
// import Create from "../CreateService";
import ProgramService from "../Program/ProgramService";
import EventService from "../Event/EventService";
import ProgramDetail from "./ProgramDetail";
import styles from "./Program.module.css";
import styles2 from "../Retainer/Retainer.module.css";
import VirtualContainer from "../OneOff/OneoffService/VirtualContainer";
export default function Program() {
  const [isDetail, setisDetail] = useState(null);
  const [isVisible, setVisible] = useState("fade-in");

  const [isService, setIsService] = useState(false);

  function openDetail(index) {
    setVisible("fade-out");
    setTimeout(() => {
      setisDetail(index);
      setVisible("fade-in");
    }, 200);
  }

  function openService() {
    setVisible("fade-out");
    setTimeout(() => {
      setIsService(true);
      setVisible("fade-in");
    }, 200);
  }

  return (
    <>
      {isService ? (
        <ProgramService />
      ) : isDetail === null ? (
        <div className={styles.program}>
          <div className={styles.retainerservice}>
            <div className={styles.numberofservice}>
              <span className={styles.oneoffservice}>Program</span>
              <span className={styles.number}>{program.length}</span>
            </div>
            <div>
              <button onClick={openService} className={styles2.addservice}>
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
            </div>{" "}
          </div>
          <div>
            {program.map((data, index) => (
              <div className={styles.eachprogramcontainer}>
                <div className={styles.retainercontainer} key={data.title}>
                  <div className={styles2.titlecontainer}>
                    <div className={styles2.daystimeline}>
                      <div className={styles2.daystime}>
                        {/* <span>{data.firstday}</span>
                        <hr className={styles2.linedays} />
                        <span>{data.secondday}</span> */}
                        <img src={data.image} alt='' />
                      </div>
                      {/* <hr className={styles2.containerline} /> */}
                    </div>
                    <div className={styles2.personaltrainingdetails}>
                      <div className={styles2.personaltraining}>
                        <div className={styles.contenttype}>
                          <div className='personal-service'>
                            <span className={styles2.personal}>
                              {data.Title}
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
                              {data.text}
                              {data.dots}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div
                        className={`${styles2.oneoffdetails} ${isVisible}`}
                        onClick={() => openDetail(index)}
                      >
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
        </div>
      ) : (
        <ProgramDetail dataprogram={program[isDetail]} />
      )}
    </>
  );
}
