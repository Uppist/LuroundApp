/** @format */
import { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
// import image2 from "../../elements/image.png";
import Dropdown from "./DropDown";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import ShareProfile from "./ShareProfile";

export default function Search({ logindetail, Submit, LoginDetail }) {
  const [value, setValue] = useState("");
  const [isdropDown, setIsdropdown] = useState(false);
  const [isNotification, setIsNotification] = useState(false);
  // const [isShareProfile, setisShareProfile] = useState(false);
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

  // function handleItemClick(item) {
  //   onComponentSwitch(item);
  // }

  function closeModal() {
    setIsdropdown(false);
    setIsNotification(false);
    // setisShareProfile(false);
  }

  // function Share() {
  //   // setisShareProfile(true);
  // }
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

  const { photoUrl } = viewerData;

  return (
    <div className={styles.searchbar}>
      <div className={styles.searchinput}>
        <svg
          className={styles.search}
          width='20'
          height='20'
          viewBox='0 0 20 20'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <circle
            cx='9.80547'
            cy='9.80547'
            r='7.49047'
            stroke='#1D2E2E'
            strokeOpacity='0.8'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M15.0153 15.4043L17.9519 18.3334'
            stroke='#1D2E2E'
            strokeOpacity='0.8'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>

        <input
          className={styles.input}
          onChange={(e) => setValue(e.target.value)}
          type='text'
          value={value}
          placeholder='Search'
        />
      </div>

      <ul className={styles.settings}>
        <div>
          <li className={styles.icons}>
            <svg
              className={`${styles.notification} ${
                isNotification ? "open" : ""
              }`}
              onClick={openNotification}
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M28.707 19.293L26 16.586V13C25.9969 10.5218 25.075 8.13285 23.4126 6.29498C21.7502 4.45712 19.4654 3.30093 17 3.05V1H15V3.05C12.5346 3.30093 10.2498 4.45712 8.58737 6.29498C6.92498 8.13285 6.0031 10.5218 6 13V16.586L3.293 19.293C3.10545 19.4805 3.00006 19.7348 3 20V23C3 23.2652 3.10536 23.5196 3.29289 23.7071C3.48043 23.8946 3.73478 24 4 24H11V24.777C10.9782 26.0456 11.4254 27.2777 12.2558 28.237C13.0862 29.1964 14.2414 29.8156 15.5 29.976C16.1952 30.0449 16.8971 29.9676 17.5606 29.749C18.2241 29.5304 18.8345 29.1753 19.3525 28.7066C19.8706 28.2379 20.2848 27.666 20.5685 27.0277C20.8522 26.3893 20.9992 25.6986 21 25V24H28C28.2652 24 28.5196 23.8946 28.7071 23.7071C28.8946 23.5196 29 23.2652 29 23V20C28.9999 19.7348 28.8946 19.4805 28.707 19.293ZM19 25C19 25.7956 18.6839 26.5587 18.1213 27.1213C17.5587 27.6839 16.7956 28 16 28C15.2044 28 14.4413 27.6839 13.8787 27.1213C13.3161 26.5587 13 25.7956 13 25V24H19V25ZM27 22H5V20.414L7.707 17.707C7.89455 17.5195 7.99994 17.2652 8 17V13C8 10.8783 8.84285 8.84344 10.3431 7.34315C11.8434 5.84285 13.8783 5 16 5C18.1217 5 20.1566 5.84285 21.6569 7.34315C23.1571 8.84344 24 10.8783 24 13V17C24.0001 17.2652 24.1054 17.5195 24.293 17.707L27 20.414V22Z'
                fill='#1D2E2E'
                fillOpacity='0.8'
              />
              <path
                d='M24.4444 10.2222C26.899 10.2222 28.8889 8.23236 28.8889 5.77776C28.8889 3.32316 26.899 1.33331 24.4444 1.33331C21.9898 1.33331 20 3.32316 20 5.77776C20 8.23236 21.9898 10.2222 24.4444 10.2222Z'
                fill='#DE3730'
              />
            </svg>
          </li>

          {isNotification && (
            <Notification
              onClose={closeModal}
              // onComponentSwitch={onComponentSwitch}
            />
          )}
        </div>
        <li className={styles.icons}>
          <Link to='/settings'>
            <svg
              // onClick={() => handleItemClick("settings")}
              className={styles.notification}
              width='32'
              height='32'
              viewBox='0 0 32 32'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M27 16.76V15.23L28.92 13.55C29.2739 13.238 29.5062 12.811 29.5757 12.3444C29.6453 11.8778 29.5476 11.4016 29.3 11L26.94 6.99998C26.7646 6.69624 26.5125 6.44396 26.2088 6.26844C25.9052 6.09292 25.5607 6.00034 25.21 5.99998C24.9927 5.99831 24.7765 6.03209 24.57 6.09998L22.14 6.91998C21.7205 6.64119 21.2828 6.39063 20.83 6.16998L20.32 3.64998C20.2286 3.18958 19.9781 2.77602 19.6125 2.48168C19.2468 2.18734 18.7893 2.03099 18.32 2.03998H13.64C13.1707 2.03099 12.7132 2.18734 12.3476 2.48168C11.9819 2.77602 11.7315 3.18958 11.64 3.64998L11.13 6.16998C10.6739 6.39058 10.233 6.64113 9.81001 6.91998L7.43001 6.05998C7.22131 6.0056 7.00518 5.98534 6.79001 5.99998C6.43928 6.00034 6.09482 6.09292 5.79117 6.26844C5.48752 6.44396 5.23537 6.69624 5.06001 6.99998L2.70001 11C2.4666 11.401 2.37986 11.8706 2.45466 12.3285C2.52946 12.7865 2.76113 13.2041 3.11001 13.51L5.00001 15.24V16.77L3.11001 18.45C2.75128 18.758 2.51326 19.1831 2.43821 19.6499C2.36315 20.1167 2.4559 20.5951 2.70001 21L5.06001 25C5.23537 25.3037 5.48752 25.556 5.79117 25.7315C6.09482 25.907 6.43928 25.9996 6.79001 26C7.00736 26.0016 7.22353 25.9679 7.43001 25.9L9.86001 25.08C10.2795 25.3588 10.7172 25.6093 11.17 25.83L11.68 28.35C11.7715 28.8104 12.0219 29.2239 12.3876 29.5183C12.7532 29.8126 13.2107 29.969 13.68 29.96H18.4C18.8693 29.969 19.3268 29.8126 19.6925 29.5183C20.0581 29.2239 20.3086 28.8104 20.4 28.35L20.91 25.83C21.3661 25.6094 21.807 25.3588 22.23 25.08L24.65 25.9C24.8565 25.9679 25.0727 26.0016 25.29 26C25.6407 25.9996 25.9852 25.907 26.2888 25.7315C26.5925 25.556 26.8446 25.3037 27.02 25L29.3 21C29.5334 20.599 29.6202 20.1293 29.5454 19.6714C29.4706 19.2135 29.2389 18.7959 28.89 18.49L27 16.76ZM25.21 24L21.78 22.84C20.9771 23.5201 20.0594 24.0517 19.07 24.41L18.36 28H13.64L12.93 24.45C11.9484 24.0816 11.0357 23.5508 10.23 22.88L6.79001 24L4.43001 20L7.15001 17.6C6.96511 16.5648 6.96511 15.5051 7.15001 14.47L4.43001 12L6.79001 7.99998L10.22 9.15998C11.0229 8.47987 11.9406 7.94823 12.93 7.58998L13.64 3.99998H18.36L19.07 7.54998C20.0516 7.9184 20.9643 8.44912 21.77 9.11998L25.21 7.99998L27.57 12L24.85 14.4C25.0349 15.4351 25.0349 16.4948 24.85 17.53L27.57 20L25.21 24Z'
                fill='#1D2E2E'
                fillOpacity='0.8'
              />
              <path
                d='M16 22C14.8133 22 13.6533 21.6481 12.6666 20.9888C11.6799 20.3295 10.9109 19.3925 10.4567 18.2961C10.0026 17.1997 9.88378 15.9933 10.1153 14.8295C10.3468 13.6656 10.9182 12.5965 11.7574 11.7574C12.5965 10.9182 13.6656 10.3468 14.8295 10.1153C15.9933 9.88378 17.1997 10.0026 18.2961 10.4567C19.3925 10.9109 20.3295 11.6799 20.9888 12.6666C21.6481 13.6533 22 14.8133 22 16C22.008 16.7902 21.8583 17.574 21.5596 18.3056C21.2609 19.0371 20.8193 19.7018 20.2605 20.2605C19.7018 20.8193 19.0371 21.2609 18.3056 21.5596C17.574 21.8583 16.7902 22.008 16 22ZM16 12C15.4713 11.9877 14.9457 12.0827 14.4548 12.2794C13.9639 12.4761 13.5181 12.7702 13.1442 13.1442C12.7702 13.5181 12.4761 13.9639 12.2794 14.4548C12.0827 14.9457 11.9877 15.4713 12 16C11.9877 16.5287 12.0827 17.0543 12.2794 17.5452C12.4761 18.0361 12.7702 18.4819 13.1442 18.8559C13.5181 19.2298 13.9639 19.524 14.4548 19.7206C14.9457 19.9173 15.4713 20.0123 16 20C16.5287 20.0123 17.0543 19.9173 17.5452 19.7206C18.0361 19.524 18.4819 19.2298 18.8559 18.8559C19.2298 18.4819 19.524 18.0361 19.7206 17.5452C19.9173 17.0543 20.0123 16.5287 20 16C20.0123 15.4713 19.9173 14.9457 19.7206 14.4548C19.524 13.9639 19.2298 13.5181 18.8559 13.1442C18.4819 12.7702 18.0361 12.4761 17.5452 12.2794C17.0543 12.0827 16.5287 11.9877 16 12Z'
                fill='#1D2E2E'
                fillOpacity='0.8'
              />
            </svg>
          </Link>
        </li>

        <div>
          <li
            className={`${styles.icons} ${styles.active}`}
            onClick={profileDown}
          >
            <div className={styles.imagearrow}>
              <img
                className={styles.smallerimage}
                src={photoUrl}
                alt={photoUrl}
              />
              <svg
                className={`${styles.arrow} ${isdropDown ? "open" : ""}`}
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='#1D2E2E'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
          </li>

          {isdropDown && (
            <Dropdown
              // logindetail={logindetail}
              // Submit={Submit}
              // LoginDetail={LoginDetail}
              // onComponentSwitch={handleItemClick}
              onClose={closeModal}
            />
          )}
        </div>

        {/* <div>
          <li className={styles.icons}>
            <button
              className={`${styles.share} ${isShareProfile ? "open" : ""}`}
              onClick={Share}
            >
              Share Profile
            </button>
          </li>

          {isShareProfile && <ShareProfile onClose={closeModal} />}
        </div> */}
      </ul>
    </div>
  );
}
