/** @format */

import bank from "../../../elements/bank.png";
import AddBank from "./Addbank";
import styles from "./style.module.css";

export default function NoAccount({
  AddAccount,
  CancelAddAccount,
  isAddAccount,
  handleOneOffClick,
  visible,
  setSavedBanks = { setSavedBanks },
  savedBanks = { savedBanks },
}) {
  return (
    <div className={`${styles.saved} ${visible}`}>
      <div className={styles.bank}>
        <img src={bank} />
        <div className={styles.add}>
          <span>No saved account yet </span>
          <label>
            Click on <span>"Add an account"</span>
            <br />
            button to proceed
          </label>
        </div>
      </div>
      <div>
        <button
          className={`${styles.account} ${isAddAccount ? "open" : ""}`}
          onClick={AddAccount}
        >
          Add an account
        </button>
        {isAddAccount && (
          <AddBank
            handleOneOffClick={handleOneOffClick}
            CancelAddAccount={CancelAddAccount}
            setSavedBanks={setSavedBanks}
            savedBanks={savedBanks}
          />
        )}
      </div>
    </div>
  );
}
