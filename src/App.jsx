/** @format */
import React from "react";
import LuroundApp from "./components/LuroundApp";
import CreateAccount from "./components/Login/CreateAccount/CreateAccount";
// import { Cloudinary } from "@cloudinary/url-gen";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login/Login";
import Password from "./components/Login/CreateAccount/Password/Password";
import MainProfile from "./MainProfile";
import ForgotPassword from "./components/Login/Login/ForgotPassword/ForgotPassword";
import EmailLink from "./components/Login/Login/ForgotPassword/EmailLink";
import ResetPassword from "./components/Login/Login/ForgotPassword/ResetPassword";
import PasswordUpdated from "./components/Login/Login/ForgotPassword/PasswordUpdated";
import Notification from "./components/Profile/NavBar/Notification";
import Settings from "./components/Profile/Settings/Settings";

export default function App() {
  // return <LuroundApp />;

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<CreateAccount />} />
        <Route path='/confirm-password' element={<Password />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Forgot-password' element={<ForgotPassword />} />
        <Route path='resend-email' element={<EmailLink />} />
        <Route path='/reset-password' element={<ResetPassword />} />
        <Route path='/password-updated' element={<PasswordUpdated />} />
        <Route path='/Profile-page' element={<MainProfile />} />
        <Route path='/notifications' element={<Notification />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </HashRouter>

    // <CreateAccount />
  );

  // const cld = new Cloudinary({
  //   cloud: {
  //     cloudName: "demo",
  //   },
  // });
}
