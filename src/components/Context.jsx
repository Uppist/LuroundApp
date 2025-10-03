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
export const BankContext = createContext();
export const StorefrontContext = createContext();
export const OrderHistoryContext = createContext();
export const NotificationContext = createContext();
export const QuotesContext = createContext();
export const InvoiceContext = createContext();
export const ReceiptContext = createContext();
export const ProductContext = createContext();

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
  const [savedQuotes, setSavedQuote] = useState([]);
  const [invoices, setInvoices] = useState([]);
  const [notPaidInvoices, setNotPaidInvoices] = useState([]);
  const [receipt, setReceipt] = useState([]);
  const [saveReceipt, setSaveReceipt] = useState([]);
  const [savedBanks, setSavedBanks] = useState([]);
  const [product, setProduct] = useState([]);

  const location = useLocation();

  useEffect(() => {
    const savedUser = localStorage.getItem("User");
    if (savedUser) {
      setUserData(JSON.parse(savedUser));
    }
  }, []);

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

    //get saved Banks

    axios
      .get(
        `https://api.luround.com/v1/wallet/get-saved-banks?userId=${userData._id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        console.log("Saved accounts:", res.data);
        // console.log(userData._id);

        setSavedBanks(res.data);
      })
      .catch((err) => {
        console.error("Error fetching saved accounts:", err);
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

    //get save quotes
    axios
      .get("https://api.luround.com/v1/quotes/saved-quotes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Quotes:", res.data);
        setSavedQuote(res.data);
      })
      .catch((err) => console.error("Error fetching quotes:", err));

    //get send quotes

    axios
      .get("https://api.luround.com/v1/quotes/sent-quotes", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Quotes:", res.data);
        setQuotes(res.data);
      })
      .catch((err) => console.error("Error fetching quotes:", err));

    //get invoices for paid invoice
    axios
      .get("https://api.luround.com/v1/invoice/paid-invoices", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Invoices:", res.data);
        setInvoices(res.data);
      })
      .catch((err) => console.error("Error fetching invoices:", err));

    //get invoices for unpaid invoice
    axios
      .get("https://api.luround.com/v1/invoice/unpaid-invoices", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Not Paid Invoices:", res.data);
        setNotPaidInvoices(res.data);
      })
      .catch((err) => console.error("Error fetching not paid invoices:", err));

    //get saved receipts
    axios
      .get("https://api.luround.com/v1/receipt/saved-receipts", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Receipts:", res.data);
        setSaveReceipt(res.data);
      })
      .catch((err) => console.error("Error fetching receipts:", err));

    //get sent receipt
    axios
      .get("https://api.luround.com/v1/receipt/receipts", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("Receipts:", res.data);
        setReceipt(res.data);
      })
      .catch((err) => console.error("Error fetching receipts:", err));

    //get product insight

    axios
      .get(
        `https://api.luround.com/v1/storefront/product-insight?productId=${storeFront._id}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then((res) => {
        console.log(res.data);
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pathname, userData._id, storeFront._id]);

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
              <BankContext.Provider value={[savedBanks, setSavedBanks]}>
                <StorefrontContext.Provider value={[storeFront, setStoreFront]}>
                  <OrderHistoryContext.Provider
                    value={[orderHistory, setOrderHistory]}
                  >
                    <NotificationContext.Provider
                      value={[notification, setNotification]}
                    >
                      <QuotesContext.Provider
                        value={[quotes, setQuotes, savedQuotes, setSavedQuote]}
                      >
                        <InvoiceContext.Provider
                          value={[
                            invoices,
                            setInvoices,
                            notPaidInvoices,
                            setNotPaidInvoices,
                          ]}
                        >
                          <ReceiptContext.Provider
                            value={[
                              receipt,
                              setReceipt,
                              saveReceipt,
                              setSaveReceipt,
                            ]}
                          >
                            <ProductContext.Provider
                              value={[product, setProduct]}
                            >
                              {children}
                            </ProductContext.Provider>
                          </ReceiptContext.Provider>
                        </InvoiceContext.Provider>
                      </QuotesContext.Provider>
                    </NotificationContext.Provider>
                  </OrderHistoryContext.Provider>
                </StorefrontContext.Provider>{" "}
              </BankContext.Provider>
            </TransactionContext.Provider>
          </ContactContext.Provider>
        </bookingsContext.Provider>
      </ServiceContext.Provider>
    </userContext.Provider>
  );
}
