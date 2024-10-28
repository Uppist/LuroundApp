/** @format */

import { useState } from "react";

export default function AddService({
  onClose,
  onTime,
  onProject,
  onRetainer,
  onProgram,
  onEvent,
}) {
  const [isClickOne, setIsClickOne] = useState(false);

  function ClickedOne() {
    setIsClickOne(!isClickOne);
  }
  return (
    <div>
      <div className='profiledropdown'>
        <div className='overlaydropdown' onClick={onClose}></div>
        <div className='type-of-service'>
          <div className='choose-service'>
            <span>Choose type of service</span>
            <hr />
          </div>
          <ul className='dropdown-service'>
            <div className='oneoff-dropdown'>
              <li className='oneoff-service' onClick={ClickedOne}>
                One-off
              </li>
              {isClickOne && (
                <div className='time-project-service'>
                  <div>
                    <button className='time-based' onClick={onTime}>
                      Time-based
                    </button>
                  </div>
                  <button className='project-based' onClick={onProject}>
                    Project-based
                  </button>
                </div>
              )}
            </div>
            <li onClick={onRetainer}>Retainer</li>
            <li onClick={onProgram}>Program</li>
            <li onClick={onEvent}>Events</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
