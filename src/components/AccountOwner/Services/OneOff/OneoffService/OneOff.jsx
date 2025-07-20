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
import { userContext } from "../../../../Context";

export default function One({ backone }) {
  const [isDetail, setisDetail] = useState(null);

  const [isProjectBased, setIsProjectBased] = useState(false);
  const [isVisible, setVisible] = useState("fade-in");

  const [isService, setisService] = useState(false);

  const [userData, setUserData, userService, setUserService] =
    useContext(userContext);
  // console.log(userService);

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

  function closeProjectBased() {
    setIsProjectBased(false);
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

  function closeTime() {
    setIsTimeBased(false);
  }

  function openDetail(index) {
    setisDetail(index);
  }

  function goBackFromDetail() {
    setisDetail(null);
    setActiveComponent("oneoffService");
  }

  return (
    <>
      {isProjectBased ? (
        <Projectbased
          backone={backone}
          handleClick={handleClick}
          closeProjectBased={closeProjectBased}
        />
      ) : isDetail === null ? (
        <div className={styles.oneoff}>
          <div className={styles.oneoffservice}>
            <div className={styles.numberofservice}>
              <span className={styles.oneoffservice}>One-off</span>
              {!userService ? null : (
                <span className={styles.number}>{userService.length}</span>
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

          {!userService ? (
            <EmptyState isService={isService} openModal={openModal} />
          ) : (
            <Update
              handleClick={handleClick}
              isVisible={isVisible}
              openDetail={openDetail}
            />
          )}
        </div>
      ) : (
        <></>
        // <DetailOne dataValue={Data[isDetail]} handleClick={goBackFromDetail} />
      )}
    </>
  );
}
