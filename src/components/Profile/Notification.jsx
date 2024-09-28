/** @format */
import jenny from "../../../public/jennifer.png";
export default function Notification({ onClose }) {
  return (
    <div>
      <div className='profiledropdown'>
        <div className='overlaydropdown' onClick={onClose}></div>
        <div className='notificationdropdown'>
          <label>Your Notifications</label>
          <div className='scrollable-notification'>
            <div className='notification-booked'>
              <img src={jenny} />
              <div>
                <label>
                  Jennifer Merit <span>booked your service </span>
                </label>
                <label>1 hour ago</label>
              </div>
            </div>

            <div className='notification-booked'>
              <img src={jenny} />
              <div>
                <label>
                  Jennifer Merit <span>booked your service </span>
                </label>
                <label>5 days ago</label>
              </div>
            </div>

            <div className='notification-booked'>
              <img src={jenny} />
              <div>
                <label>
                  Jennifer Merit <span>booked your service </span>
                </label>
                <label>1 week ago</label>
              </div>
            </div>

            <div className='notification-booked'>
              <img src={jenny} />
              <div>
                <label>
                  Jennifer Merit <span>booked your service </span>
                </label>
                <label>3 weeks ago</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
