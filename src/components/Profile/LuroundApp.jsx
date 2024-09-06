/* @format */
import "../style.css";
import LuroundProfile from "./LuroundProfile";
import Sidebar from "./LuroundSidebar";

export default function LuroundApp() {
  return (
    <div className='grid-container'>
      {/*Sidebar container */}
      <Sidebar />

      {/*Profile container */}
      <LuroundProfile />
    </div>
  );
}
