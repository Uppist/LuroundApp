/** @format */
import { useContext, useState } from "react";
import styles from "./Event.module.css";
import styles2 from "../Retainer/Retainer.module.css";
import Update from "./UpdatedEvent/Update";
import EmptyState from "./EmptyState";
import { ServiceContext, userContext } from "../../../Context";
import { useNavigate } from "react-router-dom";
export default function Event() {
  const [isDetail, setisDetail] = useState(null);
  const [isService, setIsService] = useState(false);
  const [activeComponent, setActiveComponent] = useState("emptystate");

  const [userService, setUserService] = useContext(ServiceContext);

  // function openDetail(index) {
  //   setisDetail(index);
  // }

  const navigate = useNavigate();

  function openService() {
    navigate("/create");
  }

  // function closeService() {
  //   setIsService(false);
  // }
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
      <div className={styles.event}>
        <div className={styles2.retainerservice}>
          <div className={styles2.numberofservice}>
            <span className={styles2.oneoffservice}>Event</span>
            <span className={styles2.number}>
              {Array.isArray(userService) &&
                userService.filter(
                  (service) => service.service_type === "event"
                ).length > 0 && (
                  <span className={styles.number}>
                    {
                      userService.filter(
                        (service) => service.service_type === "event"
                      ).length
                    }
                  </span>
                )}
            </span>
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

        {Array.isArray(userService) &&
        userService.some((service) => service.service_type === "event") ? (
          <Update
            handleClick={handleClick}

            // isVisible={isVisible}
            // openDetail={openDetail}
          />
        ) : (
          <EmptyState isService={isService} openService={openService} />
        )}
      </div>
    </>
  );
}
