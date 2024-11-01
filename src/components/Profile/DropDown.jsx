/** @format */
import { useState } from "react";
import Login from "./Login";
import { useNavigate } from "react-router-dom";

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
        <div className='profiledropdown'>
          <div className='overlaydropdown' onClick={onClose}></div>
          <div className='profileedit'>
            <div className='imagename'>
              <img src={photoUrl} alt={photoUrl} />
              <div className='namebutton'>
                <div className='spanname'>
                  <span className='ronaldname'>{Name}</span>
                  <span className='email'>{email}</span>
                </div>
                <button onClick={() => Editprofile("editprofile")}>
                  Edit Profile
                </button>
              </div>
              <hr className='linehr' />
            </div>

            <button onClick={LogOut}>Log out</button>
          </div>
        </div>
      )}
    </div>
  );
}
