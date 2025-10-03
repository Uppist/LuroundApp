/** @format */

import React, { useContext, useState } from "react";
import styles from "./styles.module.css";
import history from "./History.json";
import timeImage from "../../../elements/services/timebased.svg";

import image from "../../../elements/history.png";
import { ProductContext } from "../../../Context";
import { useLocation } from "react-router-dom";

export default function Insight({ Close, data }) {
  const [isAlltime, setIsAlltime] = useState(false);
  const [selectedTime, setSelectedTime] = useState("All time");

  const time = [
    "Today",
    "Yesterday",
    "This week",
    "Last 7 days",
    "This month",
    "Last 30 days",
    "All Time",
  ];

  console.log(data);

  function dropDown() {
    setIsAlltime((prev) => !prev);
  }

  function handleDropdown(option) {
    setSelectedTime(option);
    setIsAlltime(false);
  }

  const [product, setProduct] = useContext(ProductContext);
  console.log(product);

  return (
    <div className='popupcancel'>
      <div className='overlay' onClick={Close}></div>

      <div className={styles.share1}>
        <div>
          <div className={styles.cancelbooking}>
            <label>{data.product_name ? "Product" : "Service"} Insight</label>
            <svg
              onClick={Close}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                stroke='currentColor'
                strokeOpacity='0.8'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
          {/* <hr /> */}
        </div>
        <div className={styles.container}>
          <div className={styles.shareservice}>
            <span className={styles.titleshare}>
              {data.service_name || data.product_name}
            </span>
            <div className={styles.serviceType}>
              {data.owner_name ? (
                "by"
              ) : (
                <span className={styles.type}> Service type: </span>
              )}
              <span className={styles.text}>
                {data.service_type || data.owner_name}{" "}
              </span>
              {data?.one_off_type === "time-based" ? (
                <img src={timeImage} alt='' />
              ) : (
                <>{/* <img src={time} alt='' /> */}</>
              )}
            </div>
          </div>
        </div>

        <div className={styles.filter}>
          <label>Filter by:</label>
          <div className={styles.dropdown}>
            <div
              className={`select-list ${styles.alltime} ${
                isAlltime ? "select-clicked" : ""
              }`}
              onClick={dropDown}
            >
              <span className='selected-list'>{selectedTime}</span>
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                  stroke='currentColor'
                  strokeOpacity='0.8'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            {isAlltime && (
              <ul className={styles.time}>
                {time.map((option) => (
                  <li
                    key={option}
                    className={`menu-item ${
                      selectedTime === option ? "active" : ""
                    }`}
                    onClick={() => handleDropdown(option)}
                  >
                    {option}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div className={styles.button}>
          <button type='button' className={styles.button1}>
            {product.clicks || 0} <label className={styles.label}>Clicks</label>
            <svg
              width='225'
              height='140'
              viewBox='0 0 225 140'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M338.627 -169.32L342.465 -157.877C346.304 -146.434 353.981 -123.548 346.784 -111.42C339.588 -99.2923 317.517 -97.9224 306.122 -88.8318C294.726 -79.7413 294.004 -62.9301 290.046 -48.46C286.088 -33.9899 278.893 -21.8609 271.243 -10.0607C263.593 1.73956 255.489 13.2111 249.627 26.3041C243.765 39.3971 240.145 54.1116 224.928 60.4386C209.711 66.7657 182.899 64.7054 164.829 68.969C146.76 73.2326 137.434 83.8202 136.944 100.799C136.455 117.778 144.802 141.149 141.166 155.852C137.531 170.556 121.913 176.592 114.446 188.525C106.979 200.457 107.663 218.285 93.9079 225.669C80.1525 233.053 51.9571 229.993 41.9885 240.116C32.02 250.239 40.2783 273.545 39.3944 290.239C38.5105 306.932 28.4845 317.014 20.7564 328.757C13.0282 340.501 7.59796 353.906 4.88282 360.609L2.16766 367.311'
                stroke='#FEF7EB'
                strokeWidth='4'
              />
            </svg>
          </button>
          <button type='button' className={styles.button2}>
            {product.purchaseLength || 0}{" "}
            <label className={styles.label}> Booked</label>
            <svg
              width='225'
              height='140'
              viewBox='0 0 225 140'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M338.627 -169.32L342.465 -157.877C346.304 -146.434 353.981 -123.548 346.784 -111.42C339.588 -99.2923 317.517 -97.9224 306.122 -88.8318C294.726 -79.7413 294.004 -62.9301 290.046 -48.46C286.088 -33.9899 278.893 -21.8609 271.243 -10.0607C263.593 1.73956 255.489 13.2111 249.627 26.3041C243.765 39.3971 240.145 54.1116 224.928 60.4386C209.711 66.7657 182.899 64.7054 164.829 68.969C146.76 73.2326 137.434 83.8202 136.944 100.799C136.455 117.778 144.802 141.149 141.166 155.852C137.531 170.556 121.913 176.592 114.446 188.525C106.979 200.457 107.663 218.285 93.9079 225.669C80.1525 233.053 51.9571 229.993 41.9885 240.116C32.02 250.239 40.2783 273.545 39.3944 290.239C38.5105 306.932 28.4845 317.014 20.7564 328.757C13.0282 340.501 7.59796 353.906 4.88282 360.609L2.16766 367.311'
                stroke='#FEF7EB'
                strokeWidth='4'
              />
            </svg>
          </button>
        </div>

        <div className={styles.history}>
          <label>{data.product_name ? "Purchase" : "Booking"} History</label>
          <div className={styles.booking}>
            {product.length > 0
              ? product.purchaseHistory.map((data, index) => (
                  <div key={index} className={styles.book}>
                    <img src={data.image} alt='' />
                    <div className={styles.name}>
                      <label htmlFor='' className={styles.date}>
                        {data.date}
                      </label>
                      <label className={styles.name2}>{data.Name}</label>
                    </div>
                    <hr />
                  </div>
                ))
              : "No history yet"}
          </div>
        </div>
      </div>
    </div>
  );
}
