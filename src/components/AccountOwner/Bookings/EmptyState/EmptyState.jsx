/** @format */

import React from "react";
import styles from "./style.module.css";
import image from "../../../elements/bookings/emptystate.png";

// { isService, openModal }
export default function EmptyState() {
  return (
    <div className={styles.savedaccount}>
      <div className={styles.bank}>
        <img src={image} alt='' />

        <div className={styles.savedaddaccount}>
          <span>No bookings yet </span>
          <label>When you get bookings, they’ll show up here </label>
        </div>
      </div>
      {/* <div className={` ${isService ? "open" : ""}`}> */}
      <div>
        <button
          className={styles.addanaccount}
          onClick={() => window.location.reload()}
        >
          Refresh
        </button>
      </div>
    </div>
  );
}

// onClick={openModal}
