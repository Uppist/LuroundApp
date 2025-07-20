/** @format */

import axios, { AxiosHeaders } from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const userContext = createContext();

export default function Context({ children }) {
  const [userData, setUserData] = useState({});
  const [userService, setUserService] = useState({});

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      axios
        .get("https://api.luround.com/v1/profile/get", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => setUserData(res.data))
        .catch((err) => setUserData({}));

      axios
        .get(
          "https://api.luround.com/v1/services/get-services?service_type=one-off",
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res.data);
          setUserService(res.data);
        });
    }
  }, []);

  useEffect(() => {
    console.log("userService updated:", userService);
  }, [userService]);

  return (
    <userContext.Provider
      value={[userData, setUserData, userService, setUserService]}
    >
      {children}
    </userContext.Provider>
  );
}
