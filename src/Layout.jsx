/** @format */

import { Outlet } from "react-router-dom";
// import NavBar from "./components/NavBar";
// import Sidebar from "./components/Sidebar";
// import styles from "./Layout.module.css";
import Search from "./components/Profile/NavBar/LuroundSearch";
import Sidebar from "./components/Profile/SideBar/LuroundSidebar";

export default function Layout() {
  return (
    <div>
      <Search />
      <div>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
}
