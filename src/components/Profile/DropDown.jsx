/** @format */
import image3 from "../elements/image2.png";

export default function Dropdown({ onClose, onComponentSwitch, Email, Name }) {
  function Editprofile(item) {
    onComponentSwitch(item);
    onClose();
  }
  return (
    <div>
      <div className='profiledropdown'>
        <div className='overlaydropdown' onClick={onClose}></div>
        <div className='profileedit'>
          <div className='imagename'>
            <img src={image3} />
            <div className='namebutton'>
              <div className='spanname'>
                <span className='ronaldname'>{Name}</span>
                <span className='email'>{Email}</span>
              </div>
              <button onClick={() => Editprofile("editprofile")}>
                Edit Profile
              </button>
            </div>
            <hr className='linehr' />
          </div>

          <button>Log out</button>
        </div>
      </div>
    </div>
  );
}
