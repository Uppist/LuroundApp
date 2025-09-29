/** @format */

import OtherDetails from "./OtherDetails";
import profile from "../../../elements/Profile.jpg";
import { useRef, useState, useEffect } from "react";
import styles from "./EditProfile.module.css";
import EditIntro from "./EditIntro";
import EditAbout from "./EditAbout";
import EditBrand from "./EditBrand";
import EditDetails from "./EditDetails";

export default function EditProfile({}) {
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
