/** @format */
import { useState } from "react";
import AddService from "./AddService";
import styles from "./OneOff.module.css";
import AddIcon from "@mui/icons-material/Add";

export default function Create({
  onTime,
  onProject,
  isService,
  openModal,
  closeModal,
}) {
  return (
    <>
      <button className={styles.addservice}>
        <AddIcon sx={{ width: 24, height: 24, fill: "white" }} />

        <span onClick={openModal}>Create</span>
        {isService && (
          <AddService
            onClose={closeModal}
            onTime={onTime}
            onProject={onProject}
          />
        )}
      </button>
    </>
  );
}
