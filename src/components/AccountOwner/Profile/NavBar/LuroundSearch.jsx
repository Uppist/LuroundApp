/** @format */
import { useContext, useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import Avatar from "@mui/material/Avatar";
import Dropdown from "./DropDown";
import scan from "../../../elements/scan.jpg";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import { userContext } from "../../../Context";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

export default function Search() {
  const [value, setValue] = useState("");
  const [isdropDown, setIsdropdown] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  const [isLogOut, setIsLogOut] = useState(false);
  function LogOut() {
    setIsLogOut(true);
  }

  function profileDown() {
    setIsdropdown(true);
  }

  function openNotification() {
    setIsNotification(true);
  }

  function closeModal() {
    setIsdropdown(false);
    setIsNotification(false);
  }

  const [userData] = useContext(userContext);
  // console.log(userData);

  return (
    <div className={styles.searchbar}>
      <div className={styles.searchinput}>
        <SearchOutlinedIcon
          className={styles.search}
          sx={{
            width: "20px",
            height: "20px",
            fill: "#1D2E2E",
            fillOpacity: "0.8",
          }}
        />

        <input
          className={styles.input}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          // value={value}
          placeholder='Search'
        />
      </div>

      <ul className={styles.settings}>
        <div>
          <li className={styles.icons}>
            <NotificationsNoneOutlinedIcon
              className={`${styles.notification} ${
                isNotification ? "open" : ""
              }`}
              onClick={openNotification}
              sx={{ width: 24, height: 24, fill: "#1D2E2E", fillOpacity: 0.8 }}
            />
          </li>

          {isNotification && <Notification onClose={closeModal} />}
        </div>
        <li className={styles.icons}>
          <Link to='/settings'>
            <SettingsOutlinedIcon
              sx={{ width: 24, height: 24, fill: "#1D2E2E", fillOpacity: 0.8 }}
            />
          </Link>
        </li>

        <div>
          <li
            className={`${styles.icons} ${styles.active}`}
            onClick={profileDown}
          >
            <div className={styles.imagearrow}>
              <Avatar
                alt={userData.displayName}
                src={userData.photoUrl || scan}
                sx={{ width: 24, height: 24 }}
              />

              <KeyboardArrowDownIcon
                className={`${styles.arrow} ${isdropDown ? "open" : ""}`}
                sx={{ width: 16, height: 16 }}
              />
            </div>
          </li>

          {isdropDown && <Dropdown onClose={closeModal} />}
        </div>
      </ul>
    </div>
  );
}
