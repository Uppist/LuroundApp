/** @format */

import React, { useState } from "react";
import { useLocation } from "react-router-dom";

import Settings from "./components/Profile/Settings/Settings";
import One from "./components/Services/OneOff/OneoffService/OneOff";
import Retainer from "./components/Services/Retainer/Retainer";
import Program from "./components/Services/Program/Program";
import Bookings from "./components/Bookings/Bookings";
import FirstPage from "./components/StoreFront/FirstPage";
import SecondPage from "./components/StoreFront/SecondPage";
import DetailPopup from "./components/StoreFront/DetailPopup";
import Transaction from "./components/Transactions/TransactionPage";
import Support from "./components/Support/Support";
import Contact from "./components/Contact/Contact";
import Financials from "./components/Financials/Financials";
import Quotes from "./components/Financials/Quotes/Quotes";
import Edit from "./components/StoreFront/Edit";
import Invoice from "./components/Financials/Invioces/Invoice";
import Receipt from "./components/Financials/Receipts/Receipt";
import Profile from "./components/Profile/ClientProfile/Profile/Profile";
import AboutDetails from "./components/Profile/ClientProfile/Profile/AboutDetails";
import Sidebar from "./components/Profile/SideBar/LuroundSidebar";
import Search from "./components/Profile/NavBar/LuroundSearch";

export default function MainProfile() {
  const [refreshKey, setRefreshKey] = useState(0);

  const [activeComponent, setActiveComponent] = useState("profile");
  const [visible, setVisible] = useState("fade-in");

  const handleOneOffClick = (container) => {
    setVisible("fade-out");
    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
    }, 200);
  };
  const location = useLocation();
  const userData = location.state || {};
  console.log("User Data:", userData);

  return (
    <div className='grid-container'>
      {/*Sidebar container */}
      <Sidebar onComponentSwitch={handleOneOffClick} />
      {/*Profile container */}
      <div className='profiledashboard'>
        <Search
          onComponentSwitch={handleOneOffClick}
          Name={userData.displayName}
          email={userData.email}
          photoUrl={userData.photoUrl}
          // logindetail={logindetail}
          // Submit={Submit}
          // LoginDetail={LoginDetail}
          // photoUrlSmaller={photoUrlSmaller}
        />
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
            />
          )}
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
          {activeComponent === "contact" && <Contact />}
          {activeComponent === "financial" && (
            <Financials onComponentSwitch={handleOneOffClick} />
          )}
          {activeComponent === "quotes" && (
            <Quotes onComponentSwitch={handleOneOffClick} />
          )}
          {/* {activeComponent === "view" && <View />} */}
          {activeComponent === "edit" && (
            <Edit onComponentSwitch={handleOneOffClick} />
          )}

          {activeComponent === "invoices" && (
            <Invoice onComponentSwitch={handleOneOffClick} />
          )}
          {activeComponent === "receipts" && (
            <Receipt onComponentSwitch={handleOneOffClick} />
          )}

          {activeComponent === "profile" && (
            <>
              <Profile
                refreshKey={refreshKey}
                Name={userData.name}
                company={userData.company}
                url={userData.luround_url}
                logo={userData.logo_url}
                Occupation={userData.occupation}
                // handleEditProfile={handleEditProfile}
                // handleSubmit={handleSubmit}
                photoUrl={userData.photoUrl}
              />
              <AboutDetails
                about={userData.about}
                socialLink={userData.media_links}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
