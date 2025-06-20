/** @format */
import React, { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import CreateAccount from "./components/Login/CreateAccount/CreateAccount";
import Login from "./components/Login/Login/Login";
import Password from "./components/Login/CreateAccount/Password/Password";
import ForgotPassword from "./components/Login/Login/ForgotPassword/ForgotPassword";
import EmailLink from "./components/Login/Login/ForgotPassword/EmailLink";
import ResetPassword from "./components/Login/Login/ForgotPassword/ResetPassword";
import PasswordUpdated from "./components/Login/Login/ForgotPassword/PasswordUpdated";
import Settings from "./components/AccountOwner/Profile/Settings/Settings";
import Viewer from "./components/AccountViewer/Viewer";
import One from "./components/Services/OneOff/OneoffService/OneOff";
import EditProfile from "./components/AccountOwner/Profile/EditProfile/EditProfile";
import Retainer from "./components/Services/Retainer/Retainer";
import Program from "./components/Services/Program/Program";
import Bookings from "./components/AccountOwner/Bookings/Bookings";
import FirstPage from "./components/AccountOwner/StoreFront/FirstPage";
import Support from "./components/AccountOwner/Support/Support";
import Contact from "./components/AccountOwner/Contact/Contact";
import Financials from "./components/AccountOwner/Financials/Financials";
import WriteReview from "./components/AccountViewer/Profile/Reviews/WriteReview";
import Service from "./components/AccountViewer/Services/Service";
import More from "./components/AccountViewer/Services/OneOff/More";
import BookNow from "./components/AccountViewer/Services/OneOff/Book/FirstStep";
import Search from "./components/AccountOwner/Profile/NavBar/LuroundSearch";
import Sidebar from "./components/AccountOwner/Profile/SideBar/LuroundSidebar";
import NavBar from "./components/AccountViewer/NavBar/NavBar";
import ClientProfile from "./components/AccountOwner/Profile/ClientProfile/ClientProfile";
import Event from "./components/Services/Event/Event";
import Transaction from "./components/AccountOwner/Transactions/TransactionPage";

import "./style.css";

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [viewerData, setViewerData] = useState(null);

  const loginRoutes = [
    "/",
    "/confirm-password",
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
    location.pathname.startsWith("/booknow");

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

      {/* Login & Auth Routes */}
      <Routes>
        <Route path='/' element={<CreateAccount />} />
        <Route path='/confirm-password' element={<Password />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Forgot-password' element={<ForgotPassword />} />
        <Route path='/resend-email' element={<EmailLink />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/password-updated' element={<PasswordUpdated />} />
      </Routes>

      {/* Account Owner Routes */}
      {viewerData && (
        <div className='profiledashboard'>
          <Routes>
            <Route path='/profile-page' element={<ClientProfile />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/editprofile' element={<EditProfile />} />
            <Route path='/oneoff' element={<One />} />
            <Route path='/retainer' element={<Retainer />} />
            <Route path='/program' element={<Program />} />
            <Route path='/event' element={<Event />} />
            <Route path='/bookings' element={<Bookings />} />
            <Route path='/storefront' element={<FirstPage />} />
            <Route path='/transactions' element={<Transaction />} />
            <Route path='/financials' element={<Financials />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/support' element={<Support />} />
          </Routes>
        </div>
      )}

      {/* Account Viewer Routes */}
      <Routes>
        <Route path='/profile/:username' element={<Viewer />} />
        <Route path='/writeareview' element={<WriteReview />} />
        <Route path='/services' element={<Service />} />
        <Route path='/details' element={<More />} />
        <Route path='/booknow' element={<BookNow />} />
      </Routes>
    </div>
  );
}
