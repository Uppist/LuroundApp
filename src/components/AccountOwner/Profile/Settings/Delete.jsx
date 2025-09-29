/** @format */

import React, { useState } from "react";
import styles from "./Setting.module.css";
import DeleteAccount from "./DeleteAccount";

export default function Delete() {
  const [isDelete, setIsDelete] = useState(false);

  function DeleteAcc() {
    setIsDelete(true);
  }

  function CloseDelete() {
    setIsDelete(false);
  }
  return (
    <>
      <div className={styles.editprofileabout}>
        <span>Delete account</span>
        <p className={styles.p}>
          You will permanently lose all your data on our database after deleting
          your account
        </p>
        <div className={styles.canceldone}>
          {/* <button className={styles.canceltime}>Cancel</button> */}
          <button type='submit' onClick={DeleteAcc} className={styles.donetime}>
            Continue
          </button>

          {isDelete && <DeleteAccount CloseDelete={CloseDelete} />}
        </div>
      </div>
    </>
  );
}
