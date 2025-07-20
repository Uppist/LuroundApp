/** @format */

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { handleLogin } from "../../../apis/LoginAPI/LoginAPI";
import axios from "axios";
import { useContext } from "react";
import styles from "./Login.module.css";
import styles2 from "../CreateAccount/style.module.css";
import image from "../../elements/LuroundApp.png";
import google from "../../elements/Google.png";
import Signin from "./Signin";
import Animation from "../Animation/Animation";
import { Link } from "react-router-dom";
import { userContext } from "../../Context";
import { ToastContainer } from "react-toastify";

export default function Login() {
  const navigate = useNavigate();

  const [logindetail, setLogindetail] = useState({ email: "", password: "" });
  const [userData, setUserData] = useContext(userContext);

  const location = useLocation();
  const fromSignup = location.state?.fromSignup;

  const handleLoginDetailChange = (e) => {
    setLogindetail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = await handleLogin(logindetail);
    if (user) {
      setUserData(user);
    }
    console.log("userData from context:", userData);
    navigate("/profile-page");
  };

  // useEffect(() => {
  //   if (userData.email && !fromSignup) {
  //   }
  // }, [userData, navigate, fromSignup]);

  return (
    <section className={styles2.account}>
      <div className={styles2.imgdiv}>
        <img src={image} alt='Luround' />
        <div className={styles2.create}>
          <div className={styles2.label}>
            <label>Log into account</label>
            <span>Welcome Back!</span>
          </div>
          <div className={styles2.signup}>
            <div className={styles2.container}>
              <Signin
                Submit={handleSubmit}
                logindetail={logindetail}
                LoginDetail={handleLoginDetailChange}
              />
            </div>
            <div className={styles2.line}>
              <hr />
              <span>OR</span>
              <hr />
            </div>
          </div>
          <div className={styles2.google}>
            <div className={styles2.googlebutton}>
              <img src={google} alt='Google logo' />
              <button type='button'>Login with Google</button>
            </div>
            <div className={styles2.login}>
              <label>Don't have an account?</label>
              <Link to='/'>
                <span>Create account</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Animation />
      <ToastContainer />
    </section>
  );
}
