/** @format */

import React from "react";
import styles from "../Contact.module.css";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
// import arrow from "../../components/elements/support/arrow.svg";
import arrow from "../../../elements/support/arrow.svg";
export default function AddMobileContact({
  CancelAddContact,
  isValue,
  Values,
  contacts,
  setContacts,
  setIsValue,
  isContacts,
  setIsContacts,
}) {
  const contactSaved = Object.values(isValue).every((val) => val.trim() !== "");
  console.log(isValue);

  const navigate = useNavigate();
  const Submit = () => {
    const exists = contacts.some((c) => c.email === isValue.email);
    if (exists) {
      toast.error("A contact with this email already exists.");
      return;
    }

    const token = localStorage.getItem("Token");

    axios
      .post("https://api.luround.com/v1/crm/new-contact", isValue, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log(res.data);
        console.log("data sent successfully", isValue);
        toast.success("Contact added successfully");

        setIsContacts((prev) => [...prev, isValue]);
        setContacts([...contacts, isValue]);
        setIsValue({ name: "", email: "", phone_number: "" });
        CancelAddContact();
        setTimeout(() => {
          navigate("/contact");
        }, 2000);
      });
  };

  return (
    <div className={styles.contactcontainer}>
      <div className={styles.contactline}>
        <div className={styles.contactsvg}>
          <img src={arrow} onClick={CancelAddContact} alt='' />

          <label>Add new contact</label>
        </div>
        <hr />
      </div>

      <div className={styles.contactinfo}>
        <div className={styles.contactdetails}>
          <label htmlFor='name'>Name</label>
          <input
            id='name'
            placeholder='Name'
            name='name'
            value={isValue.name}
            onChange={Values}
          />
        </div>
        <div className={styles.contactdetails}>
          <label htmlFor='email'>Email address</label>
          <input
            id='email'
            placeholder='Email address'
            type='email'
            name='email'
            value={isValue.email}
            onChange={Values}
          />
        </div>
        <div className={styles.contactdetails}>
          <label htmlFor='phone'>Phone number</label>
          <input
            id='phone'
            placeholder='Phone number'
            name='phone_number'
            value={isValue.phone_number}
            onChange={Values}
            type='tel'
            maxLength='11'
            inputMode='numeric'
            pattern='[0-9]*'
          />
        </div>
      </div>

      <div className={styles.buttons}>
        <button
          className={styles.next}
          disabled={!contactSaved}
          onClick={Submit}
        >
          Add Contact
        </button>
      </div>
    </div>
  );
}
