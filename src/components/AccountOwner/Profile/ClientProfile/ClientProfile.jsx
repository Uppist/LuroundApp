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
      //   console.log(user);
      setViewerData(user);
    } else {
      console.log("No user data found in localStorage");
      navigate("/");
    }
  }, [navigate]);
  if (!viewerData) {
    return null;
  }

  const { name, company, url, logo, occupation, photoUrl, about } = viewerData;

  //   console.log("data from viewer", viewerData);
  return (
    <div>
      <Profile
        // refreshKey={refreshKey}
        Name={name}
        company={company}
        url={url}
        logo={logo}
        Occupation={occupation}
        photoUrl={photoUrl}
      />
      <AboutDetails about={about} />
    </div>
  );
}
