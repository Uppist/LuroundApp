/** @format */

import { useState } from "react";
import Create from "../Services/CreateService";
import bank from "../elements/bank.png";
import AddBank from "./Addbank";

export default function SavedAccount({ onClose }) {
  const [isAddAccount, setIsAddAccount] = useState(false);

  function AddAccount() {
    setIsAddAccount(true);
  }
  return (
    <div className='transaction save-account'>
      <div className='filter-transaction-status'>
        <div className='filter-transaction'>
          <span className='transaction-text'>Saved Accounts</span>
          <div className='filter-by'>
            <Create />
          </div>
        </div>
        <div className='saved-account'>
          <div className='bank'>
            <img src={bank} />
            <div className='saved-add-account'>
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
              className={`add-an-account ${isAddAccount ? "open" : ""}`}
              onClick={AddAccount}
            >
              Add an account
            </button>
            {isAddAccount && <AddBank onExit={onClose} />}
          </div>
        </div>
      </div>
    </div>
  );
}
