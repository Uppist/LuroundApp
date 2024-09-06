/** @format */

import image2 from "../elements/Profile.jpg";
import scan from "../elements/scan.jpg";
import britnext from "../elements/britnext.jpg";
export default function Profile() {
  function handleSvg() {
    var image = document.querySelector(".img");
    var review = document.querySelector(".reviews");
    var scan = document.querySelector(".scan");
    if (image.style.display === "block") {
      image.style.display = "none";
      scan.style.display = "block";
      review.style.visibility = "hidden";
    } else {
      image.style.display = "block";
      scan.style.display = "none";
      review.style.visibility = "visible";
    }
  }

  return (
    <div className='reviewprofile'>
      <div>
        <div className='svg'>
          <svg
            onClick={handleSvg}
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 1L1 6L6 11'
              stroke='#1D2E2E'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <svg
            className='svg'
            onClick={handleSvg}
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M1 11L6 6L1 1'
              stroke='#1D2E2E'
              strokeOpacity='0.8'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </div>
        <div>
          <a className='reviews' href=''>
            See all reviews
          </a>
        </div>
      </div>

      <div className='imageprofile'>
        <div className='image'>
          <img className='img' src={image2} />
          <img className='scan' src={scan} />
        </div>
        <div className='nameprofile'>
          <label className='name'>Ronald Richards</label>

          <div className='professional'>
            <label className='profspec'>Professional Specialist</label>
            <div className='britnext'>
              <div className='imagebrit'>
                <img src={britnext} />
                <label>Britnext Ltd</label>
              </div>
            </div>
          </div>

          <div>
            <div className='loremicon'>
              <a className='lorem' href='http://www.loremipsum.com'>
                http://www.loremipsum.com
              </a>
              <svg
                className='copy'
                width='18'
                height='19'
                viewBox='0 0 18 19'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <g clipPath='url(#clip0_110_2657)'>
                  <path
                    d='M12 1.45728H3C2.17125 1.45728 1.5 2.12853 1.5 2.95728V13.4573H3V2.95728H12V1.45728ZM14.25 4.45728H6C5.17125 4.45728 4.5 5.12853 4.5 5.95728V16.4573C4.5 17.286 5.17125 17.9573 6 17.9573H14.25C15.0787 17.9573 15.75 17.286 15.75 16.4573V5.95728C15.75 5.12853 15.0787 4.45728 14.25 4.45728ZM14.25 16.4573H6V5.95728H14.25V16.4573Z'
                    fill='#1D2E2E'
                    fillOpacity='0.65'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_110_2657'>
                    <rect
                      width='18'
                      height='18'
                      fill='white'
                      transform='translate(0 0.707275)'
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
