/** @format */

import React, { useState } from "react";
import styles from "./Resend.module.css";
import { set } from "@cloudinary/url-gen/actions/variable";
import Email from "./Email";
import Whatsapp from "./Whatsapp";

export default function Resend({ CloseView }) {
  const [isEmail, setIsEmail] = useState(false);
  const [isWhatsapp, setIsWhatsapp] = useState(false);

  function OpenEmail() {
    setIsEmail(true);
  }

  function OpenWhatsapp() {
    setIsWhatsapp(true);
  }
  return (
    <>
      {isEmail ? (
        <Email CloseView={CloseView} />
      ) : (
        <div className={styles.popup}>
          <div className={styles.overlay} onClick={CloseView}></div>
          <div className={styles.resend}>
            <label htmlFor='' onClick={OpenEmail}>
              Send via Email
            </label>
            <label htmlFor='' onClick={OpenWhatsapp}>
              Send via Whatsapp
            </label>
            {isWhatsapp && <Whatsapp CloseView={CloseView} />}
            <label htmlFor=''>Save</label>
            <label htmlFor=''>Download</label>
          </div>
        </div>
      )}
    </>
  );
}
