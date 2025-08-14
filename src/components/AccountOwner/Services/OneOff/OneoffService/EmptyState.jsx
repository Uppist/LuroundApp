/** @format */

import React from "react";
import styles2 from "../../../StoreFront/style.module.css";
import image from "../../../../elements/services/oneoff.svg";
import AddService from "./AddService";

export default function EmptyState({
  isService,
  openModal,
  closeModal,
  onTime,
  onProject,
}) {
  return (
    <div className={` ${styles2.savedaccount}`}>
      <div className={styles2.bank}>
        <img src={image} alt='' />

        <div className={styles2.savedaddaccount}>
          <span>No services yet </span>
          <label>
            Click on the “Add service” button to start adding your services
          </label>
        </div>
      </div>
      <div className={` ${isService ? "open" : ""}`}>
        <button className={`${styles2.addanaccount}`} onClick={openModal}>
          Add service
        </button>
        {isService && (
          <AddService
            onClose={closeModal}
            onTime={onTime}
            onProject={onProject}
          />
        )}
      </div>
    </div>
  );
}
