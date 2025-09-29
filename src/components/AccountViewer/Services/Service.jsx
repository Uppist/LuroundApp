/** @format */

import React, { useContext, useEffect, useState } from "react";
import styles from "./service.module.css";
import OneOff from "./OneOff/OneOff";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import RetainerView from "./Retainer/RetainerView";
import ProgramView from "./Program/ProgramView";
import axios from "axios";
import { UserViewerContext } from "../../ViewerContext";

export default function Service() {
  const location = useLocation();
  const [userViewer] = useContext(UserViewerContext);
  const nameFormatted = userViewer.displayName
    ? userViewer.displayName.replace(/ /g, "_")
    : "default_user";
  return (
    <>
      <section className={styles.service}>
        <div className={styles.services}>
          {" "}
          <label>Services</label>
          <ul>
            <Link to={`/services/${nameFormatted}`}>
              <li
                className={`${
                  location.pathname.includes("one-off")
                    ? styles.active
                    : styles.list
                }`}
              >
                One-Off
              </li>
            </Link>
            <Link to='view-retainer-services'>
              <li
                className={`${
                  location.pathname.includes("retainer")
                    ? styles.active
                    : styles.list
                }`}
              >
                Retainer
              </li>
            </Link>
            <Link to='view-program-services'>
              <li
                className={`${
                  location.pathname.includes("program")
                    ? styles.active
                    : styles.list
                }`}
              >
                Program
              </li>
            </Link>

            <Link to='view-event-services'>
              <li
                className={`${
                  location.pathname.includes("event")
                    ? styles.active
                    : styles.list
                }`}
              >
                Event
              </li>
            </Link>
          </ul>
        </div>
        {/* <OneOff /> */}
      </section>
      {/* {activeComponent === "oneoff2" && <OneOff />}
      {activeComponent === "retainer" && <RetainerView />}
      {activeComponent === "program" && <ProgramView />} */}

      <Outlet />
    </>
  );
}
