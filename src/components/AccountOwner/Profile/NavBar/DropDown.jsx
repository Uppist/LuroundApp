/** @format */
import { useContext, useEffect, useState } from "react";
import Login from "../../../Login/Login/Login";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import { userContext } from "../../../Context";
import image from "../../../elements/scan.jpg";
import { toast } from "react-toastify";

export default function Dropdown({
  onClose,
  logindetail,
  Submit,
  LoginDetail,
}) {
  function Editprofile(item) {
    onComponentSwitch(item);
    onClose();
  }

  const [isLogOut, setIsLogOut] = useState(false);
  function LogOut() {
    navigate("/Login");
    localStorage.removeItem("Token");
    toast.success("You've sucessfully logged out!");
  }

  const [viewerData, setViewerData] = useState(null);
  const navigate = useNavigate();

  const [userData] = useContext(userContext);
  return (
    <div>
      {isLogOut ? (
        <Login
          logindetail={logindetail}
          Submit={Submit}
          LoginDetail={LoginDetail}
        />
      ) : (
        <div className={styles.profiledropdown}>
          <div className={styles.overlaydropdown} onClick={onClose}></div>
          <div className={styles.profileedit}>
            <div className={styles.imagename}>
              <img src={userData.photoUrl || image} alt={userData.photoUrl} />
              <div className={styles.namebutton}>
                <div className={styles.spanname}>
                  <span className={styles.ronaldname}>
                    {userData.displayName}
                  </span>
                  <span className={styles.email}>{userData.email}</span>
                </div>
                <button onClick={onClose}>
                  <Link to='/editprofile'>Edit Profile</Link>
                </button>
              </div>
              <hr className={styles.linehr} />
            </div>

            <button onClick={LogOut}>Log out</button>
          </div>
        </div>
      )}
    </div>
  );
}
