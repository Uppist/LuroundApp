/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Contact from "../../../components/AccountOwner/Contact/Contact";
import Addcontact from "../../../components/AccountOwner/Contact/Addcontact";
import ContactSaved from "../../../components/AccountOwner/Contact/ContactSaved";

export default function ContactRouting() {
  return (
    <Routes>
      <Route path='/contact' element={<Contact />} />
      <Route path='/addnewcontact' element={<Addcontact />} />
      <Route path='/contactsaved' element={<ContactSaved />} />
    </Routes>
  );
}
