/** @format */

/** @format */
import { useState } from "react";

import styles from "./Retainer.module.css";
import RetainerDetail from "./RetainerDetail";
import retainer from "./retainer.json";
import RetainerService from "./RetainerService";
import EmptyState from "./EmptyState";
import Update from "./Update";
export default function Retainer() {
  const [isDetail, setisDetail] = useState(null);
  const [isService, setisService] = useState(null);
  const [isVisible, setVisible] = useState("fade-in");
  const [activeComponent, setActiveComponent] = useState("emptystate");

  function openDetail(index) {
    setVisible("fade-out");
    setTimeout(() => {
      setisDetail(index);
      setVisible("fade-in");
    }, 200);
  }

  const handleClick = (container) => {
    setVisible("fade-out");
    if (isService) setisService(false);

    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
    }, 200);
  };

  function openService() {
    setisService(true);
  }

  return (
    <>
      {isService ? (
        <RetainerService handleClick={handleClick} />
      ) : isDetail === null ? (
        <div className={styles.retainer}>
          <div className={styles.retainerservice}>
            <div className={styles.numberofservice}>
              <span className={styles.oneoffservice}>Retainers</span>
              <span className={styles.number}>{retainer.length}</span>
            </div>
            <div>
              <button onClick={openService} className={styles.addservice}>
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
            </div>
          </div>
          {activeComponent === "retainerService" && (
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
        <RetainerDetail dataretainer={retainer[isDetail]} />
      )}
    </>
  );
}
