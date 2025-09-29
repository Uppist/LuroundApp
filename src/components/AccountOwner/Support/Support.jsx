/** @format */

import React, { useContext, useState } from "react";
import styles from "./Support.module.css";
import { userContext } from "../../Context";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { Slide, Zoom, Flip, Bounce } from "react-toastify";
import arrow from "../../../components/elements/support/arrow.svg";
import axios from "axios";

export default function Support() {
  const [isSubject, setIsSubject] = useState("");
  const [isDescription, setIsDescription] = useState("");

  const [userData, setUserData] = useContext(userContext);

  function handleSubjectChange(e) {
    setIsSubject(e.target.value);
  }

  function handleDescriptionChange(e) {
    setIsDescription(e.target.value);
  }
  function Submit(e) {
    e.preventDefault();
    const data = {
      subject: isSubject,
      description: isDescription,
      email: userData.email,
    };
    const token = localStorage.getItem("Token");

    axios
      .post("https://api.luround.com/v1/feedbacks/add", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Your request has been submitted");
        console.log("data sent successfully", data);
        setIsSubject("");
        setIsDescription("");
      })
      .catch((err) => {
        console.error("Error sending data:", err);
      });
  }

  function Cancel() {
    setIsSubject("");
    setIsDescription("");
  }

  const isSubmit = [isSubject, isDescription].every((val) => val.trim() !== "");

  return (
    <section className={styles.support}>
      <div className={styles.label}>
        <img src={arrow} alt='' />
        <label className={styles.contact}>Contact us</label>{" "}
      </div>
      <div className={styles.supportcontainer}>
        <div className={styles.subject}>
          <label>Subject</label>
          <input
            value={isSubject}
            placeholder='Enter here'
            type='text'
            onChange={handleSubjectChange}
          />
        </div>

        <div>
          {" "}
          <div className={styles.description}>
            <label>Description</label>
            <textarea
              value={isDescription}
              maxLength={100}
              placeholder='Enter the details of your request. Our team will respond as soon as possible.'
              onChange={handleDescriptionChange}
            />
          </div>
          <span>{isDescription.length}/100</span>
        </div>

        <div className={styles.cancelsubmit}>
          <button className={styles.canceltime} onClick={Cancel}>
            Cancel
          </button>
          <button
            className={styles.donetime}
            type='button'
            disabled={!isSubmit}
            onClick={Submit}
          >
            Submit
          </button>
        </div>
      </div>{" "}
      <ToastContainer
        position='top-center'
        autoClose={5000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        icon={false}
        transition={Zoom}
        closeButton={false}
      />{" "}
    </section>
  );
}
