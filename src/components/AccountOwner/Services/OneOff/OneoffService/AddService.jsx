/** @format */

import { useState } from "react";
import styles from "./OneOff.module.css";
import { Link } from "react-router-dom";

export default function AddService({ onClose, onTime, onProject }) {
  const [isClickOne, setIsClickOne] = useState(false);

  function ClickedOne() {
    setIsClickOne(!isClickOne);
  }

  return (
    <div>
      <div className='profiledropdown'>
        <div className='overlaydropdown' onClick={onClose}></div>
        <div className='type-of-service'>
          <div className={styles.service}>
            <span>Choose type of one-off service</span>
          </div>
          <ul className='dropdown-service'>
            <li className='oneoff-service' onClick={ClickedOne}>
              <div className='time-project-service'>
                <button className='time-based'>
                  <Link to='/time-based'>Time-based</Link>
                </button>

                <button className='project-based' onClick={onProject}>
                  <Link to='/project-based'>Project-based</Link>
                </button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
