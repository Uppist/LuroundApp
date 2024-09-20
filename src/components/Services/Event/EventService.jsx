/** @format */
import { useState } from "react";
import Event from "../Event/Event";
export default function EventService() {
  const [isBack, setIsBack] = useState(false);
  const [isNext, setIsNext] = useState(false);

  const [IsAddTime, setIsAddTime] = useState([]);

  function BackOneOff() {
    setIsBack(true);
  }

  function Next() {
    setIsNext(true);
  }

  function backEvent() {
    setIsNext(false);
  }
  return (
    <>
      {isBack ? (
        <Event />
      ) : (
        <div className='time-based-container'>
          <button className='time-based-back' onClick={BackOneOff}>
            <svg
              width='7'
              height='12'
              viewBox='0 0 7 12'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6 1L1 6L6 11'
                stroke='#1D2E2E'
                strokeWidth='1.5'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>

            <span>Back</span>
          </button>

          {isNext ? (
            <div className='create-event-service'>
              <div className='create-time-based'>
                <button
                  className='create-time-service backEvent'
                  onClick={backEvent}
                >
                  <svg
                    width='7'
                    height='12'
                    viewBox='0 0 7 12'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M6 1L1 6L6 11'
                      stroke='currentColor'
                      strokeWidth='1.5'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                  <span>Create an Event</span>
                </button>

                <div className='time-service'>
                  <span>Event schedule</span>
                  <div className='time-container'>
                    <div className='start-end-time'>
                      <span>Start time</span>
                      <span>End time</span>
                    </div>
                    <div className='day-checked-container'>
                      <div className='input-time-container days-selection'>
                        <div className='naira-virtual'>
                          <input type='date' />{" "}
                        </div>

                        <div className='naira-virtual-inperson time-selection'>
                          <div className='naira-virtual'>
                            <input />
                          </div>

                          <div className='naira-inperson'>
                            <input />
                          </div>
                        </div>

                        <div>
                          <button className='add-time-button'>
                            <svg
                              width='20'
                              height='20'
                              viewBox='0 0 20 20'
                              fill='none'
                              xmlns='http://www.w3.org/2000/svg'
                            >
                              <path
                                d='M10 0C4.4868 0 0 4.4868 0 10C0 15.5132 4.4868 20 10 20C15.5132 20 20 15.5132 20 10C20 4.4868 15.5132 0 10 0ZM10 18.5924C5.27859 18.5924 1.40763 14.7507 1.40763 10C1.40763 5.24927 5.24927 1.40763 10 1.40763C14.7214 1.40763 18.5924 5.24927 18.5924 10C18.5924 14.7507 14.7214 18.5924 10 18.5924Z'
                                fill='#1D2E2E'
                              />
                              <path
                                d='M14.6039 9.2086H10.7036V5.3083C10.7036 4.92707 10.381 4.60449 9.99981 4.60449C9.61858 4.60449 9.296 4.92707 9.296 5.3083V9.2086H5.39571C5.01447 9.2086 4.69189 9.53118 4.69189 9.91241C4.69189 10.2936 5.01447 10.6162 5.39571 10.6162H9.296V14.5165C9.296 14.8977 9.61858 15.2203 9.99981 15.2203C10.381 15.2203 10.7036 14.8977 10.7036 14.5165V10.6162H14.6039C14.9851 10.6162 15.3077 10.2936 15.3077 9.91241C15.3077 9.53118 14.9851 9.2086 14.6039 9.2086Z'
                                fill='#1D2E2E'
                              />
                            </svg>

                            <span>Add multiple dates</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                </div>

                <div className='event-type'>
                  <span>Price model</span>
                  <div className='event-checkbox'>
                    <div className='check-virtual'>
                      {" "}
                      <input type='radio' />
                      <label>Flat fee</label>
                    </div>

                    <div className='check-inperson'>
                      {" "}
                      <input type='radio' />
                      <label>Dynamic pricing</label>
                    </div>
                  </div>
                </div>

                <div className='cancel-done'>
                  <button className='cancel-time'>Cancel</button>
                  <button className='done-time'>Done</button>
                </div>
              </div>
            </div>
          ) : (
            <div className='create-event-service'>
              <div className='create-time-based'>
                <div className='create-time-service'>
                  <span>Create an Event</span>
                </div>

                <div className='time-service'>
                  <span>Event Name</span>
                  <input />
                </div>

                <div className='time-description'>
                  <span>Description</span>
                  <textarea></textarea>
                </div>

                <div className='event-type'>
                  <span>Event Type</span>
                  <div className='event-checkbox'>
                    <div className='check-virtual'>
                      {" "}
                      <input type='checkbox' className='checkbox' />
                      <label>Virtual</label>
                    </div>

                    <div className='check-inperson'>
                      {" "}
                      <input type='checkbox' className='checkbox' />
                      <label>In-persom</label>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <button className='next' onClick={Next}>
                  Next
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}
