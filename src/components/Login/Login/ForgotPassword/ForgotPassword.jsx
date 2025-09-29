/** @format */

import React, { useState } from "react";
import styles2 from "../../CreateAccount/style.module.css";
import image from "../../../elements/LuroundApp.png";
import Animation from "../../Animation/Animation";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { textStyle } from "@cloudinary/url-gen/backwards/transformationProcessing/processLayer";
import { toast } from "react-toastify";

export default function ForgotPassword() {
  const [forgotDetail, setForgotDetail] = useState({ email: "" });

  function handleDetail(e) {
    setForgotDetail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const navigate = useNavigate();
  function Next() {
    console.log(forgotDetail.email);

    const data = {
      email: forgotDetail.email,
    };
    axios
      .put("https://api.luround.com/v1/send-reset-password-otp", data)
      .then((res) => {
        console.log(res.data);
        toast.success(
          "You will receive a mail with instructions to reset your password. Please check your inbox"
        );

        navigate("/resend-email", { state: { data } });
      })
      .catch((err) => {
        console.log("ERROR:", err);
        toast.error(err.response.data.message.message);
      });
  }

  const isNext = forgotDetail.email.trim() !== "";
  return (
    <section className={styles2.account}>
      <div className={styles2.imgdiv}>
        <img src={image} alt='' />
        <div className={styles2.create}>
          <div className={styles2.label}>
            <label htmlFor=''>Forgot Password</label>
            <span>Welcome Back!</span>
          </div>

          <div className={styles2.form2}>
            <label htmlFor=''>Email address</label>
            <input
              type='email'
              name='email'
              id=''
              value={forgotDetail.email}
              onChange={handleDetail}
              placeholder='youremail@address.com'
            />
          </div>
          <div className={styles2.container}>
            {/* <Signup /> */}
            {/* <Link to='/resend-email'> */}
            <button type='button' onClick={Next} disabled={!isNext}>
              Next
            </button>
            {/* </Link> */}
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
