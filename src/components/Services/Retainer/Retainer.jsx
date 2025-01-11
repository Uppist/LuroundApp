/** @format */

/** @format */
import { useState } from "react";
import Timebased from "../OneOff/TimeBased/TimeBased";
import Projectbased from "../OneOff/ProjectBased/ProjectBased";
import RetainerService from "./RetainerService";
import styles from "./Retainer.module.css";
import RetainerDetail from "./RetainerDetail";
import retainer from "./retainer.json";
import Create from "../CreateService";
import ProgramService from "../Program/ProgramService";
import EventService from "../Event/EventService";
export default function Retainer() {
  const [isTimeBased, setIsTimeBased] = useState(false);
  const [isProjectBased, setIsProjectBased] = useState(false);
  const [isRetainer, setIsRetainer] = useState(false);
  const [isProgram, setIsProgram] = useState(false);
  const [selectRadio, setSelectRadio] = useState({});
  const [isDetail, setisDetail] = useState(null);

  const [isEvent, setIsEvent] = useState(false);
  const [isOpen, setIsOpen] = useState({});

  const [selectedOption, setSelectedOption] = useState({});
  const [options] = useState([
    "3 months",
    "6 months",
    "12 months",
    "24 months",
  ]);

  function radioChange(index, type) {
    setSelectRadio((prevState) => ({
      ...prevState,
      [index]: type,
    }));
  }

  function dropDown(index) {
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  function handleDropdown(index, option) {
    setSelectedOption((prevState) => ({
      ...prevState,
      [index]: option,
    }));
    setIsOpen((prevState) => ({
      ...prevState,
      [index]: false,
    }));
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

  function openDetail(index) {
    setisDetail(index);
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
        <>
          <div className={styles.retainer}>
            <div className={styles.retainerservice}>
              <div className={styles.numberofservice}>
                <span className={styles.oneoffservice}>Retainers</span>
                <span className={styles.number}>{retainer.length}</span>
              </div>
              <div>
                <Create
                  onTime={TimeBased}
                  onProject={ProjectBased}
                  onRetainer={RetainerContainer}
                  onProgram={ProgramContainer}
                  onEvent={EventContainer}
                />
              </div>
            </div>
            <div className='dataretainer'>
              {retainer.map((data, index) => (
                <div className={styles.eachretainercontainer}>
                  <div className={styles.retainercontainer} key={data.Title}>
                    <div className={styles.titlecontainer}>
                      <div className={styles.daystimeline}>
                        <div className={styles.daystime}>
                          {/* <span>{data.firstday}</span>
                        <hr className={styles.linedays} />
                        <span>{data.secondday}</span>
                        <hr className={styles.linedays} />
                        <span>{data.thirdday}</span> */}
                          <img src={data.image} alt='' />
                        </div>
                        {/* <hr className={styles.containerline} /> */}
                      </div>
                      <div className={styles.personaltrainingdetails}>
                        <div className={styles.personaltraining}>
                          <div className={styles.contenttype}>
                            <div className={styles.personalservice}>
                              <span className={styles.personal}>
                                {data.Title}
                              </span>
                              {/* <div className={styles.serviceone}>
                              <span className={styles.servicetype}>
                                {data.servicetype}
                              </span>
                              <span className={styles.oneofftext}>
                                {data.oneoff}
                              </span>
                            </div> */}
                            </div>
                            <div className={styles.textvector}>
                              <span className={styles.text}>
                                {data.text}
                                {data.dots}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div
                          className={styles.oneoffdetails}
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
                    <div className={styles.virtualinperson}>
                      <hr />
                      <div
                        className={`${styles.pricesession}  ${
                          selectRadio[index] === "virtual"
                            ? `${styles.virtualbg}`
                            : selectRadio[index] === "in-person"
                            ? `${styles.inpersonbg}`
                            : ""
                        }`}
                      >
                        <div className={styles.radiovirtual}>
                          <div className={styles.virtual}>
                            <input
                              type='radio'
                              name='radio'
                              onChange={() => radioChange(index, "virtual")}
                            />
                            <span>Virtual</span>
                          </div>
                          <div className={styles.inperson}>
                            <input
                              type='radio'
                              name='radio'
                              onChange={() => radioChange(index, "in-person")}
                            />
                            <span>In-person</span>
                          </div>
                        </div>
                        <div className={styles.pricingamount}>
                          <div className={styles.pricing}>
                            <span>{data.pricing}</span>
                            <div className={styles.minsarrow}>
                              <div className={styles.dropdown}>
                                <div
                                  className={`${styles.selectlist} ${
                                    isOpen[index] ? "select-clicked" : ""
                                  }`}
                                  onClick={() => dropDown(index)}
                                >
                                  <span className='selected-list'>
                                    {selectedOption[index] || "3 months"}{" "}
                                  </span>
                                  <svg
                                    width='16'
                                    height='16'
                                    viewBox='0 0 16 16'
                                    fill='none'
                                    xmlns='http://www.w3.org/2000/svg'
                                  >
                                    <path
                                      d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                                      stroke='currentColor'
                                      strokeOpacity='0.8'
                                      strokeMiterlimit='10'
                                      strokeLinecap='round'
                                      strokeLinejoin='round'
                                    />
                                  </svg>
                                </div>
                                {isOpen[index] && (
                                  <ul className={styles.menu}>
                                    {options.map((option) => (
                                      <li
                                        key={option}
                                        className={`menu-item ${
                                          selectedOption[index] === option
                                            ? "active"
                                            : ""
                                        }`}
                                        onClick={() =>
                                          handleDropdown(index, option)
                                        }
                                      >
                                        {option}
                                      </li>
                                    ))}
                                  </ul>
                                )}
                              </div>
                            </div>
                          </div>
                          <div className={styles.nairasession}>
                            <span className={styles.naira}>{data.amount}</span>
                            {/* <span className={styles.session}>
                              {data.session}
                            </span> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </>
      ) : (
        <RetainerDetail dataretainer={retainer[isDetail]} />
      )}
    </>
  );
}
