/** @format */

import axios, { AxiosHeaders } from "axios";
import React, { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const userContext = createContext();
export const ServiceContext = createContext();
export const bookingsContext = createContext();
export const ContactContext = createContext();
export const TransactionContext = createContext();
export const StorefrontContext = createContext();
export const OrderHistoryContext = createContext();
export const NotificationContext = createContext();
export const QuotesContext = createContext();

export default function Context({ children }) {
  const [userData, setUserData] = useState({});
  const [userService, setUserService] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [bookingsId, setBookingsId] = useState([]);
  const [isContacts, setIsContacts] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [transactionBalance, setTransactionBalance] = useState(0);
  const [storeFront, setStoreFront] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [notification, setNotification] = useState([]);
  const [quotes, setQuotes] = useState([]);
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

  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("Token");

    //get user data
    if (token) {
      axios
        .get("https://api.luround.com/v1/profile/get", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          setUserData(res.data);
        })
        .catch((err) => {
          navigate("/Login");
          toast.error("Session Expired, Please Login Again");
        });

      //get services and service type
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

      //get bookings
      axios
        .get(`https://api.luround.com/v1/booking/my-bookings`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log("Booking:", res.data);
          const data = res.data;
          setBookings(data);
          console.log(bookings);
        })
        .catch((err) => console.error("Error fetching booking:", err));
    }

    //get contacts

    axios
      .get("https://api.luround.com/v1/crm/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setIsContacts(res.data);
      });

    //get Transactions
    axios
      .get("https://api.luround.com/v1/transactions/get", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Transactions:", res.data);
        setTransactions(res.data);
      });

    //get transaction balance

    axios
      .get("https://api.luround.com/v1/wallet/balance", {
        headers: { Authorization: `Bearer  ${token}` },
      })
      .then((res) => {
        console.log("balance", res.data);
        setTransactionBalance(res.data);
      });

    //get storefront

    axios
      .get("https://api.luround.com/v1/storefront/user-products", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setStoreFront(res.data);
      });

    //get order history

    axios
      .get("https://api.luround.com/v1/storefront/order-history", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setOrderHistory(res.data);
      });

    //get user notifications
    axios
      .get("https://api.luround.com/v1/notifications/user-notifications", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setNotification(res.data);
      });

    axios
      .get("https://api.luround.com/v1/quotes/sent-quotes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Quotes:", res.data);
        setQuotes(res.data);
      })
      .catch((err) => console.error("Error fetching quotes:", err));
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
          <ContactContext.Provider value={[isContacts, setIsContacts]}>
            <TransactionContext.Provider
              value={[
                transactions,
                setTransactions,
                transactionBalance,
                setTransactionBalance,
              ]}
            >
              <StorefrontContext.Provider value={[storeFront, setStoreFront]}>
                <OrderHistoryContext.Provider
                  value={[orderHistory, setOrderHistory]}
                >
                  <NotificationContext.Provider
                    value={[notification, setNotification]}
                  >
                    <QuotesContext.Provider value={[quotes, setQuotes]}>
                      {children}
                    </QuotesContext.Provider>
                  </NotificationContext.Provider>
                </OrderHistoryContext.Provider>
              </StorefrontContext.Provider>{" "}
            </TransactionContext.Provider>
          </ContactContext.Provider>
        </bookingsContext.Provider>
      </ServiceContext.Provider>
    </userContext.Provider>
  );
}
