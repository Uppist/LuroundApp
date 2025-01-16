/** @format */

import React from "react";
import styles from "./Setting.module.css";
import PasswordChange from "./PasswordChange";
import ChangeWithdrawalPin from "./ChangeWithdrawalPin";
import ForgotWithdrawalPin from "./ForgotWithdrawalPin";
import CustomizeURL from "./CustomizeURL";
import Notifications from "./Notifications";
import Delete from "./Delete";

export default function Settings() {
  return (
    <section className={styles.settings}>
      <label>Settings</label>
      <div className={styles.settingscontainer}>
        <div className={styles.settingsfirst}>
          <div>
            <span>Change Login password</span>
            <div className={styles.withdraw}>
              <label>Withdrawal Pin management</label>
              <svg
                width='20'
                height='20'
                viewBox='0 0 20 20'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7.93066 5.86086L12.0686 9.99879L7.93066 14.1367'
                  stroke='#1D2E2E'
                  stroke-opacity='0.8'
                  stroke-width='2'
                  stroke-miterlimit='10'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                />
              </svg>
            </div>
            <span>Bank account details</span>
            <span>Customize your URL</span>
            <span>Notifications</span>
            <span>Delete account</span>
          </div>
        </div>

        <div className={styles.settingssecond}>
          <PasswordChange />
          <ChangeWithdrawalPin />
          <ForgotWithdrawalPin />

          <div className={styles.bank}>
            <label>Bank account details</label>
            <svg
              width='48'
              height='40'
              viewBox='0 0 48 40'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V32C48 36.4183 44.4183 40 40 40H8C3.58172 40 0 36.4183 0 32V8Z'
                fill='#00CCCC'
              />
              <path
                d='M22.7757 28.5714V21.2245H15.4287V18.7755H22.7757V11.4286H25.2246V18.7755H32.5716V21.2245H25.2246V28.5714H22.7757Z'
                fill='#EBFFFF'
              />
            </svg>
          </div>
          <CustomizeURL />
          <Notifications />
          <Delete />
        </div>
      </div>
    </section>
  );
}
