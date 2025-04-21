/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../../../apis/LoginAPI/LoginAPI";
import axios from "axios";
import styles from "./Login.module.css";
import styles2 from "../CreateAccount/style.module.css";
import image from "../../elements/LuroundApp.png";
import google from "../../elements/Google.png";
import Signin from "./Signin";
import Animation from "../Animation/Animation";
import { Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [logindetail, setLogindetail] = useState({ email: "", password: "" });
  const [userData, setUserData] = useState({
    name: "",
    company: "",
    photoUrl: "",
    url: "",
    logo: "",
    about: "",
    socialLinks: [],
    occupation: "",
    email: "",
  });

  const handleLoginDetailChange = (e) => {
    setLogindetail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(logindetail, setUserData); // Call the API function
  };

  useEffect(() => {
    if (userData.email) {
      navigate("/Profile-page", { state: userData });
    }
  }, [userData, navigate]);

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
              <button type='submit'>Login with Google</button>
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
    </section>
  );
}
