/** @format */
import { useState } from "react";
import program from "./program.json";
import ProgramService from "../Program/ProgramService";
import ProgramDetail from "./ProgramDetail";
import styles from "./Program.module.css";
import styles2 from "../Retainer/Retainer.module.css";
import EmptyState from "./EmptyState";
import Update from "./Update";
export default function Program() {
  const [isDetail, setisDetail] = useState(null);
  const [isVisible, setVisible] = useState("fade-in");
  const [activeComponent, setActiveComponent] = useState("emptystate");

  const [isService, setIsService] = useState(false);

  function openDetail(index) {
    setVisible("fade-out");
    setTimeout(() => {
      setisDetail(index);
      setVisible("fade-in");
    }, 200);
  }

  function openService() {
    setVisible("fade-out");
    setTimeout(() => {
      setIsService(true);
      setVisible("fade-in");
    }, 200);
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
      {isService ? (
        <ProgramService handleClick={handleClick} />
      ) : isDetail === null ? (
        <div className={styles.program}>
          <div className={styles.retainerservice}>
            <div className={styles.numberofservice}>
              <span className={styles.oneoffservice}>Program</span>
              <span className={styles.number}>{program.length}</span>
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
          {activeComponent === "programService" && (
            <Update
              handleClick={handleClick}
              isVisible={isVisible}
              openDetail={openDetail}
            />
          )}

          {!isService &&
            activeComponent === "emptystate" &&
            isVisible !== "fade-out" && (
              <EmptyState isService={isService} openService={openService} />
            )}
        </div>
      ) : (
        <ProgramDetail dataprogram={program[isDetail]} />
      )}
    </>
  );
}
