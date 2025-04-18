/** @format */

import React from "react";
import styles from "./profile.module.css";
import scan from "../../elements/scan.jpg";
import { Link } from "react-router-dom";

export default function ViewerProfile() {
  return (
    <div className={styles.reviewprofile}>
      <div className={styles.imageprofile}>
        <div className={styles.image}>
          <img className={styles.img} src={scan} alt='Profile' />
        </div>
        <div className={styles.nameprofile}>
          <label className={styles.name}>Name</label>

          <div className={styles.professional}>
            <label className={styles.profspec}>Occupation</label>
            <div className={styles.britnext}>
              <div className={styles.imagebrit}></div>
            </div>
          </div>

          <div>
            <div className={styles.loremicon}>
              <Link
                className={styles.lorem}
                target='blank'
                rel='noopener noreferrer'
              >
                url
              </Link>
              <svg
                onClick={() => {
                  navigator.clipboard.writeText(url);
                }}
                className={styles.copy}
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
