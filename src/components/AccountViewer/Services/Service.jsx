/** @format */

import React, { useEffect, useState } from "react";
import styles from "./service.module.css";
import OneOff from "./OneOff/OneOff";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Layout from "../Layout";
import RetainerView from "./Retainer/RetainerView";

export default function Service() {
  const location = useLocation();
  const [activeComponent, setActiveComponent] = useState("oneoff2");
  // const navigate = useNavigate();

  const storedData = JSON.parse(localStorage.getItem("viewerData"));
  const logo = storedData?.logo;
  const company = storedData?.company;

  useEffect(() => {
    if (location.state?.sessionType) {
      setActiveComponent(location.state.sessionType);
    }
  }, [location.state]);

  function handleChange(container) {
    setActiveComponent(container);
    // if (container === "oneoff2") {
    //   navigate("/services/oneoff");
    // } else if (container === "retainer") {
    //   navigate("/retainer");
    // }
  }
  return (
    <Layout logo={logo} company={company}>
      <section className={styles.service}>
        <div className={styles.services}>
          {" "}
          <label>Services</label>
          <ul>
            <li onClick={() => handleChange("oneoff2")}>One-Off</li>

            <li onClick={() => handleChange("retainer")}>Retainer</li>

            <Link>
              {" "}
              <li>Program</li>
            </Link>
            <Link>
              <li>Event</li>
            </Link>
          </ul>
        </div>
        {/* <OneOff /> */}
      </section>
      {activeComponent === "oneoff2" && <OneOff />}
      {activeComponent === "retainer" && <RetainerView />}
    </Layout>
  );
}
