/** @format */

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";

import axios from "axios";
import { useContext } from "react";
import styles2 from "../CreateAccount/style.module.css";
import image from "../../elements/LuroundApp.png";
import google from "../../elements/Google.png";
import Signin from "./Signin";
import Animation from "../Animation/Animation";
import { Link } from "react-router-dom";
import { userContext } from "../../Context";

export default function Login() {
  const navigate = useNavigate();

  const [logindetail, setLogindetail] = useState({ email: "", password: "" });
  const [userData, setUserData] = useContext(userContext);
  const [loading, setLoading] = useState(false);

  const location = useLocation();
  const fromSignup = location.state?.fromSignup;

  const handleLoginDetailChange = (e) => {
    setLogindetail((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  async function handleSubmit(e) {
    e.preventDefault();

    // if (logindetail.password !== userData.password) {
    //   toast.error("Incorrect Password");
    //   return;
    // }
    setLoading(true);
    try {
      const { data } = await axios.post(
        "https://api.luround.com/v1/auth/login",
        logindetail,
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("Token", data.accessToken);

      toast.success("Login Successful");

      const profileRes = await axios.get(
        "https://api.luround.com/v1/profile/get",
        {
          headers: { Authorization: `Bearer ${data.accessToken}` },
        }
      );

      setUserData(profileRes.data);
      setTimeout(() => {
        navigate("/profile-page");
      }, 1000);
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      const errorMsg =
        error.response?.data?.message?.message ||
        error.response?.data?.message ||
        error.message;
      toast.error(errorMsg);
      setLoading(false);
    }
  }

  async function handleGoogleLogin(res) {
    try {
      const googleToken = res.credential;
      const decoded = jwtDecode(googleToken);

      const googleData = {
        email: decoded.email,
        firstName: decoded.given_name,
        lastName: decoded.family_name,
      };

      // Store something in localStorage so it persists
      localStorage.setItem("Token", googleToken);
      localStorage.setItem("User", JSON.stringify(googleData));

      toast.success("Login Successful");

      // setUserData(googleData);
      // navigate("/profile-page", { state: userData });
    } catch (err) {
      console.error("Google login error:", err);
      toast.error("Google login failed");
      setLoading(false);
    }
  }

  const isFormComplete = Object.values(logindetail).every(
    (val) => val.trim() !== ""
  );

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
                isFormComplete={isFormComplete}
                loading={loading}
              />
            </div>
            <div className={styles2.line}>
              <hr />
              <span>OR</span>
              <hr />
            </div>
          </div>
          <div className={styles2.google}>
            <GoogleLogin
              onSuccess={handleGoogleLogin}
              onError={() => toast.error("Google login failed")}
            />

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
