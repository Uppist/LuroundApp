/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Support from "../../../components/AccountOwner/Support/Support";

export default function SupportRouting() {
  return (
    <Routes>
      <Route path='/support' element={<Support />} />
    </Routes>
  );
}
