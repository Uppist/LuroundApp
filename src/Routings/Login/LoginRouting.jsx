/** @format */

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import CreateAccount from "../../components/Login/CreateAccount/CreateAccount";
import Login from "../../components/Login/Login/Login";
import ForgotPassword from "../../components/Login/Login/ForgotPassword/ForgotPassword";
import EmailLink from "../../components/Login/Login/ForgotPassword/EmailLink";
import ResetPassword from "../../components/Login/Login/ForgotPassword/ResetPassword";
import PasswordUpdated from "../../components/Login/Login/ForgotPassword/PasswordUpdated";

export default function LoginRouting() {
  return (
    <Routes>
      <Route path='/' element={<CreateAccount />} />
      <Route path='/Login' element={<Login />} />
      <Route path='/Forgot-password' element={<ForgotPassword />} />
      <Route path='/resend-email' element={<EmailLink />} />
      <Route path='/reset-password' element={<ResetPassword />} />
      <Route path='/password-updated' element={<PasswordUpdated />} />
    </Routes>
  );
}
