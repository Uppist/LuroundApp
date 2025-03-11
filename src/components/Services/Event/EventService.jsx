/** @format */

import styles from "./Event.module.css";
import styles2 from "../Retainer/Details.module.css";
import CreateEvent from "./CreateEvent";
import image from "../../elements/gallery.png";
export default function EventService({ closeService }) {
  return (
    <>
      <div className={styles2.timebased}>
        <button className={styles2.timeback} onClick={closeService}>
          <svg
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

          <span>Back</span>
        </button>
        <div className={styles.createeventservice}>
          <img src={image} alt='' />
          <CreateEvent />
        </div>
      </div>
    </>
  );
}
