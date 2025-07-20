/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import BookNow from "../../../components/AccountViewer/Services/OneOff/Book/FirstStep";

import Service from "../../../components/AccountViewer/Services/Service";
import Details from "../../../components/AccountViewer/Services/OneOff/Book/Details";
import Success from "../../../components/AccountViewer/Services/OneOff/Book/Success";
import More from "../../../components/AccountViewer/Services/OneOff/More";

export default function ViewerServiceRouting() {
  return (
    <Routes>
      <Route path='/services' element={<Service />} />
      <Route path='/details' element={<More />} />
      <Route path='/booknow' element={<BookNow />} />
      <Route path='/success' element={<Success />} />
    </Routes>
  );
}
