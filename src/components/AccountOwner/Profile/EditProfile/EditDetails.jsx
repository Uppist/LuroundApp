/** @format */

import React, { useState } from "react";
import styles from "./EditProfile.module.css";
import OtherDetails from "./OtherDetails";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export default function EditDetails({ scrollDetails }) {
  const [socialLinks, setSocialLinks] = useState({
    location: {
      link: "",
      name: "Location",
      icon: "assets/svg/location_icon.svg",
    },
    mobile: {
      link: "",
      name: "Mobile",
      icon: "assets/svg/call_icon.svg",
    },
    email: {
      link: "",
      name: "Email",
      icon: "assets/svg/email_icon.svg",
    },
    website: {
      link: "",
      name: "Website",
      icon: "assets/svg/website_icon.svg",
    },
    linkedIn: {
      link: "",
      name: "LinkedIn",
      icon: "assets/svg/linkedin_icon.svg",
    },
    facebook: {
      link: "",
      name: "Facebook",
      icon: "assets/svg/facebook_icon.svg",
    },
    instagram: {
      link: "",
      name: "Instagram",
      icon: "assets/svg/instagram_icon.svg",
    },
    twitter: {
      link: "",
      name: "Twitter",
      icon: "assets/svg/twitter_icon.svg",
    },
    youtube: {
      link: "",
      name: "YouTube",
      icon: "assets/svg/youtube_icon.svg",
    },
  });

  const [changedFields, setChangedFields] = useState([]);

  function handleDetails(e) {
    const field = e.target.name;

    setSocialLinks((prev) => ({
      ...prev,
      [field]: {
        ...prev[field],
        link: e.target.value,
      },
    }));

    if (!changedFields.includes(field)) {
      setChangedFields((prev) => [...prev, field]);
    }
  }

  async function handleSubmitDetails(e) {
    e.preventDefault();
    const token = localStorage.getItem("Token");

    // ✅ Filter out empty links
    const media_links = Object.keys(socialLinks)
      .map((key) => socialLinks[key])
      .filter((item) => item.link.trim() !== "");

    try {
      const res = await axios.put(
        "https://api.luround.com/v1/profile/media-links/update",
        { media_links },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      console.log("Response:", res);

      console.log("full Response:", res.data);
      toast.success("Updated");
      console.log("Updated social links:", media_links);

      // clear changedFields if needed
      setChangedFields([]);
    } catch (error) {
      toast.error("Failed to update");
      console.error("Update error:", error);
    }
  }

  const isMedia =
    socialLinks.email.link.trim() !== "" ||
    socialLinks.facebook.link.trim() !== "" ||
    socialLinks.instagram.link.trim() !== "" ||
    socialLinks.linkedIn.link.trim() !== "" ||
    socialLinks.location.link.trim() !== "" ||
    socialLinks.mobile.link.trim() !== "" ||
    socialLinks.twitter.link.trim() !== "" ||
    socialLinks.website.link.trim() !== "" ||
    socialLinks.youtube.link.trim() !== "";

  return (
    <form onSubmit={handleSubmitDetails}>
      <div className={styles.otherdetailseditprofile} ref={scrollDetails}>
        <span>Other Details</span>
        <OtherDetails
          ref={scrollDetails}
          handleDetails={handleDetails}
          socialLinks={socialLinks}
        />
        <div className={styles.canceldone}>
          {/* <button className={styles.canceltime} type='button'>
            Cancel
          </button> */}
          <button type='submit' disabled={!isMedia} className={styles.donetime}>
            Save
          </button>
        </div>
        {/* <ToastContainer /> */}
      </div>
    </form>
  );
}
