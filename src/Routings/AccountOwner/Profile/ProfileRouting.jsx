/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import ClientProfile from "../../../components/AccountOwner/Profile/ClientProfile/ClientProfile";
import Settings from "../../../components/AccountOwner/Profile/Settings/Settings";
import EditProfile from "../../../components/AccountOwner/Profile/EditProfile/EditProfile";

export default function ProfileRouting() {
  return (
    <Routes>
      <Route path='/profile-page' element={<ClientProfile />} />
      <Route path='/settings' element={<Settings />} />
      <Route path='/editprofile' element={<EditProfile />} />
    </Routes>
  );
}
