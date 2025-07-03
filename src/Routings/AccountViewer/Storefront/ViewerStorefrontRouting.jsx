/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Store from "../../../components/AccountViewer/Storefront/Store";

export default function ViewerStorefrontRouting() {
  return (
    <Routes>
      <Route path='/stores' element={<Store />} />
    </Routes>
  );
}
