/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Transaction from "../../../components/AccountOwner/Transactions/TransactionPage";

export default function TransactionRouting() {
  return (
    <Routes>
      {" "}
      <Route path='/transactions' element={<Transaction />} />
    </Routes>
  );
}
