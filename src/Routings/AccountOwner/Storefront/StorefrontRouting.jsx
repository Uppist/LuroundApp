/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import FirstPage from "../../../components/AccountOwner/StoreFront/FirstPage";
import DetailPopup from "../../../components/AccountOwner/StoreFront/DetailPopup";
import Order from "../../../components/AccountOwner/StoreFront/Orders/Order";
import PopUp from "../../../components/AccountOwner/StoreFront/Popup/PopUp";

export default function StorefrontRouting() {
  return (
    <Routes>
      <Route path='/storefront' element={<FirstPage />} />
      <Route path='/category-description' element={<DetailPopup />} />
      <Route path='/orders' element={<Order />} />
      <Route path='/add-product' element={<PopUp />} />
    </Routes>
  );
}
