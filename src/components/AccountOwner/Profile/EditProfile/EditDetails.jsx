/** @format */

import React from "react";
import styles from "./EditProfile.module.css";
import OtherDetails from "./OtherDetails";

export default function EditDetails({ scrollDetails }) {
  return (
    <form>
      <div className={styles.otherdetailseditprofile} ref={scrollDetails}>
        <span>Other Details</span>
        <OtherDetails
          ref={scrollDetails}
          //   handledetails={handleDetails}
          //   value={isDetails}
        />
        <div className={styles.canceldone}>
          <button className={styles.canceltime}>Cancel</button>
          <button type='submit' className={styles.donetime}>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
