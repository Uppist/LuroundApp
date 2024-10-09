/** @format */

/** @format */
import { useState } from "react";
import Timebased from "../OneOff/TimeBased";
import Projectbased from "../OneOff/ProjectBased";
import RetainerService from "./RetainerService";

import RetainerDetail from "./RetainerDetail";
import retainer from "../../retainer.json";
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
          <div className='retainer'>
            <div className='retainerservice'>
              <div className='numberofservice'>
                <span className='one-offservice'>Retainers</span>
                <span className='number'>{retainer.length}</span>
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
            <div className='dataretainer'>
              {retainer.map((data, index) => (
                <div className='eachretainercontainer'>
                  <div className='retainercontainer' key={data.Title}>
                    <div className='days-time-line'>
                      <div className='days-time'>
                        <span>{data.firstday}</span>
                        <hr className='linedays' />
                        <span>{data.secondday}</span>
                        <hr className='linedays' />
                        <span>{data.thirdday}</span>
                      </div>
                      <hr className='containerline' />
                    </div>
                    <div className='personal-training-details'>
                      <div className='personal-training'>
                        <div className='content-type'>
                          <div className='personal-service'>
                            <span className='personal'>{data.Title}</span>
                            <div className='service-one'>
                              <span className='servicetype'>
                                {data.servicetype}
                              </span>
                              <span className='oneofftext'>{data.oneoff}</span>
                            </div>
                          </div>
                          <div className='textvector'>
                            <span className='text'>{data.text}</span>
                          </div>
                        </div>
                      </div>
                      <div
                        className='oneoff-details'
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
        </>
      ) : (
        <RetainerDetail dataretainer={retainer[isDetail]} />
      )}
    </>
  );
}
