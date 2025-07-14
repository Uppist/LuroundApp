/** @format */
import React from 'react';
import { FaClock, FaCalendarAlt, FaUsers, FaCreditCard, FaMapMarkerAlt, FaInfoCircle } from 'react-icons/fa';
import styles from '../Program/programview.module.css';

const ProgramRegister = ({ onBack }) => {
  return (
    <div className={styles.programCard2}>

      <div className={styles.programInfo2}>
        <div className={styles.programImage2}>
            <img src="../public/assets/png/bootcamp.png" alt="Bootcamp" />
        </div>

        <h2>
          Graphic Design Bootcamp
        </h2>
        <div style={{ display: 'flex', gap: '16px', alignItems: 'center', fontSize: '14px', marginTop: '4px', color: '#6B7A7A' }}>
          <span><FaClock /> 6 weeks</span>
          <span><FaClock /> Mon & Thurs</span>
          <span><FaUsers /> 50</span>
          <span><FaCalendarAlt /> Mar 14, 2024 - April 27, 2024</span>
        </div>

        <h3 style={{ marginTop: '20px', color: '#FFB400', fontSize: '16px' }}>Service schedule</h3>
        <p style={{ margin: '4px 0', color: '#1D2E2E' }}>Monday: 9:00am – 12:00pm</p>
        <p style={{ margin: '4px 0', color: '#1D2E2E' }}>Thursday: 11:00am – 5:00pm</p>

        <div className={styles.programRegisterPriceBox}>
          <div className={styles.programRegisterRadio}>
            <label><input type="radio" name="mode" defaultChecked /> Virtual</label>
            <label><input type="radio" name="mode" /> In-person</label>
          </div>
          <div className={styles.programRegisterAmount}>₦10,000</div>
        </div>

        <div className={styles.programRegisterDetails}>
          <p>
            <FaCreditCard /> Payment Details: 0040635865, Access Bank, Niyi Amuda
          </p>
          <p>
            <FaMapMarkerAlt /> The program link or location will be shared after registering.
          </p>
          <p>
            <FaInfoCircle /> Additional information will be provided upon confirmation.
          </p>
        </div>

        <button className={styles.registerButton} style={{ marginTop: '20px' }}>Register now</button>
        <button className={styles.programRegisterBackBtn} onClick={onBack}>Back</button>
      </div>
    </div>
  );
};

export default ProgramRegister;
