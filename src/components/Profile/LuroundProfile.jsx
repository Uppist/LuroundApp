/** @format */
import { useState } from "react";
import Bookings from "../Bookings/Bookings";
import See from "../Bookings/SeeMore";
import Event from "../Services/Event";
import One from "../Services/OneOff";
import Program from "../Services/Program";
import Retainer from "../Services/Retainer";
import "../style.css";
import AboutDetails from "./AboutDetails";
import Search from "./LuroundSearch";
import Profile from "./Profile";
import Sidebar from "./LuroundSidebar";
export default function LuroundProfile() {
  const [activeComponent, setActiveComponent] = useState("profile");
  function OneOff() {
    alert("Hello");
    setIsOneOff(true);
  }

  const handleOneOffClick = () => {
    setActiveComponent("oneOff");
  };
  return (
    <>
      {/* <Sidebar onOneOffClick={handleOneOffClick} /> */}
      <div className='profiledashboard'>
        {/* <Sidebar onOneOffClick={handleOneOffClick} />{" "} */}
        {/* Pass the click handler */}
        <Search />
        <div className='profile-details'>
          {activeComponent === "oneOff" ? (
            <One />
          ) : (
            <>
              <Profile />
              <AboutDetails />
            </>
          )}
        </div>
        <Retainer />
        <Program />
        <Event />
        <Bookings />
        {/* <See /> */}
      </div>
    </>
  );
}
