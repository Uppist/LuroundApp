/** @format */
import React, { useEffect, useState } from "react";
import { HashRouter, useLocation, useNavigate } from "react-router-dom";
import Search from "./components/AccountOwner/Profile/NavBar/LuroundSearch";
import Sidebar from "./components/AccountOwner/Profile/SideBar/LuroundSidebar";
import NavBar from "./components/AccountViewer/NavBar/NavBar";
import "./style.css";

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

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [viewerData, setViewerData] = useState(null);

  const loginRoutes = [
    "/",
    "/Login",
    "/Forgot-password",
    "/resend-email",
    "/reset-password",
    "/password-updated",
  ];

  // Load userData from localStorage if available
  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      try {
        const user = JSON.parse(data);
        setViewerData(user);
      } catch (err) {
        console.error("Invalid JSON in localStorage:", err);
      }
    } else {
      // If not logged in and not on a login route, redirect
      if (!loginRoutes.includes(location.pathname)) {
        navigate("/");
      }
    }
  }, [location.pathname, navigate]);

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
    location.pathname.startsWith("/stores");

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
      {viewerData && (
        <div className='profiledashboard'>
          <ProfileRouting />
          <ServiceRouting />
          <BookingsRouting />
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
    </div>
  );
}
