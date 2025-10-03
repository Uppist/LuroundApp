/** @format */
import axios from "axios";
import styles from "./style.module.css";
import { useContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function AddBank({
  CancelAddAccount,
  savedBanks,
  setSavedBanks,
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const setting = location.pathname.includes("settings");

  const [allBanks, setAllBanks] = useState([]);
  const [bankDropDown, setBanksDropdown] = useState(false);
  const [search, setSearch] = useState("");

  const [accountDetails, setAccountDetails] = useState({
    bank_name: "",
    account_number: "",
    account_name: "",
    bank_code: "",
  });

  // Handle selecting a bank
  function handleSelectBank(bank) {
    setAccountDetails((prev) => ({
      ...prev,
      bank_name: bank.name,
      bank_code: bank.code,
      account_name: "",
    }));
    setBanksDropdown(false);
    setSearch("");
  }

  // Handle input changes
  function handleChange(e) {
    const { name, value } = e.target;
    setAccountDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
  const token = localStorage.getItem("Token");

  function Banks() {
    axios
      .get("https://api.luround.com/v1/wallet/get-banks", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setAllBanks(res.data.data);
      });

    setBanksDropdown((prev) => !prev);
  }

  function Next() {
    const data = {
      account_number: accountDetails.account_number,
      bank_code: accountDetails.bank_code,
    };

    if (!setting) {
      axios
        .post(
          "https://api.luround.com/v1/payments/create-user-bank-detail",
          data,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success("New detail added successfully");
          setSavedBanks([
            ...savedBanks,
            { ...accountDetails, account_name: res.data.data.account_name },
          ]);

          setTimeout(() => {
            navigate("/saved-account");
          }, 3000);
        })
        .catch(() => {
          toast.error("Your account number is invalid");
        });
    }

    if (setting) {
      axios
        .post(
          "https://api.luround.com/v1/payments/create-user-bank-detail",
          data,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success("Bank details added successfully");
          CancelAddAccount();
          setSavedBanks([
            ...savedBanks,
            { ...accountDetails, account_name: res.data.data.account_name },
          ]);
        })
        .catch(() => {
          toast.error("Your account number is invalid");
        });
    }
  }

  const isFormValid =
    accountDetails.bank_name &&
    accountDetails.account_number.length === 10 &&
    accountDetails.account_name.trim() !== "";

  return (
    <div>
      <div className='popupcancel popupwithdrawpin'>
        <div className='overlay' onClick={CancelAddAccount}></div>
        <div className='withdrawpin'>
          <div className={styles.container}>
            <div className={styles.setpin}>
              <span>Add an account</span>
            </div>

            <div className={styles.container}>
              {/* Select Bank */}
              <div className={styles.input}>
                <span>Input or select bank</span>
                <button className={styles.select}>
                  <div className={styles.booking} onClick={Banks}>
                    <span>{accountDetails.bank_name || "Bank"}</span>
                    <svg
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
                </button>
                {bankDropDown && (
                  <div className={styles.allbank}>
                    <input
                      type='search'
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder='Search'
                    />
                    <div>
                      {allBanks
                        .filter((bank) =>
                          bank.name.toLowerCase().includes(search.toLowerCase())
                        )
                        .map((data, index) => (
                          <span
                            key={index}
                            onClick={() => handleSelectBank(data)}
                          >
                            {data.name}
                          </span>
                        ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Account Number */}
              <div className={styles.input}>
                <span>Account Number</span>
                <input
                  type='text'
                  inputMode='numeric'
                  pattern='\d*'
                  name='account_number'
                  value={accountDetails.account_number}
                  onChange={handleChange}
                  maxLength={10}
                  onInput={(e) =>
                    (e.target.value = e.target.value.replace(/\D/g, ""))
                  }
                />
              </div>

              {/* Account Name */}
              <div className={styles.input}>
                <span>Account Name</span>
                <input
                  type='text'
                  name='account_name'
                  value={accountDetails.account_name}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>

          <div className={styles.done}>
            <button className={styles.cancel} onClick={CancelAddAccount}>
              Cancel
            </button>
            <button
              className={styles.time}
              disabled={!isFormValid}
              onClick={Next}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
