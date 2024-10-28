/** @format */

// /** @format */

import Data from "../../data.json";
import React, { useState } from "react";

import DetailOne from "./DetailService";
import Timebased from "../OneOff/TimeBased";
import Projectbased from "../OneOff/ProjectBased";
import RetainerService from "../Retainer/RetainerService";
import Create from "../CreateService";

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
        <div className='oneoff'>
          <div className='oneoffservice'>
            <div className='numberofservice'>
              <span className='one-offservice'>One-off Services</span>
              <span className='number'>4</span>
            </div>
            <div>
              <Create
                onTime={TimeBased}
                onProject={ProjectBased}
                onRetainer={RetainerContainer}
              />
            </div>
          </div>
          <div className='dataoneoff'>
            {Data.map((data, index) => (
              <div className='eachoneoffcontainer'>
                <div className='OneOffcontainer' key={data.title}>
                  <div className='titlecontainer'>
                    <div className='days-time-line'>
                      <div className='days-time'>
                        <span>{data.firstday}</span>
                        <hr className='linedays' />
                        <span>{data.secondday}</span>
                      </div>
                      <hr className='containerline' />
                    </div>
                    <div className='personal-training-details'>
                      <div className='personal-training '>
                        <div className='content-type'>
                          <div className='personal-service'>
                            <span className='personal'>{data.Title}</span>
                            <div className='service-one'>
                              <span className='servicetype'>
                                {data.servicetype}
                              </span>
                              <span className='oneofftext'>{data.oneoff}</span>
                              <label
                                dangerouslySetInnerHTML={{
                                  __html: data.svg,
                                }}
                              ></label>
                            </div>
                          </div>
                          <span className='text'>
                            {data.text}
                            {data.dots}
                          </span>
                        </div>{" "}
                      </div>
                      <div
                        className={`oneoff-details ${isVisible}`}
                        onClick={() => openDetail(index)}
                      >
                        <span>Details</span>
                        <svg
                          width='7'
                          height='12'
                          viewBox='0 0 7 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            d='M1 11L6 6L1 1'
                            stroke='currentColor'
                            strokeOpacity='0.8'
                            strokeWidth='1.5'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='virtual-inperson '>
                  <div
                    className={`price-session  ${
                      selectRadio[index] === "virtual"
                        ? "virtual-bg"
                        : selectRadio[index] === "in-person"
                        ? "in-person-bg"
                        : ""
                    }`}
                  >
                    <div className='radio-virtual'>
                      <div className='virtual'>
                        <input
                          type='radio'
                          name='radio'
                          onChange={() => radioChange(index, "virtual")}
                        />
                        <span>Virtual</span>
                      </div>
                      <div className='in-person'>
                        <input
                          type='radio'
                          name='radio'
                          onChange={() => radioChange(index, "in-person")}
                        />
                        <span>In-person</span>
                      </div>
                    </div>
                    <div className='pricing-amount'>
                      <div className='pricing'>
                        <span>{data.pricing}</span>
                        <div className='mins-arrow'>
                          <div className='dropdown'>
                            <div
                              className={`select-list ${
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
                              <ul className='menu'>
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
                      <div className='naira-session'>
                        <span className='naira'>{data.amount}</span>
                        <span className='session'>{data.session}</span>
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
