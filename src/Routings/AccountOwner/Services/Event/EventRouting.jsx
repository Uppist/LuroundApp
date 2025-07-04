/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Event from "../../../../components/AccountOwner/Services/Event/Event";

export default function EventRouting() {
  return (
    <Routes>
      <Route path='/event' element={<Event />} />
    </Routes>
  );
}
