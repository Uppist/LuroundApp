/** @format */

import React, { useContext, useEffect, useState } from "react";
import styles from "./style.module.css";
import NoAccount from "./NoAccount";
import SavedAccount from "./SavedAccount";
import AddBank from "./Addbank";
import axios from "axios";
import { BankContext, userContext } from "../../../Context";

export default function Account({ onClose }) {
  const [isAddAccount, setIsAddAccount] = useState("");
  const [visible, setVisible] = useState("");
  const [activeComponent, setActiveComponent] = useState("noaccount");
  function AddAccount() {
    setIsAddAccount(true);
  }

  function CancelAddAccount() {
    setIsAddAccount(false);
  }

  const handleOneOffClick = (container) => {
    setVisible("fade-out");
    setTimeout(() => {
      setActiveComponent(container);
      setVisible("fade-in");
    }, 200);
  };

  const [userData] = useContext(userContext);
  const [savedBanks, setSavedBanks] = useContext(BankContext);
  console.log(savedBanks);

  console.log(userData._id);
  //get saved banks
  // useEffect(() => {
  //   if (!userData?._id) return;
  //   const token = localStorage.getItem("Token");
  // }, [userData._id]);

  return (
    <div className={styles.transaction}>
      <div className={styles.filter}>
        <div className={styles.transact}>
          <span className={styles.text}>Saved Accounts</span>
          <div className='filter-by'>
            <div className={styles.addaccount} onClick={AddAccount}>
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
              <label>New account</label>
            </div>
            {isAddAccount && (
              <AddBank
                // handleOneOffClick={handleOneOffClick}
                CancelAddAccount={CancelAddAccount}
                setSavedBanks={setSavedBanks}
                savedBanks={savedBanks}
              />
            )}
          </div>
        </div>
      </div>

      {savedBanks && savedBanks.length > 0 ? (
        <SavedAccount savedBanks={savedBanks} />
      ) : (
        <NoAccount
          isAddAccount={isAddAccount}
          AddAccount={AddAccount}
          CancelAddAccount={CancelAddAccount}
          handleOneOffClick={handleOneOffClick}
          visible={visible}
          setSavedBanks={setSavedBanks}
          savedBanks={savedBanks}
        />
      )}
    </div>
  );
}
