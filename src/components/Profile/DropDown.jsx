/** @format */
import image3 from "../elements/image2.png";

export default function Dropdown({ onClose }) {
  return (
    <div>
      <div className='profiledropdown'>
        <div className='overlaydropdown' onClick={onClose}></div>
        <div className='profileedit'>
          <div className='imagename'>
            <img src={image3} />
            <div className='namebutton'>
              <div className='spanname'>
                <span className='ronaldname'>Ronald Richards</span>
                <span className='email'>ronaldrichards@gmail.com</span>
              </div>
              <button>Edit Profile</button>
            </div>
            <hr className='linehr' />
          </div>

          <button>Log out</button>
        </div>
      </div>
    </div>
  );
}
