/** @format */

import React, { useContext, useState } from "react";
import styles from "./style.module.css";
import PopUp from "./Popup/PopUp";

import SecondPage from "./SecondPage";
import NoStorefront from "./NoStorefront";
import { StorefrontContext } from "../../Context";
import { Link } from "react-router-dom";
// import DetailPopup from "./DetailPopup";

export default function FirstPage({ showPart }) {
  const [isStorefont, setisStorefont] = useState(false);
  const [activeComponent, setActiveComponent] = useState("nostorefront");
  const [visible, setVisible] = useState("");

  const [storeFront, setStoreFront] = useContext(StorefrontContext);

  console.log(storeFront);
  function AddProduct() {
    setisStorefont(true);
  }

  const handleClick = (container) => {
    setVisible("fade-out");
    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
      console.log("Switched to:", container);
    }, 200);
  };
  function CancelAddProduct() {
    setisStorefont(false);
  }

  return (
    <section className={styles.contact}>
      <>
        <div className={styles.addcontacts}>
          <label>Storefront</label>
          <div className={styles.order}>
            <Link to='/orders'>
              <div className={styles.ordersvg}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.7717 8.0093L13.841 9.07852L15.8763 7.04297M7.1001 8.06062H10.5956'
                    stroke='#1D2E2E'
                    strokeWidth='1.2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M18.0526 8.06219H21.5729L19.126 15.3972H9.54826L7.10115 8.06219L6.08022 5.00195H2.42725'
                    stroke='#1D2E2E'
                    strokeWidth='1.2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M11.2638 19.6672C11.9453 19.6672 12.4978 19.1147 12.4978 18.4332C12.4978 17.7517 11.9453 17.1992 11.2638 17.1992C10.5823 17.1992 10.0298 17.7517 10.0298 18.4332C10.0298 19.1147 10.5823 19.6672 11.2638 19.6672Z'
                    stroke='#1D2E2E'
                    strokeWidth='1.2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M17.4103 19.6672C18.0918 19.6672 18.6442 19.1147 18.6442 18.4332C18.6442 17.7517 18.0918 17.1992 17.4103 17.1992C16.7287 17.1992 16.1763 17.7517 16.1763 18.4332C16.1763 19.1147 16.7287 19.6672 17.4103 19.6672Z'
                    stroke='#1D2E2E'
                    strokeWidth='1.2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M18.0525 8.06219C18.0525 10.1214 16.3832 11.7906 14.3243 11.7906C12.265 11.7906 10.5958 10.1214 10.5958 8.06219C10.5958 6.0032 12.265 4.33398 14.3243 4.33398C16.3832 4.33398 18.0525 6.0032 18.0525 8.06219Z'
                    stroke='#1D2E2E'
                    strokeWidth='1.2'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </div>
            </Link>

            <Link to='/add-product'>
              <div className={styles.addcontact}>
                <svg
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M10.7755 20.5714V13.2245H3.42859V10.7755H10.7755V3.42859H13.2245V10.7755H20.5714V13.2245H13.2245V20.5714H10.7755Z'
                    fill='#FFFFFF'
                  />
                </svg>
                <label
                  className={` ${isStorefont ? "open" : ""}`}
                  onClick={AddProduct}
                >
                  Add product
                </label>
              </div>
            </Link>
          </div>
        </div>

        {storeFront.length > 0 ? (
          <>
            {" "}
            <SecondPage
              storeFront={storeFront}
              onComponentSwitch={handleClick}
            />
          </>
        ) : (
          <>
            {" "}
            <NoStorefront
              isStorefont={isStorefont}
              AddProduct={AddProduct}
              CancelAddProduct={CancelAddProduct}
              visible={visible}
            />
          </>
        )}
      </>
    </section>
  );
}
