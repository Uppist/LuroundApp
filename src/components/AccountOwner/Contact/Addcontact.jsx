/** @format */

import { React, useState } from "react";
import styles from "./Contact.module.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import CircularProgress from "@mui/material/CircularProgress";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

export default function Addcontact({
  CancelAddContact,
  isValue,
  Values,
  contacts,
  setContacts,
  setIsValue,
  isContacts,
  setIsContacts,
}) {
  // console.log(isValue);

  const contactSaved =
    (isValue?.name?.trim() || "") !== "" &&
    (isValue?.email?.trim() || "") !== "" &&
    (isValue?.phone_number?.length || 0) === 11;

  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  function Submit() {
    const exists = contacts.some((c) => c.email === isValue.email);
    if (exists) {
      toast.error("A contact with this email already exists.");
      return;
    }

    const token = localStorage.getItem("Token");
    setLoading(true);
    axios
      .post("https://api.luround.com/v1/crm/new-contact", isValue, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        toast.success("Contact added successfully");

        setIsContacts((prev) => [...prev, isValue]);
        setContacts([...contacts, isValue]);
        setIsValue({ name: "", email: "", phone_number: "" });
        CancelAddContact();
        setTimeout(() => {
          navigate("/contact");
        }, 2000);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }

  return (
    <div className={styles.desktopview}>
      <div className='popupcancel popupwithdrawpin'>
        <div className='overlay' onClick={CancelAddContact}></div>
        <div className={styles.contactcontainer}>
          <div className={styles.contactline}>
            <div className={styles.contactsvg}>
              <label>Add Contact</label>
              <CloseOutlinedIcon
                sx={{
                  width: 24,
                  height: 24,
                  fillOpacity: 0.8,
                  fill: "#1D2E2E",
                  fillLinecap: "round",
                  fillLinejoin: "round",
                }}
                onClick={CancelAddContact}
              />
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
            <button className={styles.cancel} onClick={CancelAddContact}>
              Cancel
            </button>
            <button
              className={styles.next}
              disabled={!contactSaved || loading}
              onClick={Submit}
            >
              {loading ? (
                <CircularProgress size={20} color='inherit/' />
              ) : (
                "Save"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
