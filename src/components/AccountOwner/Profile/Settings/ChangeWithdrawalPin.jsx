/** @format */

import React, { useState } from "react";
import styles from "./Setting.module.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function ChangeWithdrawalPin() {
  const [pins, setPins] = useState({
    current_pin: "",
    new_pin: "",
    confirm_pin: "",
  });

  function handlePin(e) {
    setPins((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const token = localStorage.getItem("Token");
  function Save() {
    const data = {
      old_pin: pins.current_pin,
      new_pin: pins.new_pin,
    };

    if (pins.new_pin !== pins.confirm_pin) {
      toast.error("new pins must match!");
      setPins({
        current_pin: "",
        new_pin: "",
        confirm_pin: "",
      });
      return;
    }

    if (pins.current_pin === pins.new_pin) {
      toast.error("Old and new pin cannot be the same");
      setPins({
        current_pin: "",
        new_pin: "",
        confirm_pin: "",
      });
      return;
    }

    axios
      .put("https://api.luround.com/v1/wallet/reset-wallet-pin", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        toast.success("Withdrawal pin updated!");
      })
      .catch((err) => {
        toast.error(err.response.data.message.message);
        console.log(err);
      });
    // console.log(pins);
    setPins({
      current_pin: "",
      new_pin: "",
      confirm_pin: "",
    });
  }

  const isSave =
    pins.current_pin.length >= 4 &&
    pins.new_pin.length >= 4 &&
    pins.confirm_pin.length >= 4;
  return (
    <>
      <div className={styles.editprofileabout}>
        <span>Change withdrawal pin</span>
        <div className={styles.password}>
          <div>
            <label htmlFor=''>Current PIN</label>
            <input
              type='password'
              name='current_pin'
              value={pins.current_pin}
              onChange={handlePin}
              id=''
              maxLength={4}
              placeholder='Current pin'
            />
          </div>
          <div>
            <label htmlFor=''>New PIN</label>
            <input
              type='password'
              name='new_pin'
              maxLength={4}
              value={pins.new_pin}
              onChange={handlePin}
              id=''
              placeholder='New pin'
            />
          </div>
          <div>
            <label htmlFor=''>Confirm new PIN</label>
            <input
              type='password'
              maxLength={4}
              name='confirm_pin'
              value={pins.confirm_pin}
              onChange={handlePin}
              id=''
              placeholder='Confirm new pin'
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
