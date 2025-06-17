/** @format */
import { useEffect, useState } from "react";
import Login from "../../../Login/Login/Login";
import styles from "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";

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
    setIsLogOut(true);
  }

  const [viewerData, setViewerData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("userData");
    if (data) {
      const user = JSON.parse(data);
      // console.log(user);
      setViewerData(user);
    } else {
      console.log("No user data found in localStorage");
      navigate("/");
    }
  }, [navigate]);

  if (!viewerData) {
    return null;
  }

  const { photoUrl, name, email } = viewerData;

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
              <img src={photoUrl} alt={photoUrl} />
              <div className={styles.namebutton}>
                <div className={styles.spanname}>
                  <span className={styles.ronaldname}>{name}</span>
                  <span className={styles.email}>{email}</span>
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
