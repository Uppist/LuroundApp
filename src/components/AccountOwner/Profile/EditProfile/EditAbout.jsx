/** @format */

import React from "react";
import styles from "./EditProfile.module.css";

export default function EditAbout({ scrollNext }) {
  return (
    <form>
      <div className={styles.editprofileabout} ref={scrollNext}>
        <span>About</span>
        <textarea
          name='about'
          //   value={isAbout.about}
          placeholder='Write a brief summary of your experience, skills and achievements'
          //   onChange={(e) => handleAbout(e)}
        ></textarea>

        <div className={styles.canceldone}>
          <button className={styles.canceltime}>Cancel</button>
          <button type='submit' className='done-time'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
