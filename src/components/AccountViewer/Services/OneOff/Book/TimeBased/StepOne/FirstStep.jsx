/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import { Link, useLocation } from "react-router-dom";
// import Calendar from "../../../../../AccountOwner/Bookings/Calendar/Calendar";
import SecondStep from "../StepTwo/SecondStep";
import Details from "../StepThree/Details";
import Calendar from "../Calendar/Calendar";
import InputDetails from "./InputDetails";

export default function FirstStep() {
  const [nextStep, setNextStep] = useState(false);
  const location = useLocation();
  const [details, setDetails] = useState(false);
  const [information, setInformation] = useState({
    displayName: "",
    email: "",
    phone_number: "",
    appointment_type: "nil",
    date: "",
    time: "",
    duration: "",
    message: "",
    location: "",
    payment_reference: "ytrfgiuoi767t7",
  });

  const { data } = location.state || {};

  function handleNextStep() {
    console.log(information);
    setNextStep(true);
  }

  function handleCloseNext() {
    setNextStep(false);
  }
  function handleDetails() {
    console.log(information);
    setDetails(true);
  }

  function handleCloseDetails() {
    setDetails(false);
  }
  return (
    <>
      {details ? (
        <Details
          data={data}
          handleCloseDetails={handleCloseDetails}
          information={information}
        />
      ) : (
        <div className={styles.booknow}>
          <Link to='/services' state={{ data }}>
            <span className={styles.back}>
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

              <span>Back</span>
            </span>
          </Link>

          <div className={styles.container}>
            <div className={styles.header}>
              <label htmlFor=''>Book {data.Title}</label>
              <span>{nextStep ? "2 of 2 steps" : "1 of 2 steps"}</span>
            </div>
            <div className={styles.form}>
              <InputDetails
                data={data}
                information={information}
                setInformation={setInformation}
              />

              <div className={styles.calendar}>
                {nextStep ? (
                  <SecondStep
                    handleCloseNext={handleCloseNext}
                    handleDetails={handleDetails}
                    setInformation={setInformation}
                    information={information}
                  />
                ) : (
                  <>
                    {" "}
                    <Calendar setInformation={setInformation} />
                    <div className={styles.button}>
                      <button className={styles.cancel}>Cancel</button>
                      <button className={styles.next} onClick={handleNextStep}>
                        Next
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
