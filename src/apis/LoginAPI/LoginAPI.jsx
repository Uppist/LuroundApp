/** @format */

import React from "react";
import axios from "axios";

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
    alert("Login!");

    const profileResponse = await axios.get(
      "https://api.luround.com/v1/profile/get",
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
