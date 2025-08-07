/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Event from "../../../../components/AccountOwner/Services/Event/Event";
import EventService from "../../../../components/AccountOwner/Services/Event/CreateEvent/EventService";
import StepOne from "../../../../components/AccountOwner/Services/Event/CreateEvent/StepOne/StepOne";
import StepTwo from "../../../../components/AccountOwner/Services/Event/CreateEvent/StepTwo";

export default function EventRouting() {
  return (
    <Routes>
      <Route path='/event' element={<Event />} />
      <Route path='/create' element={<EventService />}>
        <Route index element={<StepOne />} />
        <Route path='event2' element={<StepTwo />} />
      </Route>
    </Routes>
  );
}
