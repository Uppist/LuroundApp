/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import One from "../../../../components/AccountOwner/Services/OneOff/OneoffService/OneOff";

export default function OneOffRouting() {
  return (
    <Routes>
      <Route path='/oneoff' element={<One />} />
    </Routes>
  );
}
