/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Transaction from "../../../components/AccountOwner/Transactions/TransactionPage";
import SavedAccount from "../../../components/AccountOwner/Transactions/SavedAccount/SavedAccount";
import Account from "../../../components/AccountOwner/Transactions/SavedAccount/Account";

export default function TransactionRouting() {
  return (
    <Routes>
      {" "}
      <Route path='/transactions' element={<Transaction />} />
      <Route path='/saved-account' element={<Account />} />
    </Routes>
  );
}
