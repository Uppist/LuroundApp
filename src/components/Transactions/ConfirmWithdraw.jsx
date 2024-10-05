/** @format */

export default function ConfirmWithdraw({ onClose, confirm }) {
  return (
    <div>
      <div className='popupcancel popupwithdrawpin'>
        <div className='overlay' onClick={onClose}></div>
        <div className='withdrawpin'>
          <div className='withdraw-svg'>
            {" "}
            <svg
              onClick={onClose}
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                stroke='#1D2E2E'
                stroke-opacity='0.8'
                stroke-width='2'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </div>

          <div className='set-password'>
            <div className='set-pin'>
              <span>Set Withdrawal Pin</span>
              <label>Confirm your 4-digit pin</label>
            </div>
            <div className='withdrawal-password'>
              <input type='password' />
              <input type='password' />
              <input type='password' />
              <input type='password' />
            </div>
          </div>

          <div>
            <button className='next Next' onClick={confirm}>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
