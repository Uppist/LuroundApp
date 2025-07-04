/** @format */

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Profile from "./Profile/Profile";
import AboutDetails from "./Profile/AboutDetails";

export default function ClientProfile() {
  const navigate = useNavigate();

  const [viewerData, setViewerData] = useState(null);

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const user = JSON.parse(data);
      setViewerData(user);
    } else {
      console.log("No user data found in localStorage");
      navigate("/");
    }
  }, [navigate]);

  if (!viewerData) {
    return null;
  }

  const {
    name,
    firstName,
    lastName,
    photoUrl,
    company,
    logo,
    url,
    occupation,
    about,
  } = viewerData;

  return (
    <div>
      <Profile
        name={name}
        photoUrl={photoUrl}
        url={url}
        company={company}
        logo={logo}
        occupation={occupation}
      />
      <AboutDetails about={about} />
    </div>
  );
}
