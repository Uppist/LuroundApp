/** @format */

import React from "react";
import Calendar from "../../../components/AccountOwner/Calendar/Calendar";
import { Route, Routes } from "react-router-dom";

export default function CalendarRouting() {
  return (
    <Routes>
      <Route path='/calendar' element={<Calendar />} />
    </Routes>
  );
}
