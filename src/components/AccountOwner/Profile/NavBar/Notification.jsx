/** @format */

import styles from "./NavBar.module.css";
import notify from "./Notification.json";
import jenny from "../../../../../public/jennifer.png";
export default function Notification({ onClose, onComponentSwitch }) {
  function Notify(item) {
    onComponentSwitch(item);
  }
  return (
    <div>
      <div className={styles.profiledropdown}>
        <div className={styles.overlaydropdown} onClick={onClose}></div>
        <div className={styles.notificationdropdown}>
          <label>Your Notifications</label>
          <div className={styles.scrollablenotification}>
            {notify.map((data, index) => (
              <div
                className={styles.notificationbooked}
                onClick={() => Notify("bookings")}
              >
                <img src={jenny} />

                <div key={index}>
                  <label className={styles.notificationname}>
                    {data.Name}{" "}
                    <span className={styles.notificationservice}>
                      {data.service}{" "}
                    </span>
                  </label>
                  <label className={styles.notificationperiod}>
                    {data.time}{" "}
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
