/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import EventDescription from "./EventDescription";
import EventSchedule from "./EventSchedule";

export default function StepOne() {
  const navigate = useNavigate();
  function Next() {
    navigate("event2");
  }

  return (
    <>
      <div className={styles.createtimebased}>
        <div className={styles.createtimeservice}>
          <span>Create an Event</span>
        </div>

        <EventDescription />

        <EventSchedule />
        <div>
          <button onClick={Next} className='next'>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
