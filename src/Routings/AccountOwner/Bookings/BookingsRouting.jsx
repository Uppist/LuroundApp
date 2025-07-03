/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Bookings from "../../../components/AccountOwner/Bookings/Bookings";
import See from "../../../components/AccountOwner/Bookings/Details/SeeMore";

export default function BookingsRouting() {
  return (
    <Routes>
      <Route path='/bookings' element={<Bookings />} />
      <Route path='/bookingspage' element={<See />} />
    </Routes>
  );
}
