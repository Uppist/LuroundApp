/** @format */

import styles from "./styles.module.css";
/** @format */
export default function Delete({
  datavalue,
  backdelete,
  showContainer,
  dataretainer,
  Close,
}) {
  return (
    <div>
      <div className='popupcancel'>
        <div className='overlay' onClick={Close}></div>
        <div className={styles.body}>
          <div>
            <div className={styles.cancelbooking}>
              <label>Delete Service</label>
              <svg
                onClick={Close}
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
            {/* <hr /> */}
          </div>

          {showContainer ? (
            <>
              <div className={styles.container}>
                <div className={styles.titleservice}>
                  <span className={styles.title}>{datavalue.Title}</span>
                  <div>
                    <span className={styles.type}>
                      {" "}
                      {datavalue.servicetype}{" "}
                    </span>
                    <span className={styles.text}> {datavalue.oneoff} </span>
                  </div>
                </div>
                <p className={styles.paragraph}>
                  Are you sure you want to delete this service?
                </p>
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

          <div className={styles.docancel}>
            <button className={styles.cancel} onClick={Close}>
              Cancel
            </button>
            <button className={styles.delete} onClick={backdelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
