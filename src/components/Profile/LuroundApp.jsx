/* @format */
import "../style.css";
import { useState } from "react";
import Sidebar from "./LuroundSidebar";
import Bookings from "../Bookings/Bookings";
import Event from "../Services/Event/Event";
import One from "../Services/OneOff/OneOff";
import Program from "../Services/Program/Program";
import Retainer from "../Services/Retainer/Retainer";
import "../style.css";
import AboutDetails from "./AboutDetails";
import Search from "./LuroundSearch";
import Profile from "./Profile";
import EditProfile from "./EditProfile";
import DetailOne from "../Services/OneOff/DetailService";
export default function LuroundApp() {
  const [activeComponent, setActiveComponent] = useState("profile");
  const [visible, setVisible] = useState("fade-in");

  const handleOneOffClick = (container) => {
    setVisible("fade-out");
    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
    }, 200);
  };
  return (
    <div className='grid-container'>
      {/*Sidebar container */}
      <Sidebar onComponentSwitch={handleOneOffClick} />
      {/*Profile container */}
      <div className='profiledashboard'>
        <Search onComponentSwitch={handleOneOffClick} />
        <div className={`profile-details ${visible}`}>
          {activeComponent === "editprofile" && <EditProfile />}
          {activeComponent === "oneoff" && <One />}

          {activeComponent === "retainer" && <Retainer />}
          {activeComponent === "program" && <Program />}
          {activeComponent === "event" && <Event />}
          {activeComponent === "bookings" && <Bookings />}
          {activeComponent === "profile" && (
            <>
              <Profile />
              <AboutDetails />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
