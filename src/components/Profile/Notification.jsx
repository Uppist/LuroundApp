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
<<<<<<< HEAD
                <label className='notification-name'>
                  Jennifer Merit{" "}
                  <span className='notification-service'>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
=======
                <label>
                  Jennifer Merit <span>booked your service </span>
                </label>
                <label>1 hour ago</label>
>>>>>>> 7647543148ab69e3dd2a2a04124596f1af011965
              </div>
            </div>

            <div className='notification-booked'>
              <img src={jenny} />
              <div>
<<<<<<< HEAD
                <label className='notification-name'>
                  Jennifer Merit{" "}
                  <span className='notification-service'>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
=======
                <label>
                  Jennifer Merit <span>booked your service </span>
                </label>
                <label>5 days ago</label>
>>>>>>> 7647543148ab69e3dd2a2a04124596f1af011965
              </div>
            </div>

            <div className='notification-booked'>
              <img src={jenny} />
              <div>
<<<<<<< HEAD
                <label className='notification-name'>
                  Jennifer Merit{" "}
                  <span className='notification-service'>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
=======
                <label>
                  Jennifer Merit <span>booked your service </span>
                </label>
                <label>1 week ago</label>
>>>>>>> 7647543148ab69e3dd2a2a04124596f1af011965
              </div>
            </div>

            <div className='notification-booked'>
              <img src={jenny} />
              <div>
<<<<<<< HEAD
                <label className='notification-name'>
                  Jennifer Merit{" "}
                  <span className='notification-service'>
                    booked your service{" "}
                  </span>
                </label>
                <label className='notification-period'>1 hour ago</label>
=======
                <label>
                  Jennifer Merit <span>booked your service </span>
                </label>
                <label>3 weeks ago</label>
>>>>>>> 7647543148ab69e3dd2a2a04124596f1af011965
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
