/** @format */
import styles from "./style.module.css";

export default function AddBank({ CancelAddAccount, handleOneOffClick }) {
  function Next() {
    handleOneOffClick("accountsaved");
    CancelAddAccount();
  }
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
              <div className={styles.input}>
                <span>input or select bank</span>
                <button className={styles.select}>
                  <div className={styles.booking}>
                    <span>Bank</span>

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
              </div>

              <div className={styles.input}>
                <span>Account Number</span>
                <input type='number' />
              </div>

              <div className={styles.input}>
                <span>Account Name</span>
                <input type='text' />
              </div>
            </div>
          </div>

          <div className={styles.done}>
            <button className={styles.cancel} onClick={CancelAddAccount}>
              Cancel
            </button>
            <button className={styles.time} onClick={Next}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
