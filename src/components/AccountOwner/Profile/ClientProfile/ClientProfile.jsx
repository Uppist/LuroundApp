/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile/Profile";
import AboutDetails from "./Profile/AboutDetails";

export default function ClientProfile() {
  return (
    <div>
      <Profile />
      <AboutDetails />
    </div>
  );
}
