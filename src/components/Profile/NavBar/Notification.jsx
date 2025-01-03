/** @format */

import styles from "./NavBar.module.css";
import jenny from "../../../../public/jennifer.png";
export default function Notification({ onClose }) {
  return (
    <div>
      <div className={styles.profiledropdown}>
        <div className={styles.overlaydropdown} onClick={onClose}></div>
        <div className={styles.notificationdropdown}>
          <label>Your Notifications</label>
          <div className={styles.scrollablenotification}>
            <div className={styles.notificationbooked}>
              <img src={jenny} />
              <div>
                <label className={styles.notificationname}>
                  Jennifer Merit{" "}
                  <span className={styles.notificationservice}>
                    booked your service{" "}
                  </span>
                </label>
                <label className={styles.notificationperiod}>1 hour ago</label>
              </div>
            </div>

            <div className={styles.notificationbooked}>
              <img src={jenny} />
              <div>
                <label className={styles.notificationname}>
                  Jennifer Merit{" "}
                  <span className={styles.notificationservice}>
                    booked your service{" "}
                  </span>
                </label>
                <label className={styles.notificationperiod}>1 hour ago</label>
              </div>
            </div>

            <div className={styles.notificationbooked}>
              <img src={jenny} />
              <div>
                <label className={styles.notificationname}>
                  Jennifer Merit{" "}
                  <span className={styles.notificationservice}>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
              </div>
            </div>

            <div className={styles.notificationbooked}>
              <img src={jenny} />
              <div>
                <label className={styles.notificationname}>
                  Jennifer Merit{" "}
                  <span className={styles.notificationservice}>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
