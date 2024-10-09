/** @format */
import { useState } from "react";
import program from "../../program.json";
import Timebased from "../OneOff/TimeBased";
import Projectbased from "../OneOff/ProjectBased";
import RetainerService from "../Retainer/RetainerService";
import Create from "../CreateService";
import ProgramService from "../Program/ProgramService";
import EventService from "../Event/EventService";
import ProgramDetail from "./ProgramDetail";
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
        <div className='program'>
          <div className='retainerservice'>
            <div className='numberofservice'>
              <span className='one-offservice'>Program</span>
              <span className='number'>{program.length}</span>
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
            {program.map((data, index) => (
              <div className='eachprogramcontainer'>
                <div className='retainercontainer' key={data.title}>
                  <div className='days-time-line'>
                    <div className='days-time'>
                      <span>{data.firstday}</span>
                      <hr className='linedays' />
                      <span>{data.secondday}</span>
                    </div>
                    <hr className='containerline' />
                  </div>
                  <div className='personal-training-details'>
                    <div className='personal-training gap-program'>
                      <div className='content-type1'>
                        <div className='personal-service'>
                          <span className='personal'>{data.Title}</span>
                          <div className='service-one'>
                            <span className='servicetype'>
                              {data.servicetype}
                            </span>
                            <span className='oneofftext'>{data.oneoff}</span>
                          </div>
                        </div>
                        <div className='textvector1'>
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
        <ProgramDetail dataprogram={program[isDetail]} />
      )}
    </>
  );
}
