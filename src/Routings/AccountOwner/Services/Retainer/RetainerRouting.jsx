/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Retainer from "../../../../components/AccountOwner/Services/Retainer/Retainer";

export default function RetainerRouting() {
  return (
    <Routes>
      <Route path='/retainer' element={<Retainer />} />
    </Routes>
  );
}
