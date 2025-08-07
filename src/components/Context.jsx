/** @format */

import axios, { AxiosHeaders } from "axios";
import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const userContext = createContext();
export const ServiceContext = createContext();
export const bookingsContext = createContext();

export default function Context({ children }) {
  const [userData, setUserData] = useState({});
  const [userService, setUserService] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [bookingsId, setBookingsId] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("Token");
    if (token) {
      axios
        .get("https://api.luround.com/v1/profile/get", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res);
          setUserData(res.data);
        })
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

      axios
        .get(`https://api.luround.com/v1/booking/my-bookings`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("Booking:", res.data);
          const data = res.data;
          setBookings(data);
          const ids = data.map((booking) => booking.bookingId); // Adjust based on actual key
          setBookingsId(ids);
        })
        .catch((err) => console.error("Error fetching booking:", err));
    }
  }, []);

  useEffect(() => {
    console.log("userService updated:", userService);
  }, [userService]);

  //get bookings

  useEffect(() => {
    console.log("bookingsId from context:", bookingsId);
  }, [bookingsId]);

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
