/** @format */

import React, { useContext, useEffect, useState } from "react";
import styles from "./EditProfile.module.css";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { userContext } from "../../../Context";

export default function EditBrand({ scrollBrand }) {
  const [isBrand, setIsBrand] = useState({ brand_name: "", logo: "" });
  const [image, setImage] = useState(null);
  const [brandUrl, setBrandUrl] = useState("");

  const [userData, setUserData] = useContext(userContext);

  function handleImage(e) {
    // alert("hello");
    // console.log("File input changed");

    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setImage(selectedFile);
      console.log("Selected file:", selectedFile);
    }
  }

  async function UploadImage() {
    if (!image) return alert("Please select a file first");

    const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset", "brandImage");
    formData.append("cloud_name", "dxyzeiigv");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/dxyzeiigv/image/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      const data = res.data;
      setBrandUrl(data.secure_url);

      setIsBrand((prev) => ({ ...prev, logo: data.secure_url }));

      console.log("Uploaded image URL:", data.secure_url);
    } catch (error) {
      console.error("Upload error:", error);
    }
  }

  const fileSizeInMB = image ? (image.size / (1024 * 1024)).toFixed(2) : 0;
  useEffect(() => {
    if (image) {
      UploadImage();
    }
  }, [image]);

  function handleBrand(e) {
    setIsBrand({ ...isBrand, [e.target.name]: e.target.value });
  }
  async function handleSubmitBrand(e) {
    e.preventDefault();
    const local = localStorage.getItem("Token");

    const request = await axios.put(
      "https://api.luround.com/v1/profile/brand/add",
      { brand: isBrand },
      {
        headers: {
          Authorization: `Bearer ${local}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log(isBrand);
    // alert("Updated");
    toast.success("Updated");

    setUserData((prev) => ({
      ...prev,
      brands: [...(prev.brands || []), isBrand],
    }));

    setIsBrand({ brand_name: "", logo: "" });
  }

  return (
    <form onSubmit={handleSubmitBrand}>
      <div className={styles.editprofileabout} ref={scrollBrand}>
        <span>Brand I've worked with.</span>
        <div className={styles.firstname}>
          <span>Name of brand.</span>
          <input
            placeholder='Brand name'
            type='text'
            value={isBrand.brand_name}
            name='brand_name'
            onChange={(e) => handleBrand(e)}
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

                {/* <div> */}
                <label htmlFor='photo' className={styles.label}>
                  Upload Logo
                  <input
                    id='photo'
                    type='file'
                    onChange={handleImage}
                    accept='image/*'
                    className={styles.photo}
                  />
                </label>
                {/* </div> */}
              </div>
            </span>
          </div>
        </div>
        <>
          {image && (
            <div className={styles.logodelete}>
              <div className={styles.logochange}>
                <img
                  className={styles.logoimage}
                  src={URL.createObjectURL(image)}
                  alt='Uploaded Logo'
                />
                <div className={styles.uploadedlogo}>
                  <p>Uploaded Logo.{image?.type.split("/").pop()}</p>
                  <span>
                    {image?.type.split("/").pop()} . {fileSizeInMB} mb
                  </span>
                </div>
              </div>
              <button>Delete</button>
            </div>
          )}
        </>

        <div className={styles.canceldone}>
          <button className={styles.canceltime}>Cancel</button>
          <button type='submit' className='done-time'>
            Save
          </button>
        </div>
      </div>

      <ToastContainer />
    </form>
  );
}
