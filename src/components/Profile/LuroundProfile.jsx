/** @format */
import Event from "../Services/Event";
import One from "../Services/OneOff";
import Program from "../Services/Program";
import Retainer from "../Services/Retainer";
import "../style.css";
import AboutDetails from "./AboutDetails";
import Search from "./LuroundSearch";
import Profile from "./Profile";
export default function LuroundProfile() {
  return (
    <div className='profiledashboard'>
      <Search />
      <Profile />
      <AboutDetails />

      <One />
      <Retainer />
      <Program />
      <Event />
    </div>
  );
}
