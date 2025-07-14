/** @format */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../Program/programview.module.css';
import ProgramRegister from './ProgramRegister'; // Adjust the import path based on your file structure

export default function ProgramView() {
  const [isRegistered, setIsRegistered] = useState(false);
  const [selectedOption, setSelectedOption] = useState('virtual'); // Default to 'virtual'

  const handleRegisterClick = () => {
    setIsRegistered(true);
  };

  const handleBackClick = () => {
    setIsRegistered(false);
  };

  const handleRadioChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const optionToggleStyle = {
    backgroundColor: selectedOption === 'in-person' ? '#072D3C' : '#F8FAFA',
    transition: 'background-color 0.3s ease', // Smooth transition for background color
  };

  const priceText = selectedOption === 'in-person' ? 'N/A' : '₦120,000';
  const priceColor = selectedOption === 'in-person' ? '#FFFFFF' : undefined;

  return (
    <>
      {!isRegistered ? (
        <div className={styles.programCard}>
          <div className={styles.programImage}>
            {/* Placeholder for program image */}
            <img src="../public/assets/png/boot.png" alt="Graphic Design Bootcamp" />
          </div>
          <div className={styles.programInfo}>
            <h2>Graphic Design Bootcamp</h2>
            <p>
              Lorem ipsum dolor sit am, con sectetur adip scing elit, sedoe eiusm od tempor incididunt labore consetectetaur seiod sedio otacum illeconsec...
              <a href="" className={styles.seeMore}>
                see more
              </a>
            </p>
            <button className={styles.registerButton} onClick={handleRegisterClick}>
              Register now
            </button>
          </div>
          <div className={styles.optionSection}>
            <div className={styles.optionToggle} style={optionToggleStyle}>
              <div className={styles.radioOptions}>
                <label>
                  <input
                    type="radio"
                    name="programType"
                    value="virtual"
                    defaultChecked={selectedOption === 'virtual'}
                    onChange={handleRadioChange}
                  />
                  Virtual
                </label>
                <label>
                  &emsp;<input
                    type="radio"
                    name="programType"
                    value="in-person"
                    defaultChecked={selectedOption === 'in-person'}
                    onChange={handleRadioChange}
                  />
                  In-person
                </label>
              </div>
              <p className={styles.Price} style={{ color: priceColor }}>
                <span>{priceText}</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <ProgramRegister onBack={handleBackClick} />
      )}
    </>
  );
}