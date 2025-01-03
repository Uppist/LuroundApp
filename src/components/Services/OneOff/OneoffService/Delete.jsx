/** @format */

/** @format */
export default function Delete({
  datavalue,
  backdelete,
  showContainer,
  dataretainer,
}) {
  return (
    <div>
      <div className='popupcancel'>
        <div className='overlay'></div>
        <div className='body-modal'>
          <div className='cancel-booking-line'>
            <div className='cancel-booking'>
              <label>Delete Service</label>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M6.75781 17.2428L12.0008 11.9998L17.2438 17.2428M17.2438 6.75684L11.9998 11.9998L6.75781 6.75684'
                  stroke='currentColor'
                  strokeOpacity='0.8'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </div>
            <hr />
          </div>

          {showContainer ? (
            <>
              <div className='cancel-container'>
                <div className='titleservice cancel-title'>
                  <span className='title'>{datavalue.Title}</span>
                  <div className='service-one'>
                    <span className='servicetype'>
                      {" "}
                      {datavalue.servicetype}{" "}
                    </span>
                    <span className='oneofftext'> {datavalue.oneoff} </span>
                  </div>
                </div>
                <p>Are you sure you want to delete this service?</p>
              </div>
            </>
          ) : (
            <>
              <div className='cancel-container'>
                <div className='titleservice cancel-title'>
                  <span className='title title-service'>
                    {dataretainer.Title}
                  </span>
                  <div className='service-one'>
                    <span className='servicetype'>
                      {" "}
                      {dataretainer.servicetype}{" "}
                    </span>
                    <span className='oneofftext'> {dataretainer.oneoff} </span>
                  </div>
                </div>
                <p className='title-p'>
                  Are you sure you want to delete this service?
                </p>
              </div>
            </>
          )}

          <div className='do-cancel-container'>
            <button className='cancel-time'>Cancel</button>
            <button className='done-time done-delete' onClick={backdelete}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
