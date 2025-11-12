/** @format */

import React, { useContext, useRef, useState } from "react";
import styles from "./Setting.module.css";
import PasswordChange from "./PasswordChange";
import ChangeWithdrawalPin from "./ChangeWithdrawalPin";
import ForgotWithdrawalPin from "./ForgotWithdrawalPin";
import CustomizeURL from "./CustomizeURL";
import Notifications from "./Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Delete from "./Delete";
// import BankDetails from "./BankDetails";
import AddBank from "../../Transactions/SavedAccount/Addbank";
import { BankContext, TransactionContext } from "../../../Context";
import Bank from "../../Transactions/SavedAccount/Bank";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import AddIcon from "@mui/icons-material/Add";

export default function Settings() {
  const [isBank, setIsBank] = useState(false);
  const [isPinVisible, setIsPinVisible] = useState(false);
  const scrollpassword = useRef(null);
  const scrollwithdraw = useRef(null);
  const scrollforgot = useRef(null);
  const scrollaccount = useRef(null);
  const scrollurl = useRef(null);
  const scrollnotification = useRef(null);
  const scrolldelete = useRef(null);
  const scrollTo = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  const [loading, setLoading] = useState(false);
  const [savedBanks, setSavedBanks] = useContext(BankContext);

  // console.log(savedBanks);

  const [
    transactions,
    setTransactions,
    transactionBalance,
    setTransactionBalance,
  ] = useContext(TransactionContext);
  function handleBank() {
    setIsBank(true);
  }

  function CloseBank() {
    setIsBank(false);
  }

  function Pin() {
    setIsPinVisible((prev) => !prev);
  }
  return (
    <section className={styles.settings}>
      <label>Settings</label>
      <div className={styles.settingscontainer}>
        <div className={styles.settingsfirst}>
          <div>
            <span onClick={() => scrollTo(scrollpassword)}>
              Change Login password
            </span>
            <div className={styles.withdraw} onClick={Pin}>
              <label>Withdrawal Pin management</label>
              {isPinVisible ? (
                <KeyboardArrowDownIcon
                  // onClick={Pin}
                  sx={{
                    width: 25,
                    height: 25,
                    fill: "#1D2E2E",
                    fillOpacity: "0.8",
                  }}
                />
              ) : (
                <ArrowForwardIosOutlinedIcon
                  // onClick={Pin}
                  sx={{
                    width: 16,
                    height: 16,
                    fill: "#1D2E2E",
                    fillOpacity: "0.8",
                  }}
                />
              )}
            </div>
            {isPinVisible && (
              <div className={styles.withdrawul}>
                <ul>
                  <li onClick={() => scrollTo(scrollwithdraw)}>
                    Change Withdrawal Pin
                  </li>
                  <li onClick={() => scrollTo(scrollforgot)}>
                    {" "}
                    Forgot Withdrawal Pin
                  </li>
                </ul>
              </div>
            )}
            <span onClick={() => scrollTo(scrollaccount)}>
              Bank account details
            </span>
            <span onClick={() => scrollTo(scrollurl)}>Customize your URL</span>
            <span onClick={() => scrollTo(scrollnotification)}>
              Notifications
            </span>
            <span onClick={() => scrollTo(scrolldelete)}>Delete account</span>
          </div>
        </div>

        <div className={styles.settingssecond}>
          <div ref={scrollpassword}>
            <PasswordChange loading={loading} setLoading={setLoading} />
          </div>
          <>
            <div ref={scrollwithdraw}>
              <ChangeWithdrawalPin loading={loading} setLoading={setLoading} />
            </div>
            <div ref={scrollforgot}>
              <ForgotWithdrawalPin />
            </div>
          </>
          {/* )} */}
          <div className={styles.bank}>
            <div className={styles.bank2} ref={scrollaccount}>
              <label>Bank account details</label>
              <AddIcon
                onClick={handleBank}
                sx={{
                  width: 24,
                  height: 24,
                  fill: "#EBFFFF",
                  backgroundColor: "#00CCCC",
                  padding: "8px 12px",
                  borderRadius: "8px",
                }}
              />
            </div>{" "}
            <div className={styles.savedBanks}>
              {savedBanks.length === 0
                ? null
                : savedBanks.map((bank, index) => (
                    <div key={index} className={styles.bankCard}>
                      <Bank />

                      <div>
                        <label>{bank.bank_name}</label>
                        <span>
                          {bank.bank_name} | {bank.account_number}
                        </span>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

          {isBank && (
            <AddBank
              CancelAddAccount={CloseBank}
              savedBanks={savedBanks}
              setSavedBanks={setSavedBanks}
            />
          )}

          <div ref={scrollurl}>
            <CustomizeURL />
          </div>
          <div ref={scrollnotification}>
            <Notifications />
          </div>

          <div ref={scrolldelete}>
            <Delete loading={loading} setLoading={setLoading} />
          </div>
        </div>
      </div>
    </section>
  );
}
