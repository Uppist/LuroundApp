/** @format */

import React, { useState } from "react";
import styles2 from "../../Program.module.css";

import styles from "../../../OneOff/TimeBased/Create/create.module.css";
import ProgramDate from "./ProgramDate";
import { useNavigate } from "react-router-dom";

export default function CreateService({
  serviceType,
  programService,
  setProgramService,
}) {
  const [createService, setCreateService] = useState({
    service_name: "",
    description: "",
    service_type: serviceType,
  });

  function handleChange(e) {
    setCreateService((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const navigate = useNavigate();
  function Next() {
    console.log(createService);
    // console.log(retainerService);
    setProgramService((prev) => ({
      ...prev,
      ...createService,
    }));
    navigate("choosedate");
  }

  const isNext =
    createService.service_name.trim() !== "" &&
    createService.description.trim() !== "" &&
    createService.core_features.length > 0;

  return (
    <>
      <div className={styles.createtime}>
        <div className={styles.create}>
          <div>
            <span>Create a program</span>
          </div>
          <span>1 of 2 steps</span>
        </div>
        <div className={styles.description}>
          <div className={styles.service}>
            <span>Service Name</span>
            <input type='text' placeholder='e.g Personal Training' />
          </div>
          <div className={styles.number}>
            <div className={styles.time}>
              <span>Description</span>
              <textarea placeholder='Write a brief descriptive summary of the service you provide'></textarea>
            </div>
            <div className={styles.span}>
              {" "}
              <span>0/500</span>
            </div>
          </div>
        </div>
      </div>
      <ProgramDate />

      <div>
        <button onClick={Next} className={styles2.next}>
          Next
        </button>
      </div>
    </>
  );
}
