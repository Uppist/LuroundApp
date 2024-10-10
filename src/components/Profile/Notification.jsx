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
                <label className='notification-name'>
                  Jennifer Merit{" "}
                  <span className='notification-service'>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
              </div>
            </div>

            <div className='notification-booked'>
              <img src={jenny} />
              <div>
                <label className='notification-name'>
                  Jennifer Merit{" "}
                  <span className='notification-service'>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
              </div>
            </div>

            <div className='notification-booked'>
              <img src={jenny} />
              <div>
                <label className='notification-name'>
                  Jennifer Merit{" "}
                  <span className='notification-service'>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
              </div>
            </div>

            <div className='notification-booked'>
              <img src={jenny} />
              <div>
                <label className='notification-name'>
                  Jennifer Merit{" "}
                  <span className='notification-service'>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
