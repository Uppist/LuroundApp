/** @format */

import React, { useState } from "react";
import styles from "./Setting.module.css";
import { toast } from "react-toastify";
import axios from "axios";

export default function PasswordChange() {
  const [password, setPassword] = useState({
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setPassword((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function Save() {
    const token = localStorage.getItem("Token");
    const data = {
      old_password: password.oldPassword,
      new_password: password.newPassword,
    };
    if (password.newPassword !== password.confirmPassword) {
      toast.error("Your password must match!");
      return;
    }

    if (password.oldPassword === password.newPassword) {
      toast.error("Old password and new password should not be the same!");
      return;
    }

    // if (password.newPassword === password.confirmPassword && ) {
    axios
      .put("https://api.luround.com/v1/change-password", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Updated");
        setPassword({
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        });
      })
      .catch((err) => {
        console.log(err.response.data.message.message);
        toast.error(err.response.data.message.message);
      });
    // }

    console.log(password);
  }

  const isSave =
    password.oldPassword.trim() !== "" &&
    password.newPassword.trim() !== "" &&
    password.confirmPassword.trim() !== "";
  return (
    <>
      <div className={styles.editprofileabout}>
        <span>Change password</span>
        <div className={styles.password}>
          <div>
            <label htmlFor=''>Current password</label>
            <input
              type='password'
              name='oldPassword'
              value={password.oldPassword}
              onChange={handleChange}
              id=''
              placeholder='Current password'
            />
          </div>
          <div>
            <label htmlFor=''>New password</label>
            <input
              type='password'
              name='newPassword'
              value={password.newPassword}
              onChange={handleChange}
              id=''
              placeholder='New password'
            />
          </div>
          <div>
            <label htmlFor=''>Confirm new password</label>
            <input
              type='password'
              name='confirmPassword'
              value={password.confirmPassword}
              onChange={handleChange}
              id=''
              placeholder='Confirm new password'
            />
          </div>
        </div>
        <div className={styles.canceldone}>
          {/* <button className={styles.canceltime}>Cancel</button> */}
          <button
            type='button'
            onClick={Save}
            disabled={!isSave}
            className={styles.donetime}
          >
            Save
          </button>
        </div>
      </div>
    </>
  );
}
