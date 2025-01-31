/** @format */
import { useState } from "react";
import program from "./program.json";
import Timebased from "../OneOff/TimeBased/TimeBased";
import Projectbased from "../OneOff/ProjectBased/ProjectBased";
import RetainerService from "../Retainer/RetainerService";
import Create from "../CreateService";
import ProgramService from "../Program/ProgramService";
import EventService from "../Event/EventService";
import ProgramDetail from "./ProgramDetail";
import styles from "./Program.module.css";
import styles2 from "../Retainer/Retainer.module.css";
import VirtualContainer from "../OneOff/OneoffService/VirtualContainer";
export default function Program() {
  const [isTimeBased, setIsTimeBased] = useState(false);
  const [isDetail, setisDetail] = useState(null);

  const [isProjectBased, setIsProjectBased] = useState(false);
  const [isRetainer, setIsRetainer] = useState(false);
  const [isProgram, setIsProgram] = useState(false);
  const [isEvent, setIsEvent] = useState(false);
  const [selectRadio, setSelectRadio] = useState({});
  function radioChange(index, type) {
    setSelectRadio((prevState) => ({
      ...prevState,
      [index]: type,
    }));
  }
  function openDetail(index) {
    setisDetail(index);
  }
  function TimeBased() {
    setIsTimeBased(true);
  }

  function ProjectBased() {
    setIsProjectBased(true);
  }

  function RetainerContainer() {
    setIsRetainer(true);
  }

  function ProgramContainer() {
    setIsProgram(true);
  }

  function EventContainer() {
    setIsEvent(true);
  }
  return (
    <>
      {isEvent ? (
        <EventService />
      ) : isProgram ? (
        <ProgramService />
      ) : isRetainer ? (
        <RetainerService />
      ) : isProjectBased ? (
        <Projectbased />
      ) : isTimeBased ? (
        <Timebased />
      ) : isDetail === null ? (
        <div className={styles.program}>
          <div className={styles.retainerservice}>
            <div className={styles.numberofservice}>
              <span className={styles.oneoffservice}>Program</span>
              <span className={styles.number}>{program.length}</span>
            </div>
            <div className='add-service'>
              <Create
                onTime={TimeBased}
                onProject={ProjectBased}
                onRetainer={RetainerContainer}
                onProgram={ProgramContainer}
                onEvent={EventContainer}
              />
            </div>
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
                        className={styles2.oneoffdetails}
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
