/** @format */

export default function Open({ isOpen, onClose, data }) {
  return (
    <div>
      <div className='popupcancel sharepopup'>
        <div className='overlayshare' onClick={onClose}></div>
        <div className={`bookingsopen ${isOpen ? "open" : ""}`} key={data.Name}>
          <div className='reschedule-cancel'>
            <button className='rescheduletext2'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M14.1001 10.9001C13.7001 10.5001 13.1001 10.5001 12.7001 10.9001L12.0001 11.6001L11.3001 10.9001C10.9001 10.5001 10.3001 10.5001 9.9001 10.9001C9.5001 11.3001 9.5001 11.9001 9.9001 12.3001L10.6001 13.0001L9.9001 13.7001C9.5001 14.1001 9.5001 14.7001 9.9001 15.1001C10.1001 15.3001 10.4001 15.4001 10.6001 15.4001C10.8001 15.4001 11.1001 15.3001 11.3001 15.1001L12.0001 14.4001L12.7001 15.1001C12.9001 15.3001 13.2001 15.4001 13.4001 15.4001C13.6001 15.4001 13.9001 15.3001 14.1001 15.1001C14.5001 14.7001 14.5001 14.1001 14.1001 13.7001L13.4001 13.0001L14.1001 12.3001C14.5001 11.9001 14.5001 11.3001 14.1001 10.9001Z'
                  fill='currentColor'
                  fillOpacity='0.8'
                />
                <path
                  d='M18 5V4C18 3.4 17.6 3 17 3C16.4 3 16 3.4 16 4V5H8V4C8 3.4 7.6 3 7 3C6.4 3 6 3.4 6 4V5C3.8 5 2 6.8 2 9V16C2 18.2 3.8 20 6 20H18C20.2 20 22 18.2 22 16V9C22 6.8 20.2 5 18 5ZM20 16C20 17.1 19.1 18 18 18H6C4.9 18 4 17.1 4 16V9C4 7.9 4.9 7 6 7C6 7.6 6.4 8 7 8C7.6 8 8 7.6 8 7H16C16 7.6 16.4 8 17 8C17.6 8 18 7.6 18 7C19.1 7 20 7.9 20 9V16Z'
                  fill='currentColor'
                  fillOpacity='0.8'
                />
              </svg>

              <span>Reschedule</span>
            </button>

            <button className='cancel2'>
              <svg
                // className={` ${onCancel ? "open" : ""}`}
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M7 21C6.45 21 5.979 20.804 5.587 20.412C5.195 20.02 4.99933 19.5493 5 19V6H4V4H9V3H15V4H20V6H19V19C19 19.55 18.804 20.021 18.412 20.413C18.02 20.805 17.5493 21.0007 17 21H7ZM17 6H7V19H17V6ZM9 17H11V8H9V17ZM13 17H15V8H13V17Z'
                  fill='currentColor'
                  fillOpacity='0.8'
                />
              </svg>

              <span>Cancel</span>
            </button>
            {/* {onCancel && <CancelN onClose={closeModal} booking={booking} />} */}
          </div>
        </div>
      </div>
    </div>
  );
}
