/** @format */

import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile/Profile";
import AboutDetails from "./Profile/AboutDetails";
import { userContext } from "../../../Context";

export default function ClientProfile() {
  const [userData, setUserData] = useContext(userContext);
  const navigate = useNavigate();

  const [viewerData, setViewerData] = useState(null);
  const [refreshKey, setRefreshKey] = useState(0);

  // useEffect(() => {
  //   const data = localStorage.getItem("userData");
  //   if (data) {
  //     const user = JSON.parse(data);
  //     setViewerData(user);
  //   } else {
  //     console.log("No user data found in localStorage");
  //     navigate("/");
  //   }
  // }, [navigate, refreshKey]);

  // if (!viewerData) {
  //   return null;
  // }

  // const {
  //   name,
  //   firstName,
  //   lastName,
  //   photoUrl,
  //   company,
  //   logo,
  //   url,
  //   occupation,
  //   about,
  //   socialLinks,
  //   brand,
  // } = viewerData;

  return (
    <div>
      <Profile />
      <AboutDetails />
    </div>
  );
}
