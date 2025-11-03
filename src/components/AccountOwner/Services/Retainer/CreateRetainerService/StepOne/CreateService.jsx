/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import Offers from "./Offers";

export default function CreateService({
  serviceType,
  retainerService,
  setRetainerService,
}) {
  const location = useLocation();

  const EditRetainer = location.state?.data || {};

  const [createService, setCreateService] = useState({
    service_name: EditRetainer.service_name || "",
    description: EditRetainer.description || "",
    service_type: serviceType,
    core_features: EditRetainer.core_features || [],
  });

  function handleChange(e) {
    setCreateService((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleCoreFeatures(features) {
    setCreateService((prev) => ({
      ...prev,
      core_features: features,
    }));
  }

  const navigate = useNavigate();

  function Next() {
    console.log(createService);
    // console.log(retainerService);
    setRetainerService((prev) => ({
      ...prev,
      ...createService,
    }));
    // console.log(retainerService);
    navigate("pricing", { state: EditRetainer });
  }

  const isNext =
    createService.service_name.trim() !== "" &&
    createService.description.trim() !== "" &&
    createService.core_features.length > 0;
  return (
    <div className={styles.createtime}>
      <div className={styles.create}>
        <div>
          <span>Create retainer service</span>
        </div>
        <span>1 of 3 steps</span>
      </div>
      <div className={styles.description}>
        <div className={styles.service}>
          <span>Service Name</span>
          <input
            type='text'
            name='service_name'
            value={createService.service_name}
            onChange={handleChange}
            placeholder='e.g Personal Training'
          />
        </div>
        <div className={styles.number}>
          <div className={styles.time}>
            <span>Description</span>
            <textarea
              name='description'
              maxLength={500}
              cols={40}
              rows={7}
              value={createService.description}
              onChange={handleChange}
              placeholder='Write a brief descriptive summary of the service you provide'
            ></textarea>
          </div>
          <div className={styles.span}>
            {" "}
            <span>{createService.description.length}/500</span>
          </div>
        </div>
        <Offers
          handleCoreFeatures={handleCoreFeatures}
          initialFeatures={EditRetainer.core_features || []}
        />
      </div>
      <div>
        {" "}
        <button onClick={Next} disabled={!isNext} className={styles.button}>
          Next
        </button>
      </div>
    </div>
  );
}
