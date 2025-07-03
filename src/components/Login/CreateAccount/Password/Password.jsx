/** @format */

import React from "react";
import InputPassword from "./InputPassword";
import styles from "../style.module.css";

export default function Password({
  password,
  Passcode,
  isPasswordCheck,
  Submit,
}) {
  return (
    <section>
      <form className={styles.container} onSubmit={Submit}>
        <InputPassword password={password} Passcode={Passcode} />
        <p>
          By clicking <label>Create account</label>, you agree to Luround’s{" "}
          <span>Terms of Service</span>, and <span>Privacy Policy</span>.
        </p>

        <button type='submit' disabled={!isPasswordCheck}>
          Create account
        </button>
      </form>
    </section>
  );
}
