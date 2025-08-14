/** @format */
import { useContext, useEffect, useState } from "react";

import styles from "./Program.module.css";
import styles2 from "../Retainer/Retainer.module.css";
import EmptyState from "./EmptyState";
import Update from "./ProgramValue/Update";
import { ServiceContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
export default function Program() {
  const [isDetail, setisDetail] = useState(null);
  const [isVisible, setVisible] = useState("fade-in");
  const [activeComponent, setActiveComponent] = useState("emptystate");

  const [isService, setIsService] = useState(false);

  const [userService, setUserService] = useContext(ServiceContext);

  const navigate = useNavigate();

  function openService() {
    navigate("/createprogram");
  }

  const handleClick = (container) => {
    setVisible("fade-out");
    if (isService) setIsService(false);

    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
    }, 200);
  };

  return (
    <>
      <div className={styles.program}>
        <div className={styles.retainerservice}>
          <div className={styles.numberofservice}>
            <span className={styles.oneoffservice}>Program</span>
            {Array.isArray(userService) &&
              userService.filter(
                (service) => service.service_type === "program"
              ).length > 0 && (
                <span className={styles.number}>
                  {
                    userService.filter(
                      (service) => service.service_type === "program"
                    ).length
                  }
                </span>
              )}{" "}
          </div>
          <div>
            <button onClick={openService} className={styles2.addservice}>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M10.7755 20.5714V13.2245H3.42859V10.7755H10.7755V3.42859H13.2245V10.7755H20.5714V13.2245H13.2245V20.5714H10.7755Z'
                  fill='#FFFFFF'
                />
              </svg>
              <span>Create</span>
            </button>
          </div>{" "}
        </div>
        {Array.isArray(userService) &&
        userService.some((service) => service.service_type === "program") ? (
          <Update handleClick={handleClick} isVisible={isVisible} />
        ) : (
          <EmptyState isService={isService} openService={openService} />
        )}
      </div>
    </>
  );
}
