/** @format */

export default function AddBank({ onExit }) {
  return (
    <div>
      <div className='popupcancel popupwithdrawpin'>
        <div className='overlay' onClick={onExit}></div>
        <div className='withdrawpin'>
          <div className='select-bank-container'>
            <div className='set-pin'>
              <span>Add an account</span>
            </div>

            <div className='account-container'>
              <div className='input-bank'>
                <span>input or select bank</span>
                <button className='select-bank'>
                  <div className='booking-month'>
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

              <div className='input-bank'>
                <span>Account Number</span>
                <input type='number' />
              </div>

              <div className='input-bank'>
                <span>Account Name</span>
                <input type='text' />
              </div>
            </div>
          </div>

          <div className='cancel-done'>
            <button className='cancel-time' onClick={onExit}>
              Cancel
            </button>
            <button className='done-time'>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
}
