/** @format */

export default function Details({ socialLink }) {
  return (
    <div className='details'>
      <label className='otherdetails'>Other Details</label>
      <div className='detailsicon'>
        {socialLink.map((social, index) =>
          social.link ? (
            <div className='icondetails' key={index}>
              <img src={social.icon} alt={social.icon} />
              <div className='labelspan'>
                <label className='label'>{social.link}</label>
                <span className='span' key={social.name}>
                  {social.name}
                </span>
              </div>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
