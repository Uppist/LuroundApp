/** @format */
import Create from "../OneOff/OneoffService/CreateService";
import { useState } from "react";
import event from "./event.json";
import Timebased from "../OneOff/TimeBased/TimeBased";
import Projectbased from "../OneOff/ProjectBased/ProjectBased";
import RetainerService from "../Retainer/RetainerService";
import ProgramService from "../Program/ProgramService";
import EventService from "./EventService";
import EventDetail from "./EventDetail";
import styles from "./Event.module.css";
import styles2 from "../Retainer/Retainer.module.css";
import VirtualContainer from "../OneOff/OneoffService/VirtualContainer";
export default function Event() {
  const [isDetail, setisDetail] = useState(null);
  const [isService, setIsService] = useState(false);

  function openDetail(index) {
    setisDetail(index);
  }

  function openService() {
    setIsService(true);
  }

  function closeService() {
    setIsService(false);
  }
  return (
    <>
      {isService ? (
        <EventService closeService={closeService} />
      ) : isDetail === null ? (
        <div className={styles.event}>
          <div className={styles2.retainerservice}>
            <div className={styles2.numberofservice}>
              <span className={styles2.oneoffservice}>Event</span>
              <span className={styles2.number}>{event.length}</span>
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
            </div>
          </div>
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
                            <span className={styles2.personal}>
                              {data.Title}
                            </span>
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
        </div>
      ) : (
        <EventDetail dataevent={event[isDetail]} />
      )}
    </>
  );
}
