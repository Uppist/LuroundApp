/** @format */

import React, { useContext, useEffect, useState } from "react";
import styles from "./EditProfile.module.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { userContext } from "../../../Context";
export default function EditAbout({ scrollNext }) {
  const [isAbout, setIsAbout] = useState({ about: "" });
  const [userData, setUserData] = useContext(userContext);

  function handleAbout(e) {
    setIsAbout({ ...isAbout, [e.target.name]: e.target.value });
  }

  async function handleSubmitAbout(e) {
    e.preventDefault();
    const local = localStorage.getItem("Token");

    const request = await axios.put(
      "https://api.luround.com/v1/profile/about/update",
      { ...isAbout },
      {
        headers: {
          Authorization: `Bearer ${local}`,
          "Content-Type": "application/json",
        },
      }
    );
    // alert("Updated");
    toast.success("Updated");

    console.log("updated about", request);
    setUserData((prev) => ({
      ...prev,
      about: isAbout.about,
    }));

    setIsAbout({ about: "" });
  }

  const isabout = isAbout.about.trim() !== "";
  return (
    <form onSubmit={handleSubmitAbout}>
      <div className={styles.editprofileabout} ref={scrollNext}>
        <span>About</span>
        <textarea
          name='about'
          value={isAbout.about}
          placeholder='Write a brief summary of your experience, skills and achievements'
          onChange={(e) => handleAbout(e)}
        ></textarea>

        <div className={styles.canceldone}>
          {/* <button className={styles.canceltime}>Cancel</button> */}
          <button type='submit' disabled={!isabout} className={styles.donetime}>
            Save
          </button>
        </div>
      </div>
      {/* <ToastContainer /> */}
    </form>
  );
}
