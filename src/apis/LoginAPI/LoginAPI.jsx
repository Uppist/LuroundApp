/** @format */

import React, { useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { userContext } from "../../components/Context";

export async function handleLogin(logindetail, setUserData, e) {
  if (!logindetail.email || !logindetail.password) {
    alert("Please enter your email and password.");
    return;
  }

  try {
    const { data } = await axios.post(
      "https://api.luround.com/v1/auth/login",
      logindetail,
      { headers: { "Content-Type": "application/json" } }
    );

    localStorage.setItem("Token", data.accessToken);

    toast.success("Login Successful");

    return data.user;
  } catch (error) {
    console.error("Error:", error.response?.data || error.message);
    alert("Unauthorized");
  }
}
