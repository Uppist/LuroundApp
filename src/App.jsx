/** @format */
import React, { useContext, useEffect, useState } from "react";
import { HashRouter, useLocation, useNavigate } from "react-router-dom";
import Search from "./components/AccountOwner/Profile/NavBar/LuroundSearch";
import Sidebar from "./components/AccountOwner/Profile/SideBar/LuroundSidebar";
import NavBar from "./components/AccountViewer/NavBar/NavBar";
import "./style.css";

import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";
import FinancialRouting from "./Routings/AccountOwner/Financials/FinancialRouting";
import ProfileRouting from "./Routings/AccountOwner/Profile/ProfileRouting";
import ServiceRouting from "./Routings/AccountOwner/Services/ServiceRouting";
import ContactRouting from "./Routings/AccountOwner/Contact/ContactRouting";
import TransactionRouting from "./Routings/AccountOwner/Transactions/TransactionRouting";
import LoginRouting from "./Routings/Login/LoginRouting";
import ViewerProfileRouting from "./Routings/AccountViewer/Profile/ProfileRouting";
import ViewerServiceRouting from "./Routings/AccountViewer/Services/ViewerServiceRouting";
import ViewerStorefrontRouting from "./Routings/AccountViewer/Storefront/ViewerStorefrontRouting";
import SupportRouting from "./Routings/AccountOwner/Support/SupportRouting";
import BookingsRouting from "./Routings/AccountOwner/Bookings/BookingsRouting";
import { userContext } from "./components/Context";
import CalendarRouting from "./Routings/AccountOwner/Calendar/CalendarRouting";
import StorefrontRouting from "./Routings/AccountOwner/Storefront/StorefrontRouting";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [userData] = useContext(userContext);
  const loginRoutes = [
    "/",
    "/Login",
    "/Forgot-password",
    "/resend-email",
    "/reset-password",
    "/password-updated",
  ];

  // useEffect(() => {
  //   const token = localStorage.getItem("Token");
  //   if (token && window.location.pathname === "/") {
  //     navigate("/profile-page");
  //   }
  // }, []);

  // // Load userData from localStorage if available
  // useEffect(() => {
  //   const data = localStorage.getItem("userData");
  //   if (data) {
  //     try {
  //       const user = JSON.parse(data);
  //       setViewerData(user);
  //     } catch (err) {
  //       console.error("Invalid JSON in localStorage:", err);
  //     }
  //   } else {
  //     // If not logged in and not on a login route, redirect
  //     if (!loginRoutes.includes(location.pathname)) {
  //       navigate("/");
  //     }
  //   }
  // }, [location.pathname, navigate]);

  const isLoginRoute = loginRoutes.includes(location.pathname);
  const isAccountOwnerRoute =
    !isLoginRoute && !location.pathname.startsWith("/profile/");
  const isViewerRoute =
    location.pathname.startsWith("/profile/") ||
    location.pathname.startsWith("/writeareview") ||
    location.pathname.startsWith("/services") ||
    location.pathname.startsWith("/details") ||
    location.pathname.startsWith("/booknow") ||
    location.pathname.startsWith("/Success") ||
    location.pathname.startsWith("/stores") ||
    location.pathname.startsWith("/bookingdetails");

  return (
    <div>
      {/* Top navigation */}
      {isViewerRoute && <NavBar />}
      {isAccountOwnerRoute && !isViewerRoute && (
        <>
          <div className='profiledashboard'>
            <Search />
          </div>
          <Sidebar />
        </>
      )}

      <LoginRouting />

      {/* Account Owner Routes */}
      {userData && (
        <div className='profiledashboard'>
          <ProfileRouting />
          <ServiceRouting />
          <BookingsRouting />

          <StorefrontRouting />
          <CalendarRouting />
          <TransactionRouting />
          <FinancialRouting />
          <ContactRouting />
          <SupportRouting />
        </div>
      )}

      {/* Account Viewer Routes */}
      <ViewerProfileRouting />
      <ViewerServiceRouting />
      <ViewerStorefrontRouting />

      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
        icon={false}
        transition={Zoom}
        closeButton={false}
      />
    </div>
  );
}
