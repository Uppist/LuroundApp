/** @format */

import React from "react";
import styles from "../OneOff/TimeBased/Create/create.module.css";

export default function CreateService() {
  return (
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
  );
}
