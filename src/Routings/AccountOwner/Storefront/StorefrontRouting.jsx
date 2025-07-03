/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import FirstPage from "../../../components/AccountOwner/StoreFront/FirstPage";

export default function StorefrontRouting() {
  return (
    <Routes>
      <Route path='/storefront' element={<FirstPage />} />
    </Routes>
  );
}
