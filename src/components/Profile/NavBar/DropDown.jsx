/** @format */
import { useState } from "react";
import Login from "../../Login/Login";
import styles from "./NavBar.module.css";

export default function Dropdown({
  onClose,
  onComponentSwitch,
  email,
  Name,
  photoUrl,
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
                  <span className={styles.ronaldname}>{Name}</span>
                  <span className={styles.email}>{email}</span>
                </div>
                <button onClick={() => Editprofile("editprofile")}>
                  Edit Profile
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
