/** @format */

import React, { useState } from "react";
import styles from "../../CreateAccount/style.module.css";
import image from "../../../elements/LuroundApp.png";
import Animation from "../../Animation/Animation";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

export default function ResetPassword() {
  const location = useLocation();

  const emailData = location.state.data.data.email || {};
  const [passwordChange, setPasswordChange] = useState({
    newpassword: "",
    confirmpassword: "",
  });

  function handleChange(e) {
    setPasswordChange((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const isReset =
    passwordChange.newpassword.trim() !== "" &&
    passwordChange.confirmpassword.trim() !== "";

  const navigate = useNavigate();
  function Reset() {
    const data = {
      otp: "",
      email: emailData,
      new_password: passwordChange.newpassword,
    };
    if (passwordChange.newpassword === passwordChange.confirmpassword) {
      toast.success("Password Match!");
      navigate("/password-updated");

      axios
        .put("https://api.luround.com/v1/reset-password", data)
        .then((res) => console.log(res.data))
        .catch((err) => {
          console.log(err.data);
        });
    } else {
      toast.error("Please make sure your password match");
    }
    console.log(data);
  }
  return (
    <section className={styles.account}>
      <div className={styles.imgdiv}>
        <img src={image} alt='' />
        <div className={styles.create}>
          <div className={styles.label}>
            <label htmlFor=''>Reset password</label>
            <span>Enter a new password to reset</span>
          </div>

          <div className={styles.signup}>
            <div className={styles.container}>
              <form action='' className={styles.form}>
                <div>
                  <label htmlFor=''>New Password</label>
                  <input
                    type='password'
                    name='newpassword'
                    id=''
                    value={passwordChange.newpassword}
                    placeholder='Input password'
                    onChange={handleChange}
                  />
                </div>{" "}
                <div>
                  <label htmlFor=''>Confirm Password</label>
                  <input
                    type='password'
                    name='confirmpassword'
                    id=''
                    placeholder='Re-type password'
                    value={passwordChange.confirmpassword}
                    onChange={handleChange}
                  />
                </div>{" "}
              </form>
              {/* <Link to='/password-updated'> */}
              <button type='button' disabled={!isReset} onClick={Reset}>
                Reset
              </button>
              {/* </Link> */}
            </div>
          </div>

          <div className={styles.login}>
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
