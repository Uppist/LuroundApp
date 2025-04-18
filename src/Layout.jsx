/** @format */

import React, { createContext, useState } from "react";
import Settings from "./components/Profile/Settings/Settings";
import Profile from "./components/Profile/ClientProfile/Profile/Profile";
import EditProfile from "./components/Profile/EditProfile/EditProfile";
import One from "./components/Services/OneOff/OneoffService/OneOff";
import Retainer from "./components/Services/Retainer/Retainer";
import Program from "./components/Services/Program/Program";
import Bookings from "./components/Bookings/Bookings";
import FirstPage from "./components/StoreFront/FirstPage";
import SecondPage from "./components/StoreFront/SecondPage";
import Support from "./components/Support/Support";
import Contact from "./components/Contact/Contact";
import Financials from "./components/Financials/Financials";
import Quotes from "./components/Financials/Quotes/Quotes";
import Invoice from "./components/Financials/Invioces/Invoice";
import Receipt from "./components/Financials/Receipts/Receipt";
import AboutDetails from "./components/Profile/ClientProfile/Profile/AboutDetails";
import Event from "./components/Services/Event/Event";
import DetailPopup from "./components/StoreFront/DetailPopup";
import Transaction from "./components/Transactions/TransactionPage";
import MainProfile from "./MainProfile";

export const DataContext = createContext();

export default function Layout({
  visible,
  activeComponent,
  refreshKey,
  setRefreshKey,
  handleEditProfile,
  handleSubmit,
  isValue,
  setIsValue,
  handleChange,
  image,
  logourl,
  LogoUpload,
  fileSizeInMB,
  Name,
  email,
  photoUrl,
  url,
  logo,
  occupation,
  company,
  about,
  handleOneOffClick,
}) {
  console.log("Value", isValue.firstName);

  return (
    <>
      <div className={`profile-details ${visible}`}>
        {activeComponent === "editprofile" && (
          <EditProfile
            handleEditProfile={handleEditProfile}
            handleSubmit={handleSubmit}
            isValue={isValue}
            setIsValue={setIsValue}
            setRefreshKey={setRefreshKey}
            handleChange={handleChange}
            image={image}
            logourl={logourl}
            LogoUpload={LogoUpload}
            fileSizeInMB={fileSizeInMB}
            email={email}
          />
        )}

        {activeComponent === "profile" && (
          <>
            <Profile
              refreshKey={refreshKey}
              Name={Name}
              company={company}
              url={url}
              logo={logo}
              Occupation={occupation}
              photoUrl={photoUrl}
            />
            <AboutDetails about={about} />
          </>
        )}

        {/* Ensure other components are conditionally rendered */}
        {activeComponent === "settings" && <Settings />}
        {activeComponent === "oneoff" && <One />}
        {activeComponent === "retainer" && <Retainer />}
        {activeComponent === "program" && <Program />}
        {activeComponent === "event" && <Event />}
        {activeComponent === "bookings" && <Bookings />}
        {activeComponent === "storefront" && (
          <FirstPage onComponentSwitch={handleOneOffClick} />
        )}
        {activeComponent === "secondpage" && (
          <SecondPage onComponentSwitch={handleOneOffClick} />
        )}
        {activeComponent === "detail" && <DetailPopup />}
        {activeComponent === "transaction" && <Transaction />}
        {activeComponent === "support" && <Support />}
        {activeComponent === "contact" && (
          <Contact onComponentSwitch={handleOneOffClick} />
        )}
        {activeComponent === "financial" && (
          <Financials onComponentSwitch={handleOneOffClick} />
        )}
        {activeComponent === "quotes" && (
          <Quotes onComponentSwitch={handleOneOffClick} />
        )}
        {activeComponent === "invoices" && (
          <Invoice onComponentSwitch={handleOneOffClick} />
        )}
        {activeComponent === "receipts" && (
          <Receipt onComponentSwitch={handleOneOffClick} />
        )}
      </div>
    </>
  );
}
