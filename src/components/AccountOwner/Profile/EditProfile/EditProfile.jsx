/** @format */

import OtherDetails from "./OtherDetails";
import profile from "../../../elements/Profile.jpg";
import { useRef, useState, useEffect } from "react";
import axios from "axios";
import styles from "./EditProfile.module.css";
import EditIntro from "./EditIntro";
import EditAbout from "./EditAbout";
import EditBrand from "./EditBrand";
import EditDetails from "./EditDetails";

export default function EditProfile({}) {
  const [isAbout, setIsAbout] = useState({ about: "" });

  const [isDetails, setIsDetails] = useState({
    location: "",
    mobile: "",
    email: "",
    website: "",
    linkedin: "",
    facebook: "",
    instagram: "",
    twitter: "",
    youtube: "",
  });

  const inputRef = useRef(null);
  const scrollNext = useRef(null);
  const scrollBrand = useRef(null);

  const scrollPhoto = useRef(null);
  const scrollDetails = useRef(null);
  const scrollTo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  function handleAbout(e) {
    setIsAbout({ ...isAbout, [e.target.name]: e.target.value });
  }

  function handleDetails(e) {
    setIsDetails({ ...isDetails, [e.target.name]: e.target.value });
  }

  function handleCancel() {
    setIsValue({
      // upload2: "",
      firstName: "",
      lastname: "",
      company: "",
      occupation: "",
      logo_url: "",
    });
  }

  useEffect(() => {
    if (typeof setRefreshKey === "function") {
      setRefreshKey((prevKey) => prevKey + 1); // Ensure setRefreshKey is a function
    } else {
      console.error("setRefreshKey is not a function");
    }
  }, [isAbout, isDetails]);

  function handleAboutCancel() {
    setIsAbout({ about: "" });
  }

  function handleDetailsCancel() {
    setIsDetails({
      location: "",
      mobile: "",
      email: "",
      website: "",
      linkedin: "",
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
    });
  }

  //update about
  async function handleSubmitAbout(e) {
    e.preventDefault();
    const local = localStorage.getItem("Token");

    const request = await axios.put(
      "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/profile/about/update",
      { ...isAbout },
      {
        headers: {
          Authorization: `Bearer ${local}`,
          "Content-Type": "application/json",
        },
      }
    );
    alert("Updated");

    console.log("updated about", request);

    setIsAbout({ about: "" });
  }

  //update details
  async function handleSubmitDetails(e) {
    e.preventDefault();
    const local = localStorage.getItem("Token");

    console.log("Token being sent:", local);

    const detailsArray = {
      media_links: [
        {
          link: isDetails.mobile,
          name: "mobile",
          icon: "assets/svg/call_icon.svg",
        },
        {
          link: isDetails.email,
          name: "email",
          icon: "assets/svg/email_icon.svg",
        },
        {
          link: isDetails.location,
          name: "location",
          icon: "assets/svg/location_icon.svg",
        },
        {
          link: isDetails.website,
          name: "website",
          icon: "assets/svg/website_icon.svg",
        },
        {
          link: isDetails.linkedin,
          name: "linkedIn",
          icon: "assets/svg/linkedin_icon.svg",
        },
        {
          link: isDetails.facebook,
          name: "facebook",
          icon: "assets/svg/facebook_icon.svg",
        },
        {
          link: isDetails.instagram,
          name: "instagram",
          icon: "assets/svg/instagram_icon.svg",
        },
        {
          link: isDetails.twitter,
          name: "twitter",
          icon: "assets/svg/twitter_icon.svg",
        },
        {
          link: isDetails.youtube,
          name: "youTube",
          icon: "assets/svg/youtube_icon.svg",
        },
      ].filter((item) => item.link),
    };

    console.log(detailsArray);

    const request = await axios.put(
      "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/profile/media-links/update",
      { ...detailsArray },
      {
        headers: {
          Authorization: `Bearer ${local}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("updated media_link", request);

    setIsDetails({
      location: "",
      mobile: "",
      email: "",
      website: "",
      linkedin: "",
      facebook: "",
      instagram: "",
      twitter: "",
      youtube: "",
    });
    alert("Updated");
  }

  return (
    <div className={styles.editprofile}>
      <div className={styles.editprofilefirstcontainer}>
        <div>
          <span onClick={() => scrollTo(scrollPhoto)}>Photo & Intro</span>
          <span onClick={() => scrollTo(scrollNext)}>About</span>
          <span onClick={() => scrollTo(scrollBrand)}>
            Brand I've worked with
          </span>
          <span onClick={() => scrollTo(scrollDetails)}>Other Details</span>
        </div>
      </div>
      <div className={styles.editprofilesecondcontainer}>
        <EditIntro
          scrollPhoto={scrollPhoto}
          profile={profile}
          inputRef={inputRef}
        />

        <EditAbout scrollNext={scrollNext} />
        <EditBrand scrollBrand={scrollBrand} />
        <EditDetails scrollDetails={scrollDetails} />
      </div>{" "}
    </div>
  );
}
