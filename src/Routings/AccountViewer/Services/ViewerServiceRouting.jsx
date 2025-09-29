/** @format */

import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Service from "../../../components/AccountViewer/Services/Service";
import OneOff from "../../../components/AccountViewer/Services/OneOff/OneOff";
import RetainerView from "../../../components/AccountViewer/Services/Retainer/RetainerView";
import ProgramView from "../../../components/AccountViewer/Services/Program/ProgramView";
import EventView from "../../../components/AccountViewer/Services/Event/EventView";
import More from "../../../components/AccountViewer/Services/OneOff/More";
import Book from "../../../components/AccountViewer/Services/OneOff/Book/Book";
import Success from "../../../components/AccountViewer/Services/OneOff/Book/Success";
import Details from "../../../components/AccountViewer/Services/OneOff/Book/TimeBased/StepThree/Details";

export default function ViewerServiceRouting() {
  return (
    <Routes>
      <Route path='/services/:username' element={<Service />}>
        <Route index element={<OneOff />} />
        <Route path='view-retainer-services' element={<RetainerView />} />
        <Route path='view-program-services' element={<ProgramView />} />
        <Route path='view-event-services' element={<EventView />} />
      </Route>

      <Route path='/details' element={<More />} />
      <Route path='/booknow' element={<Book />} />
      <Route path='/success' element={<Success />} />
      <Route path='/bookingdetails' element={<Details />} />
    </Routes>
  );
}
