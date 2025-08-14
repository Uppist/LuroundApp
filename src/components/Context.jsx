/** @format */

import axios, { AxiosHeaders } from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation } from "react-router-dom";

export const userContext = createContext();
export const ServiceContext = createContext();
export const bookingsContext = createContext();

export default function Context({ children }) {
  const [userData, setUserData] = useState({});
  const [userService, setUserService] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [bookingsId, setBookingsId] = useState([]);

  const location = useLocation();

  const pathname = location.pathname;

  let type = "";

  if (pathname.includes("retainer")) {
    type = "retainer";
  } else if (pathname.includes("oneoff")) {
    type = "one-off";
  } else if (pathname.includes("program")) {
    type = "program";
  } else if (pathname.includes("event")) {
    type = "event";
  }

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      axios
        .get("https://api.luround.com/v1/profile/get", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => setUserData({}));

      if (type) {
        axios
          .get(
            `https://api.luround.com/v1/services/get-services?service_type=${type}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => {
            console.log(res.data);
            setUserService(res.data);
          });
      }

      axios
        .get(`https://api.luround.com/v1/booking/my-bookings`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("Booking:", res.data);
          const data = res.data;
          setBookings(data);
          console.log(bookings);
          // const ids = data.map((booking) => booking.BookingId);
          // setBookingsId(ids);
          // console.log(bookingsId);
        })
        .catch((err) => console.error("Error fetching booking:", err));
    }
  }, [pathname]);

  useEffect(() => {
    console.log("userService updated:", userService);
  }, [userService]);

  //get bookings

  useEffect(() => {
    console.log("bookingsId from context:", bookings);
  }, [bookings]);

  return (
    <userContext.Provider value={[userData, setUserData]}>
      <ServiceContext.Provider value={[userService, setUserService]}>
        <bookingsContext.Provider
          value={{ bookings, setBookings, bookingsId, setBookingsId }}
        >
          {children}
        </bookingsContext.Provider>
      </ServiceContext.Provider>
    </userContext.Provider>
  );
}
