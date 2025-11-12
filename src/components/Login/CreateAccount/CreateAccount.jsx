/** @format */

import styles from "./style.module.css";
import image from "../../elements/LuroundApp.png";
import google from "../../elements/Google.png";
import { Link, useNavigate } from "react-router-dom";
import Animation from "../Animation/Animation";
import Signup from "./Signup";
import { useState } from "react";
import axios from "axios";
import Password from "./Password/Password";
import { toast } from "react-toastify";
import CircularProgress from "@mui/material/CircularProgress";

export default function CreateAccount() {
  const [logindetail, setLogindetail] = useState({
    email: "",
    firstName: "",
    lastName: "",
  });

  const [password, setPassword] = useState({
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  function LoginDetail(e) {
    setLogindetail({ ...logindetail, [e.target.name]: e.target.value });
  }

  function Passcode(e) {
    setPassword({ ...password, [e.target.name]: e.target.value });
  }

  const Submit = async (e) => {
    e.preventDefault();

    if (password.password !== password.confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    const data = {
      email: logindetail.email,
      password: password.password,
      firstName: logindetail.firstName,
      lastName: logindetail.lastName,
      user_nToken: "token",
    };

    try {
      const response = await axios.post(
        "https://api.luround.com/v1/sign-up",
        data
      );

      const accessToken = response.data.accessToken;

      // localStorage.setItem("userData", JSON.stringify(data));

      const profileResponse = await axios.get(
        "https://api.luround.com/v1/profile/get",
        {
          headers: { Authorization: `Bearer ${accessToken}` },
          params: { email: logindetail.email },
        }
      );

      toast.success("Account created successfully!");
      setTimeout(() => {
        navigate("/Login");
      }, 1000);
    } catch (error) {
      console.error("Sign-up or profile fetch failed:", error);
      toast.error(error.response.data.message.message);
    }
  };

  const isFormComplete = Object.values(logindetail).every(
    (val) => val.trim() !== ""
  );

  const isPasswordCheck =
    password.password.length >= 8 && password.confirmPassword.length >= 8;

  const [nextStep, setNextStep] = useState(false);

  function NextStep() {
    setNextStep(true);
  }

  return (
    <section className={styles.account}>
      <div className={styles.imgdiv}>
        <img src={image} alt='' />
        <div className={styles.create}>
          <div className={styles.label}>
            <label htmlFor=''>Create your account</label>
            <span>{nextStep ? "Almost there!" : "Let's get started"}</span>
          </div>

          <div className={styles.signup}>
            {nextStep ? (
              <Password
                password={password}
                Passcode={Passcode}
                isPasswordCheck={isPasswordCheck}
                Submit={Submit}
              />
            ) : (
              <form className={styles.container}>
                <Signup logindetail={logindetail} LoginDetail={LoginDetail} />
                <button
                  type='button'
                  disabled={!isFormComplete || loading}
                  onClick={NextStep}
                >
                  {loading ? (
                    <CircularProgress size={20} color='inherit/' />
                  ) : (
                    "Login"
                  )}
                </button>
              </form>
            )}

            <div className={styles.line}>
              <hr />
              <span>OR</span>
              <hr />
            </div>
          </div>

          <div className={styles.google}>
            <div className={styles.googlebutton}>
              <img src={google} alt='google logo' />
              <button type='submit'>Sign up with Google</button>
            </div>
            <div className={styles.login}>
              <label htmlFor=''>Already have an account?</label>
              <Link to='/Login' state={{ fromSignup: true }}>
                <span>Login</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Animation />
    </section>
  );
}
