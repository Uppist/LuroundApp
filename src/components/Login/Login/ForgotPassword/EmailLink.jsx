/** @format */

import React, { useState } from "react";
import styles2 from "../../CreateAccount/style.module.css";
import image from "../../../elements/LuroundApp.png";
import Animation from "../../Animation/Animation";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function EmailLink() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};
  const [isOtp, setIsOtp] = useState({
    otp: "",
  });

  function handleChange(e) {
    setIsOtp((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const isNext = isOtp.otp.length >= 6;

  function Next() {
    navigate("/reset-password", { state: { data } });
  }
  return (
    <section className={styles2.account}>
      <div className={styles2.imgdiv}>
        <img src={image} alt='' />
        <div className={styles2.create}>
          <div className={styles2.label}>
            <span htmlFor=''>
              You will receive an email with an otp to reset your password.
              Please check your inbox.
            </span>
            <input
              type='text'
              maxLength={6}
              inputMode='numeric'
              name='otp'
              value={isOtp.otp}
              onChange={handleChange}
              onInput={(e) => {
                e.target.value = e.target.value.replace(/[^0-9]/g, "");
              }}
            />
          </div>

          <div className={styles2.container}>
            {/* <Signup /> */}
            <button type='button' onClick={Next} disabled={!isNext}>
              Next
            </button>
          </div>

          <div className={styles2.login}>
            <label htmlFor=''>Already have an account?</label>
            <Link to='/Login'>
              <span>Login</span>
            </Link>
          </div>
        </div>
      </div>
      <Animation />
    </section>
  );
}
