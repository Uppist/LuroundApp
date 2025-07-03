/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Financials from "../../../components/AccountOwner/Financials/Financials";
import Quotes from "../../../components/AccountOwner/Financials/Quotes/Quotes";
import Invoice from "../../../components/AccountOwner/Financials/Invioces/Invoice";
import Receipt from "../../../components/AccountOwner/Financials/Receipts/Receipt";

export default function FinancialRouting() {
  return (
    <Routes>
      <Route path='/financials' element={<Financials />} />
      <Route path='/quote' element={<Quotes />} />
      <Route path='/invoice' element={<Invoice />} />
      <Route path='/receipt' element={<Receipt />} />
    </Routes>
  );
}
