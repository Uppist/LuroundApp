/** @format */

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Event from "../../../../components/AccountOwner/Services/Event/Event";
import EventService from "../../../../components/AccountOwner/Services/Event/CreateEvent/EventService";
import StepOne from "../../../../components/AccountOwner/Services/Event/CreateEvent/StepOne/StepOne";
import StepTwo from "../../../../components/AccountOwner/Services/Event/CreateEvent/StepTwo/StepTwo";

export default function EventRouting() {
  const [eventService, setEventService] = useState({});
  return (
    <Routes>
      <Route path='/event' element={<Event />} />
      <Route path='/create' element={<EventService />}>
        <Route
          index
          element={
            <StepOne
              serviceType='event'
              eventService={eventService}
              setEventService={setEventService}
            />
          }
        />
        <Route path='event2' element={<StepTwo />} />
      </Route>
    </Routes>
  );
}
