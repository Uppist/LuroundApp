/** @format */

import React, { useState } from "react";
import styles from "./EditProfile.module.css";

export default function EditIntro({ scrollPhoto, profile, inputRef }) {
  const [isValue, setIsValue] = useState({
    firstName: "",
    lastName: "",
    company: "",
    occupation: "",
    logo_url: "",
  });

  function handleEditProfile(e) {
    setIsValue({ ...isValue, [e.target.name]: e.target.value });
  }

  function handleProfileAPI(e) {
    e.preventDefault();
    console.log(isValue);
  }

  return (
    <form method='PUT' onSubmit={handleProfileAPI}>
      <div className={styles.photosintros} ref={scrollPhoto}>
        <span>Photo & Intro</span>

        <div>
          <div>
            {/* {image ? ( */}
            {/* <img
              name='photoUrl'
              className={`${styles.img} ${styles.editimage}`}
              src={
                typeof image === "string" ? image : URL.createObjectURL(image)
              }
            /> */}
            {/* ) : (  */}
            <img
              className={`${styles.img} ${styles.editimage}`}
              src={profile}
            />
            {/* )} */}
            <label className={styles.edit} htmlFor='photo-edit'>
              <svg
                width='22'
                height='22'
                viewBox='0 0 22 22'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M19.2666 2.73341C18.9885 2.45518 18.6582 2.23448 18.2947 2.08391C17.9312 1.93334 17.5416 1.85583 17.1482 1.85583C16.7547 1.85583 16.3651 1.93334 16.0016 2.08391C15.6382 2.23448 15.3079 2.45518 15.0297 2.73341L3.76341 13.9997C3.42817 14.3349 3.18436 14.7509 3.05712 15.2081L1.87845 19.4176C1.85122 19.5152 1.85042 19.6182 1.87613 19.7162C1.90185 19.8142 1.95315 19.9036 2.02479 19.9753C2.09643 20.0469 2.18582 20.0982 2.28381 20.1239C2.38181 20.1496 2.48487 20.1488 2.58245 20.1216L6.79122 18.9429C7.24831 18.815 7.66474 18.5715 8.00036 18.2359L19.2666 6.9696C19.8283 6.40779 20.1438 5.64591 20.1438 4.8515C20.1438 4.05709 19.8283 3.29521 19.2666 2.73341ZM15.8381 3.54103C16.1856 3.19357 16.657 2.99841 17.1484 2.99848C17.6399 2.99855 18.1112 3.19385 18.4586 3.54141C18.8061 3.88897 19.0013 4.36032 19.0012 4.85177C19.0011 5.34322 18.8058 5.81452 18.4583 6.16198L17.2849 7.33455L14.6647 4.7136L15.8381 3.54103ZM13.8571 5.52198L16.4781 8.14293L7.19198 17.4283C6.9953 17.625 6.75127 17.7677 6.48341 17.8427L3.25217 18.7471L4.15655 15.5166C4.2317 15.2488 4.37443 15.0048 4.57103 14.8081L13.8571 5.52198Z'
                  fill='white'
                />
              </svg>
              <input
                type='file'
                ref={inputRef}
                name='upload2'
                // onChange={handleChange}
                className={styles.photo}
                id='photo-edit'
                accept='image/png, image/jpeg, image/img'
              />
            </label>
          </div>
          <div className={styles.editprofileintroduce}>
            <div className={styles.firstname}>
              <span>First name</span>
              <input
                placeholder='First name'
                name='firstName'
                type='text'
                value={isValue.firstName}
                onChange={(e) => handleEditProfile(e)}
              />
            </div>
            <div className={styles.firstname}>
              <span>Last name</span>
              <input
                placeholder='Last name'
                type='text'
                value={isValue.lastName}
                name='lastName'
                onChange={(e) => handleEditProfile(e)}
              />
            </div>
            <div className={styles.firstname}>
              <span>Company name</span>
              <input
                placeholder='Your company name'
                name='company'
                value={isValue.company}
                type='text'
                onChange={handleEditProfile}
              />
            </div>
            <div className={styles.firstname}>
              <span>What do you do?</span>
              <input
                name='occupation'
                placeholder='Your profession'
                type='text'
                value={isValue.occupation}
                onChange={(e) => handleEditProfile(e)}
              />
            </div>

            <div className={styles.uploadlogo}>
              <span>Upload Logo</span>
              <div className={styles.filetype}>
                <div className={styles.size}>
                  <span>Accepted file types: img, png, jpeg</span>
                  <span>Max size: 5mb</span>
                </div>

                <span>
                  <div className={styles.uploadyourlogo}>
                    <svg
                      width='24'
                      height='25'
                      viewBox='0 0 24 25'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M5 10.7073C4.4 10.7073 4 10.3073 4 9.70728C4 5.80728 7.1 2.70728 11 2.70728C14 2.70728 16.7 4.70728 17.7 7.60728C17.8 8.10728 17.6 8.70728 17 8.80728C16.5 9.00728 15.9 8.70728 15.7 8.20728C15.1 6.10728 13.2 4.70728 11 4.70728C8.2 4.70728 6 6.90728 6 9.70728C6 10.3073 5.6 10.7073 5 10.7073Z'
                        fill='#1D2E2E'
                        fillOpacity='0.65'
                      />
                      <path
                        d='M18 18.7073C17.4 18.7073 17 18.3073 17 17.7073C17 17.1073 17.4 16.7073 18 16.7073C20.2 16.7073 22 14.9073 22 12.7073C22 10.5073 20.2 8.70728 18 8.70728C17.7 8.70728 17.3 8.70728 17 8.80728C16.5 8.90728 15.9 8.60728 15.8 8.10728C15.7 7.60728 16 7.00728 16.5 6.90728C17 6.80728 17.5 6.70728 18 6.70728C21.3 6.70728 24 9.40728 24 12.7073C24 16.0073 21.3 18.7073 18 18.7073ZM8 18.7073H5C4.4 18.7073 4 18.3073 4 17.7073C4 17.1073 4.4 16.7073 5 16.7073H8C8.6 16.7073 9 17.1073 9 17.7073C9 18.3073 8.6 18.7073 8 18.7073Z'
                        fill='#1D2E2E'
                        fillOpacity='0.65'
                      />
                      <path
                        d='M18 18.7073H16C15.4 18.7073 15 18.3073 15 17.7073C15 17.1073 15.4 16.7073 16 16.7073H18C18.6 16.7073 19 17.1073 19 17.7073C19 18.3073 18.6 18.7073 18 18.7073ZM5 18.7073C2.2 18.7073 0 16.5073 0 13.7073C0 10.9073 2.2 8.70728 5 8.70728C5.6 8.70728 6 9.10728 6 9.70728C6 10.3073 5.6 10.7073 5 10.7073C3.3 10.7073 2 12.0073 2 13.7073C2 15.4073 3.3 16.7073 5 16.7073C5.6 16.7073 6 17.1073 6 17.7073C6 18.3073 5.6 18.7073 5 18.7073ZM12 22.7073C11.4 22.7073 11 22.3073 11 21.7073V11.7073C11 11.1073 11.4 10.7073 12 10.7073C12.6 10.7073 13 11.1073 13 11.7073V21.7073C13 22.3073 12.6 22.7073 12 22.7073Z'
                        fill='#1D2E2E'
                        fillOpacity='0.65'
                      />
                      <path
                        d='M9 15.7073C8.7 15.7073 8.5 15.6073 8.3 15.4073C7.9 15.0073 7.9 14.4073 8.3 14.0073L11.3 11.0073C11.7 10.6073 12.3 10.6073 12.7 11.0073C13.1 11.4073 13.1 12.0073 12.7 12.4073L9.7 15.4073C9.5 15.6073 9.3 15.7073 9 15.7073Z'
                        fill='#1D2E2E'
                        fillOpacity='0.65'
                      />
                      <path
                        d='M15 15.7073C14.7 15.7073 14.5 15.6073 14.3 15.4073L11.3 12.4073C10.9 12.0073 10.9 11.4073 11.3 11.0073C11.7 10.6073 12.3 10.6073 12.7 11.0073L15.7 14.0073C16.1 14.4073 16.1 15.0073 15.7 15.4073C15.5 15.6073 15.3 15.7073 15 15.7073Z'
                        fill='#1D2E2E'
                        fillOpacity='0.65'
                      />
                    </svg>

                    <div>
                      <label htmlFor='photo'>Upload Logo</label>

                      <input
                        type='file'
                        name='logo_url'
                        // onChange={(e) => LogoUpload(e)}
                        id='photo'
                        className={styles.photo}
                        accept='image/png, image/jpeg, image/img'
                      />
                    </div>
                  </div>
                </span>
              </div>
            </div>
            <>
              {/* {logourl && ( */}
              <div className={styles.logodelete}>
                <div className={styles.logochange}>
                  <img
                    className={styles.logoimage}
                    //   src={URL.createObjectURL(logourl)}
                    alt='Uploaded Logo'
                  />
                  <div className={styles.uploadedlogo}>
                    {/* <p>Uploaded Logo.{logourl.type.split("/").pop()}</p> */}
                    <span>
                      {/* {logourl.type.split("/").pop()} . {fileSizeInMB} mb */}
                    </span>
                  </div>
                </div>
                <button>Delete</button>
              </div>
              {/* )} */}
            </>
          </div>
        </div>
        <div className={styles.canceldone}>
          <button className={styles.canceltime}>Cancel</button>
          <button className={styles.donetime} type='submit'>
            Save
          </button>
        </div>
      </div>
    </form>
  );
}
