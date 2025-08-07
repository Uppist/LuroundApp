/** @format */

import React from "react";
import OneOffRouting from "./OneOff/OneOffRouting";
import EventRouting from "./Event/EventRouting";
import ProgramRouting from "./Program/ProgramRouting";
import RetainerRouting from "./Retainer/RetainerRouting";
import ProjectRouting from "./OneOff/ProjectRouting";

export default function ServiceRouting() {
  return (
    <>
      <OneOffRouting />
      <ProjectRouting />
      <RetainerRouting />
      <ProgramRouting />
      <EventRouting />
    </>
  );
}
