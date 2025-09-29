/** @format */

import React, { useContext, useState } from "react";
import styles from "../style.module.css";
import nigeria from "../../../elements/nigeria.png";
import Upload from "./Upload";
import { Link, useNavigate } from "react-router-dom";
import UploadImage from "./UploadImage";
import { toast } from "react-toastify";
import { StorefrontContext } from "../../../Context";
import axios from "axios";

export default function PopUp() {
  const [selectedOption, setSelectedOption] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [options] = useState([
    "eBooks",
    "Courses",
    "Music & Audio",
    "Photography",
    "Digital Arts",
  ]);

  const [details, setDetails] = useState({
    photoURL: "",
    product_name: "",
    description: "",
    category: "",
    links: "",
    price: "",
    owner_name: "",
  });

  const [storeFront, setStoreFront] = useContext(StorefrontContext);
  function Category(option) {
    setSelectedOption(option);
    setDetails((prev) => ({
      ...prev,
      category: option,
    }));
    setIsOpen(false);
  }

  function handleChange(e) {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function formatCategory(category) {
    return category
      .replace(/\s*&\s*/g, "/")
      .replace(/\s+/g, "_")
      .trim();
  }

  const navigate = useNavigate();

  const [isExternal, setIsExternal] = useState(false);

  function Check() {
    setIsExternal((prev) => !prev);
  }
  function Next() {
    const token = localStorage.getItem("Token");
    const data = {
      product_name: details.product_name,
      description: details.description,
      price: Number(details.price),
      owner_name: details.owner_name,
      links: details.links,
      photoURL: details.photoURL,
      category: formatCategory(details.category),
    };
    console.log(data.photoUrl);
    axios
      .post("https://api.luround.com/v1/storefront/new-product", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        setStoreFront([...storeFront, data]);
        toast.success("Added a new product!");
        setTimeout(() => {
          navigate("/storefront");
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log(data);
  }
  const isDone =
    details.price.length > 0 &&
    details.product_name.trim() !== "" &&
    details.owner_name.trim() !== "" &&
    details.category.trim() !== "" &&
    details.description.trim() !== "" &&
    details.photoURL.trim() !== "";
  return (
    <div className={styles.contact}>
      <Link to={-1}>
        <button className={styles.back}>
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 1L1 6L6 11'
              stroke='currentColor'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>

          <span>Back</span>
        </button>
      </Link>
      <div className={styles.contactline}>
        <UploadImage setDetails={setDetails} details={details} />
        {/* </div> */}{" "}
        <div className={styles.contactinfo}>
          <div className={styles.contactsvg}>
            <label>Add product</label>
          </div>
          <div className={styles.contactdetails}>
            <label>Product name</label>
            <input
              placeholder='Name'
              name='product_name'
              value={details.product_name}
              onChange={handleChange}
              type='text'
            />
          </div>
          <div className={styles.contactdetails}>
            <label>Owner/author/creator</label>
            <input
              placeholder="Owner's name"
              name='owner_name'
              value={details.owner_name}
              onChange={handleChange}
              type='text'
            />
          </div>
          <div className={styles.contactdetails}>
            <label>Description</label>
            <textarea
              placeholder='Write a brief descriptive summary of the product you sell'
              name='description'
              value={details.description}
              onChange={handleChange}
              id=''
              maxLength={500}
            ></textarea>
            <span>{details.description.length}/500</span>
          </div>

          <div className={styles.contactdetails}>
            <label>Product category</label>
            <div className={styles.dropdown}>
              <div
                className={styles.dropdownButton}
                onClick={() => setIsOpen(!isOpen)}
              >
                <label>
                  {" "}
                  {selectedOption || "eBooks"}{" "}
                  <svg
                    width='16'
                    height='16'
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                      stroke='#1D2E2E'
                      strokeOpacity='0.8'
                      strokeMiterlimit='10'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    />
                  </svg>
                </label>
              </div>
              {isOpen && (
                <div className={styles.dropdownMenu}>
                  {options.map((option, index) => (
                    <ul>
                      <li
                        key={index}
                        onClick={() => Category(option)}
                        className={styles.dropdownItem}
                      >
                        {" "}
                        <label>{option}</label>
                      </li>
                    </ul>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className={styles.pricingproject}>
            <span>Pricing</span>
            <div className={styles.nigeriaprice}>
              <button>
                <div className={styles.nigeriadown}>
                  <img src={nigeria} />
                  <div className={styles.ngndown}>
                    <span>NGN</span>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                        stroke='#1D2E2E'
                        strokeOpacity='0.8'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </div>
                </div>
              </button>
              <input
                type='text'
                name='price'
                onChange={handleChange}
                value={details.price}
                inputMode='numeric'
                onInput={(e) => {
                  e.target.value = e.target.value.replace(/[^0-9]/g, "");
                }}
                placeholder='0.00'
              />
            </div>

            <div className={styles.openbox}>
              <div className={styles.box}>
                <input
                  type='checkbox'
                  name='checkbox'
                  id=''
                  onChange={Check}
                  className='checkbox'
                />
                <label htmlFor='checkbox'>
                  Redirect buyer to an external URL after a purchase
                </label>
              </div>

              {isExternal && (
                <div className={styles.redirect}>
                  <label>Redirect URL</label>
                  <input
                    type='text'
                    name='links'
                    value={details.links}
                    onChange={handleChange}
                    placeholder='https://redirecturl.com'
                  />
                </div>
              )}
            </div>
          </div>

          {/* <Upload /> */}

          <div className={styles.buttons}>
            <Link to={-1}>
              <button className={styles.cancel}>Cancel</button>
            </Link>
            <button disabled={!isDone} className={styles.next} onClick={Next}>
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
