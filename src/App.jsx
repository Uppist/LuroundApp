/** @format */
import React from "react";
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
import Viewer from "./components/AccountViewer/Viewer";
import One from "./components/Services/OneOff/OneoffService/OneOff";
import Profile from "./components/Profile/ClientProfile/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import Retainer from "./components/Services/Retainer/Retainer";
import Program from "./components/Services/Program/Program";
import Bookings from "./components/Bookings/Bookings";
import FirstPage from "./components/StoreFront/FirstPage";
import SecondPage from "./components/StoreFront/SecondPage";
import Support from "./components/Support/Support";
import Contact from "./components/Contact/Contact";
import Financials from "./components/Financials/Financials";
import Quotes from "./components/Financials/Quotes/Quotes";
import Layout from "./Layout";
import WriteReview from "./components/AccountViewer/Profile/Reviews/WriteReview";
import Service from "./components/AccountViewer/Services/Service";
import More from "./components/AccountViewer/Services/OneOff/More";
import BookNow from "./components/AccountViewer/Services/OneOff/BookNow";
import RetainerView from "./components/AccountViewer/Services/Retainer/RetainerView";

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
        <Route path='/Profile-page/*' element={<MainProfile />} />

        <Route path='/layout' element={<Layout />} />

        {/* <Route path='/viewowner' element={<Viewer />} /> */}
        <Route path='/viewowner' element={<Viewer />} />
        <Route path='/writeareview' element={<WriteReview />} />
        <Route path='/services' element={<Service />} />
        <Route path='/details' element={<More />} />
        <Route path='/booknow' element={<BookNow />} />
        {/* <Route path='/retainer' element={<RetainerView />} /> */}
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
