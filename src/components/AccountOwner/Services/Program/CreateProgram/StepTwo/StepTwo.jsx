/** @format */

import React from "react";

import styles2 from "../../../Retainer/Details.module.css";
import Time from "./Time";
import DateTime from "./Date";

export default function StepTwo({ programService, setProgramService }) {
  return (
    <div className={styles2.step}>
      <div>
        <label htmlFor=''>Create a program</label>
        <span>2 of 2 steps</span>
      </div>
      <DateTime
        programService={programService}
        setProgramService={setProgramService}
      />
      {/* <Time /> */}
    </div>
  );
}
