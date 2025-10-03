/** @format */

import React, { useContext, useState } from "react";
import styles from "./Contact.module.css";
import NoContact from "./NoContact";
import ContactSaved from "./ContactSaved";
import NewContact from "./NewContact";
import { ContactContext } from "../../Context";
import AddMobileContact from "./mobileContact/AddMobileContact";
import { useNavigate } from "react-router-dom";
import MobileTransaction from "./mobileContact/MobileTransaction";

export default function Contact() {
  const [isAddContact, setIsAddContact] = useState(false);
  const [transactions, setTransactions] = useState({});
  const [transactionIndex, setTransactionIndex] = useState(null);
  const [showMobileTransaction, setShowMobileTransaction] = useState(false);
  const [showMobileAddContact, setShowMobileAddContact] = useState(false);
  const [isValue, setIsValue] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [contacts, setContacts] = useState([]);

  function Values(e) {
    let { name, value } = e.target;

    if (name === "phone_number") {
      // Keep only digits
      value = value.replace(/\D/g, "");
    }
    setIsValue((prev) => ({ ...prev, [name]: value }));
  }

  const navigate = useNavigate();

  function AddContact() {
    if (window.innerWidth <= 900) {
      setShowMobileAddContact(true);
      // navigate("/contact/add");
    } else {
      setIsAddContact(true);
    }
  }

  function Transactions() {
    if (window.innerWidth <= 900) {
      setShowMobileTransaction(true);
    } else {
      setShowMobileTransaction(false);
    }
  }

  function CancelAddContact() {
    setIsAddContact(false);
  }

  const [isContacts, setIsContacts] = useContext(ContactContext);

  console.log(isContacts);

  return (
    <section className={styles.contact}>
      {showMobileTransaction && transactionIndex !== null ? (
        <MobileTransaction
          transactions={transactions[isContacts[transactionIndex].email] || []}
          Cancel={() => setShowMobileTransaction(false)}
        />
      ) : showMobileAddContact ? (
        <AddMobileContact
          CancelAddContact={() => setShowMobileAddContact(false)}
          isValue={isValue}
          Values={Values}
          contacts={contacts}
          setContacts={setContacts}
          isContacts={isContacts}
          setIsContacts={setIsContacts}
          setIsValue={setIsValue}
        />
      ) : (
        <>
          <NewContact
            isValue={isValue}
            Values={Values}
            contacts={contacts}
            setContacts={setContacts}
            setIsValue={setIsValue}
            AddContact={AddContact}
            isAddContact={isAddContact}
            CancelAddContact={CancelAddContact}
            isContacts={isContacts}
            setIsContacts={setIsContacts}
          />

          {isContacts.length > 0 ? (
            <ContactSaved
              Transactions={Transactions}
              setTransactions={setTransactions}
              transactions={transactions}
              setTransactionIndex={setTransactionIndex}
              transactionIndex={transactionIndex}
            />
          ) : (
            <NoContact
              isAddContact={isAddContact}
              AddContact={AddContact}
              CancelAddContact={CancelAddContact}
              isValue={isValue}
              setIsValue={setIsValue}
              Values={Values}
              contacts={contacts}
              setContacts={setContacts}
              isContacts={isContacts}
              setIsContacts={setIsContacts}
            />
          )}
        </>
      )}
    </section>
  );
}
