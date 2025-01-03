/** @format */

// /** @format */

import styles from "./OneOff.module.css";
import Data from "./data.json";
import React, { useState } from "react";

import DetailOne from "./DetailService";
import Timebased from "../TimeBased/TimeBased";
import Projectbased from "../ProjectBased/ProjectBased";
import RetainerService from "../../Retainer/RetainerService";
import Create from "../../CreateService";

export default function One({ backone }) {
  const [isDetail, setisDetail] = useState(null);
  const [selectRadio, setSelectRadio] = useState({});
  const [isTimeBased, setIsTimeBased] = useState(false);
  const [isProjectBased, setIsProjectBased] = useState(false);
  const [isRetainer, setIsRetainer] = useState(false);
  const [isVisible, setVisible] = useState("fade-in");

  const [isOpen, setIsOpen] = useState({});
  const [selectedOption, setSelectedOption] = useState({});
  const [options] = useState([
    "15 mins",
    "30 mins",
    "45 mins",
    "60 mins",
    "90 mins",
    "120 mins",
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

  function openDetail(index) {
    setVisible("fade-out");
    setTimeout(() => {
      setisDetail(index);
      setVisible("fade-in");
    }, 200);
  }

  function RetainerContainer() {
    setIsRetainer(true);
  }

  return (
    <>
      {isRetainer ? (
        <RetainerService />
      ) : isProjectBased ? (
        <Projectbased backone={backone} />
      ) : isTimeBased ? (
        <Timebased />
      ) : isDetail === null ? (
        <div className={styles.oneoff}>
          <div className={styles.oneoffservice}>
            <div className={styles.numberofservice}>
              <span className={styles.oneoffservice}>One-off</span>
              <span className={styles.number}>4</span>
            </div>
            <div>
              <Create
                onTime={TimeBased}
                onProject={ProjectBased}
                onRetainer={RetainerContainer}
              />
            </div>
          </div>
          <div className={styles.dataoneoff}>
            {Data.map((data, index) => (
              <div className={styles.eachoneoffcontainer}>
                <div className={styles.OneOffcontainer} key={data.title}>
                  <div className={styles.titlecontainer}>
                    <div className={styles.daystimeline}>
                      <div className={styles.daystime}>
                        <img src={data.image} alt='' />
                      </div>
                    </div>
                    <div className={styles.personaltrainingdetails}>
                      <div className={styles.personaltraining}>
                        <div className={styles.contenttype}>
                          <div className={styles.personalservice}>
                            <span className={styles.personal}>
                              {data.Title}
                            </span>
                          </div>
                          <span className={styles.text}>
                            {data.text}
                            {data.dots}
                          </span>
                        </div>{" "}
                      </div>
                      <div
                        className={`${styles.oneoffdetails} ${isVisible}`}
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
                          ? "virtualbg"
                          : selectRadio[index] === "in-person"
                          ? "inpersonbg"
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
                                  {selectedOption[index] || "15 mins"}{" "}
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
                          <span className={styles.session}>{data.session}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <DetailOne backonedetail={backone} dataValue={Data[isDetail]} />
      )}
    </>
  );
}
