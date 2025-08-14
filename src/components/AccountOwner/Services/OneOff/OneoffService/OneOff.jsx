/** @format */

// /** @format */

import styles from "./OneOff.module.css";
// import Data from "./data.json";
import React, { useContext, useState } from "react";
import DetailOne from "./DetailService";
import Timebased from "../TimeBased/TimeBased";
import Projectbased from "../ProjectBased/ProjectBased";
import Create from "./CreateService";
import Update from "./UpdatedValue/Update";
import EmptyState from "./EmptyState";
import { ServiceContext, userContext } from "../../../../Context";

export default function One({ backone }) {
  const [isDetail, setisDetail] = useState(null);

  const [isProjectBased, setIsProjectBased] = useState(false);
  const [isVisible, setVisible] = useState("fade-in");

  const [isService, setisService] = useState(false);

  const [userService, setUserService] = useContext(ServiceContext);

  const openModal = () => {
    setisService(true);
  };

  const closeModal = () => {
    setisService(false);
  };

  function TimeBased() {
    setIsTimeBased(true);
  }

  function ProjectBased() {
    setIsProjectBased(true);
  }

  const handleClick = (container) => {
    setVisible("fade-out");
    if (isService) setisService(false);

    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
      console.log("Switched to:", container);
    }, 200);
  };

  function openDetail(index) {
    setisDetail(index);
  }

  return (
    <>
      <div className={styles.oneoff}>
        <div className={styles.oneoffservice}>
          <div className={styles.numberofservice}>
            <span className={styles.oneoffservice}>One-off</span>
            {!userService ? null : (
              <>
                {Array.isArray(userService) &&
                  userService.filter(
                    (service) => service.service_type === "one-off"
                  ).length > 0 && (
                    <span className={styles.number}>
                      {
                        userService.filter(
                          (service) => service.service_type === "one-off"
                        ).length
                      }
                    </span>
                  )}
              </>
            )}
          </div>
          <div>
            <Create
              onTime={TimeBased}
              onProject={ProjectBased}
              openModal={openModal}
              closeModal={closeModal}
              isService={isService}
            />
          </div>
        </div>

        {userService.some((service) => service.service_type === "one-off") ? (
          <Update
            handleClick={handleClick}
            isVisible={isVisible}
            openDetail={openDetail}
          />
        ) : (
          <EmptyState
            onTime={TimeBased}
            onProject={ProjectBased}
            isService={isService}
            openModal={openModal}
            closeModal={closeModal}
          />
        )}
      </div>
    </>
  );
}
