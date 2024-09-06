/** @format */
import location from "../elements/location.jpg";
import mobile from "../elements/mobile.jpg";
import linkedin from "../elements/linkedin.jpg";
import email from "../elements/email.jpg";
import website from "../elements/web.jpg";
import twitter from "../elements/twitter.jpg";
import facebook from "../elements/facebook.jpg";
export default function Details() {
  return (
    <div className='details'>
      <label className='otherdetails'>Other Details</label>
      <div className='detailsicon'>
        <div className='icondetails'>
          <img src={location} />
          <div className='labelspan'>
            <label className='label'>Lagos, Nigeria</label>
            <span className='span'>Location</span>
          </div>
        </div>

        <div className='icondetails'>
          <img src={mobile} />
          <div className='labelspan'>
            <label className='label'>(239) 555 0108 7438</label>
            <span className='span'>Mobile</span>
          </div>
        </div>

        <div className='icondetails'>
          <img src={email} />
          <div className='labelspan'>
            <label className='label'>ronald.richards@example.com</label>
            <span className='span'>Email</span>
          </div>
        </div>

        <div className='icondetails'>
          <img src={website} />
          <div className='labelspan'>
            <label className='label'>http://www.ronaldrichards.com</label>
            <span className='span'>Website</span>
          </div>
        </div>

        <div className='icondetails'>
          <img src={linkedin} />
          <div className='labelspan'>
            <label className='label'>linkedin.com/in/ronald-richard</label>
            <span className='span'>LinkedIn</span>
          </div>
        </div>

        <div className='icondetails'>
          <img src={facebook} />
          <div className='labelspan'>
            <label className='label'>facebook/fb/ronald-richard</label>
            <span className='span'>Facebook</span>
          </div>
        </div>

        <div className='icondetails'>
          <img src={twitter} />
          <div className='labelspan'>
            <label className='label'>twitter/ronald-richard</label>
            <span className='span'>Twitter</span>
          </div>
        </div>
      </div>
    </div>
  );
}
