/** @format */

import React, { useState } from "react";
import styles from "./Setting.module.css";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function DeleteAccount({ CloseDelete, loading, setLoading }) {
  const [isTextarea, setIsTextarea] = useState(false);

  function Click(index) {
    if (index === 5) {
      setIsTextarea((prev) => !prev);
    }
  }

  const navigate = useNavigate();
  function Delete() {
    setLoading(true);
    const token = localStorage.getItem("Token");
    axios
      .delete("https://api.luround.com/v1/user/account/delete", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        localStorage.removeItem("Token");
        toast.error("Account Deleted");
        setTimeout(() => {
          navigate("/");
        }, 900);

        setLoading(false);
      });
  }
  return (
    <section>
      {" "}
      <div className='popupcancel'>
        <div className='overlay' onClick={CloseDelete}></div>
        <div className={styles.account}>
          <div className={styles.bankcontainer}>
            <div className={styles.accountcontainer}>
              <span>Why are you deleting your account</span>
            </div>
            <div className={styles.whydelete}>
              {[
                "The software is not what i expected",
                "There are too many bugs ",
                "I don't use Luround anymore",
                "I do not find the features valuable",
                "Safety or privacy concern",
                "Another reason",
              ].map((option, index) => (
                <div key={index} className={styles.checkdelete}>
                  <input
                    type='checkbox'
                    className={styles.checkbox}
                    id={`check-${index}`}
                    onChange={() => Click(index)}
                  />
                  <label htmlFor={`check-${index}`}>{option}</label>
                </div>
              ))}

              {isTextarea && <textarea placeholder='your text'></textarea>}
            </div>
          </div>
          <div className={styles.checkdelete}>
            <input type='checkbox' className={styles.checkbox} id='delete' />
            <label htmlFor='delete' className={styles.package}>
              By continuing, you wish to continue deleting your account
              permanently.
            </label>
          </div>

          <div className={styles.canceldone}>
            <button className={styles.canceltime} onClick={CloseDelete}>
              Cancel
            </button>
            <button className={styles.delete} onClick={Delete}>
              {loading ? (
                <CircularProgress size={20} color='inherit/' />
              ) : (
                "Delete"
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
