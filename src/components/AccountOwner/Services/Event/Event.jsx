/** @format */
import { useState } from "react";
import event from "./event.json";
import EventService from "./EventService";
import EventDetail from "./EventDetail";
import styles from "./Event.module.css";
import styles2 from "../Retainer/Retainer.module.css";
import Update from "./Update";
import EmptyState from "./EmptyState";
export default function Event() {
  const [isDetail, setisDetail] = useState(null);
  const [isService, setIsService] = useState(false);
  const [activeComponent, setActiveComponent] = useState("emptystate");

  function openDetail(index) {
    setisDetail(index);
  }

  function openService() {
    setIsService(true);
  }

  function closeService() {
    setIsService(false);
  }
  const handleClick = (container) => {
    // setVisible("fade-out");
    if (isService) setIsService(false);

    setTimeout(() => {
      setActiveComponent(container);
      // setVisible("fade-in");
    }, 200);
  };

  return (
    <>
      {isService ? (
        <EventService closeService={closeService} handleClick={handleClick} />
      ) : isDetail === null ? (
        <div className={styles.event}>
          <div className={styles2.retainerservice}>
            <div className={styles2.numberofservice}>
              <span className={styles2.oneoffservice}>Event</span>
              <span className={styles2.number}>{event.length}</span>
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
            </div>
          </div>
          {activeComponent === "eventService" && (
            <Update
              handleClick={handleClick}
              // isVisible={isVisible}
              openDetail={openDetail}
            />
          )}

          {!isService && activeComponent === "emptystate" && (
            <EmptyState isService={isService} openService={openService} />
          )}
        </div>
      ) : (
        <EventDetail dataevent={event[isDetail]} />
      )}
    </>
  );
}
