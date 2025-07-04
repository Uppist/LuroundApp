/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Program from "../../../../components/AccountOwner/Services/Program/Program";

export default function ProgramRouting() {
  return (
    <Routes>
      <Route path='/program' element={<Program />} />
    </Routes>
  );
}
