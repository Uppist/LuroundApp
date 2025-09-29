/** @format */

import React from "react";
import { useLocation } from "react-router-dom";
import ProjectFirstStep from "./ProjectBased/ProjectFirstStep";
import FirstStep from "./TimeBased/StepOne/FirstStep";

export default function Book() {
  const location = useLocation();
  const { data } = location.state || {};

  console.log(data);
  return (
    <>
      {data.one_off_type === "time-based" ||
      data.service_type === "retainer" ? (
        <FirstStep />
      ) : (
        <ProjectFirstStep />
      )}
    </>
  );
}
