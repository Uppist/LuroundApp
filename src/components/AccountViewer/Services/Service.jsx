/** @format */

import React, { useEffect, useState } from "react";
import styles from "./service.module.css";
import OneOff from "./OneOff/OneOff";
import { Link, useLocation, useNavigate } from "react-router-dom";
import RetainerView from "./Retainer/RetainerView";
import ProgramView from "./Program/ProgramView";

export default function Service() {
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState("oneoff2");
  const [isActive, setIsActive] = useState(null);

  useEffect(() => {
    if (location.state?.sessionType) {
      setActiveComponent(location.state.sessionType);
    }
  }, [location.state]);

  function handleChange(container) {
    setActiveComponent(container);
    setIsActive(container);
  }
  return (
    <>
      <section className={styles.service}>
        <div className={styles.services}>
          {" "}
          <label>Services</label>
          <ul>
            <li
              className={`${
                isActive === "oneoff2" ? styles.active : styles.list
              }`}
              onClick={() => handleChange("oneoff2")}
            >
              One-Off
            </li>

            <li
              className={`${
                isActive === "retainer" ? styles.active : styles.list
              }`}
              onClick={() => handleChange("retainer")}
            >
              Retainer
            </li>

            <li
              className={`${
                isActive === "program" ? styles.active : styles.list
              }`}
              onClick={() => handleChange("program")}
            >
              Program
            </li>

            <Link>
              <li>Event</li>
            </Link>
          </ul>
        </div>
        {/* <OneOff /> */}
      </section>
      {activeComponent === "oneoff2" && <OneOff />}
      {activeComponent === "retainer" && <RetainerView />}
      {activeComponent === "program" && <ProgramView />}
    </>
  );
}
