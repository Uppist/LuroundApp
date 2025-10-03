/** @format */

import styles from "./NavBar.module.css";
import { useContext } from "react";
import { NotificationContext } from "../../../Context";
export default function Notification({ onClose, onComponentSwitch }) {
  function Notify(item) {
    onComponentSwitch(item);
  }

  const [notification, setNotification] = useContext(NotificationContext);

  console.log(notification);
  return (
    <div>
      <div className={styles.profiledropdown}>
        <div className={styles.overlaydropdown} onClick={onClose}></div>
        <div className={styles.notificationdropdown}>
          <label>Your Notifications</label>
          <div className={styles.scrollablenotification}>
            {notification.map((data, index) => (
              <div
                className={styles.notificationbooked}
                // onClick={() => Notify("bookings")}
              >
                {/* <img src={} /> */}

                <div key={index}>
                  <label className={styles.notificationname}>
                    {data.body}{" "}
                    <span className={styles.notificationservice}>
                      {data.service}{" "}
                    </span>
                  </label>
                  <label className={styles.notificationperiod}>
                    {data.title}{" "}
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
