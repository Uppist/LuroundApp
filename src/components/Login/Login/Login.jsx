/** @format */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
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

  async function handleLogin(e) {
    e.preventDefault();
    if (!logindetail.email || !logindetail.password) {
      alert("Please enter your email and password.");
      return;
    }

    try {
      const { data } = await axios.post(
        "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/auth/login",
        logindetail,
        { headers: { "Content-Type": "application/json" } }
      );

      localStorage.setItem("Token", data.accessToken);
      alert("Login successful!");

      const profileResponse = await axios.get(
        "https://luround-api-7ad1326c3c1f.herokuapp.com/api/v1/profile/get",
        {
          headers: { Authorization: `Bearer ${data.accessToken}` },
          params: { email: logindetail.email },
        }
      );

      console.log("Full API Response:", profileResponse.data);

      setUserData({
        name: profileResponse.data.displayName || "",
        company: profileResponse.data.company || "",
        photoUrl: profileResponse.data.photoUrl || "",
        url: profileResponse.data.luround_url || "",
        logo: profileResponse.data.logo_url || "",
        about: profileResponse.data.about || "",
        socialLinks: profileResponse.data.media_links || [],
        occupation: profileResponse.data.occupation || "",
        email: profileResponse.data.email || "",
      });
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Unauthorized");
    }
  }

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
                Submit={handleLogin}
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
