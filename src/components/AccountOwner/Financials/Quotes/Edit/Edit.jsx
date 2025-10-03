/** @format */

import React, { useContext, useState } from "react";
import styles from "./Edit.module.css";
import image from "../../../../elements/image.png";
import AddService from "./AddService";
import BankSvg from "./BankSvg";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { BankContext, userContext } from "../../../../Context";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import { toast } from "react-toastify";

export default function Edit({ onComponentSwitch }) {
  const { type } = useParams();
  const location = useLocation();

  // Data from navigation state
  const data = location.state || {};
  const invoiceData = location.state || {};
  const ReceiptData = location.state || {};

  const receipt = location.pathname.includes("receipt");
  const invoice = location.pathname.includes("invoice");

  console.log(ReceiptData);

  function Back(item) {
    onComponentSwitch(item);
  }

  function formatShortDate(dateObj) {
    if (!dateObj) return "";
    return dateObj
      .toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "2-digit",
        year: "numeric",
      })
      .replace(",", "");
  }

  console.log(type);

  const quoteIndex = 0;
  const quoteNumber = String(quoteIndex + 1).padStart(6, "0");

  const [userData] = useContext(userContext);
  const [savedBanks] = useContext(BankContext);

  const [clientDetails, setClientDetails] = useState({
    name:
      data.name || invoiceData.send_to_name || "" || ReceiptData.send_to_name,
    email:
      data.email ||
      invoiceData.send_to_email ||
      "" ||
      ReceiptData.sent_to_email,
    phone:
      data.phone || invoiceData.phone_number || "" || ReceiptData.phone_number,
    quoteDate: invoiceData.quote_date
      ? ReceiptData.receipt_date
        ? new Date(ReceiptData.receipt_date)
        : new Date(invoiceData.quote_date)
      : null,
    dueDate: invoiceData.due_date ? new Date(invoiceData.due_date) : null,
    note: invoiceData.note || "" || ReceiptData.note,
  });

  const [selectedBank, setSelectedBank] = useState(null);

  function handleChange(e) {
    setClientDetails((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  // Validation for enabling "Send" button
  const isSend =
    (clientDetails.name || "").trim() !== "" &&
    (clientDetails.email || "").trim() !== "" &&
    (clientDetails.phone || "").trim() !== "" &&
    (clientDetails.phone || "").length === 11 &&
    clientDetails.quoteDate instanceof Date &&
    clientDetails.dueDate instanceof Date &&
    selectedBank !== null;

  const navigate = useNavigate();
  const [selectedServices, setSelectedServices] = useState(() => {
    if (data.product_detail && Array.isArray(data.product_detail)) {
      return data.product_detail;
    }
    if (
      invoiceData.product_detail &&
      Array.isArray(invoiceData.product_detail)
    ) {
      return invoiceData.product_detail;
    }
    if (
      ReceiptData.product_detail &&
      Array.isArray(ReceiptData.product_detail)
    ) {
      return ReceiptData.product_detail;
    }
    return [];
  });
  const [discountValue, setDiscountValue] = useState(0);

  const subtotal = selectedServices.reduce(
    (sum, service) => sum + (service.selectedPrice || 0),
    0
  );
  console.log("Subtotal:", subtotal);

  const VAT = Number(Math.round((7.5 / 100) * subtotal));

  const discount = Number((discountValue / 100) * subtotal) || 0;

  const total = subtotal + VAT - discount;

  function Send() {
    console.log("Client Details:", clientDetails);
    console.log("Selected Bank:", selectedBank);
    console.log(selectedServices);
    // Full object

    // Pass data when navigating
    // navigate(`/${type}`, {
    //   state: { quoteNumber, clientDetails, selectedBank },
    // });

    const quoteData = {
      send_to_name: clientDetails.name,
      send_to_email: clientDetails.email,
      quote_date: formatShortDate(clientDetails.quoteDate),
      sub_total: subtotal,
      discount: discount,
      note: clientDetails.note,
      vat: VAT,
      total: total,
      appointment_type:
        selectedServices.length > 0 ? selectedServices[0].chosenPricing : "",
      phone_number: clientDetails.phone,
      due_date: formatShortDate(clientDetails.dueDate),
      status: "SAVED",
      product_detail: selectedServices.map((service) => {
        let selectedPricingObj = Array.isArray(service.pricing)
          ? service.pricing.find((p) => p.type === service.chosenPricing)
          : null;

        return {
          service_id: service._id,
          appointment_type: service.chosenPricing,
          phone_number: "",
          date: formatShortDate(clientDetails.quoteDate),
          time: "",
          location: "",
          message: "",
          service_name: service.service_name,
          description: service.description,
          rate: service.selectedPrice,
          duration:
            service.duration ||
            service.appointment_buffer ||
            service.delivery_timeline ||
            (selectedPricingObj ? selectedPricingObj.time_allocation : ""),
          discount: discount,
          total: total,
        };
      }),
      bank_details: {
        bank: selectedBank.bank_name,
        account_name: selectedBank.account_name,
        account_number: selectedBank.account_number,
      },
      // selectedBank: selectedBank,
    };

    const invoiceData = {
      send_to_name: clientDetails.name,
      send_to_email: clientDetails.email,
      due_date: formatShortDate(clientDetails.dueDate),
      sub_total: subtotal,
      discount: discount,
      note: clientDetails.note,
      vat: VAT,
      phone_number: clientDetails.phone,

      total: total,

      bank: selectedBank.bank_name,
      account_name: selectedBank.account_name,
      account_number: selectedBank.account_number,

      product_detail: selectedServices.map((service) => {
        let selectedPricingObj = Array.isArray(service.pricing)
          ? service.pricing.find((p) => p.type === service.chosenPricing)
          : null;

        return {
          email: service.service_provider_details.email,
          displayName: service.service_provider_details.displayName,
          service_id: service._id,
          service_name: service.service_name,
          appointment_type: service.chosenPricing,
          description: service.description,
          duration:
            service.duration ||
            service.appointment_buffer ||
            service.delivery_timeline ||
            (selectedPricingObj ? selectedPricingObj.time_allocation : ""),
          discount: discount,
          phone_number: "",
          rate: service.selectedPrice,
          total: total,
          date: formatShortDate(clientDetails.quoteDate),
          time: "",
          message: "",
          location: "",
        };
      }),
    };

    const receiptData = {
      send_to_name: clientDetails.name,
      send_to_email: clientDetails.email,
      phone_number: clientDetails.phone,
      payment_status: "DRAFT",
      discount: discount,
      vat: VAT,
      sub_total: subtotal,
      total: total,
      note: clientDetails.note,
      mode_of_payment: "mode_of_payment",
      receipt_date: formatShortDate(clientDetails.quoteDate),

      product_detail: selectedServices.map((service) => {
        let selectedPricingObj = Array.isArray(service.pricing)
          ? service.pricing.find((p) => p.type === service.chosenPricing)
          : null;
        return {
          service_name: service.service_name,
          appointment_type: service.chosenPricing,
          // description: service.description,
          rate: service.selectedPrice,
          duration:
            service.duration ||
            service.appointment_buffer ||
            service.delivery_timeline ||
            (selectedPricingObj ? selectedPricingObj.time_allocation : ""),
          discount: discount,
          total: total,
        };
      }),
    };

    // console.log("Data sent", quoteData);

    // console.log("Data sent", invoiceData);

    const token = localStorage.getItem("Token");

    if (type === "quote") {
      axios
        .post("https://api.luround.com/v1/quotes/save-quote", quoteData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          console.log(res.data);
          toast.success("Quote added successfully");
          setTimeout(() => {
            navigate("/quote");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
      return;
    }

    if (type === "invoice") {
      axios
        .post(
          "https://api.luround.com/v1/invoice/generate-invoice",
          invoiceData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then((res) => {
          console.log(res.data);
          toast.success("Invoice added successfully");
          setTimeout(() => {
            navigate("/invoice");
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });

      return;
    }

    if (type === "receipt") {
      axios
        .post("https://api.luround.com/v1/receipt/save-receipt", receiptData, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          // console.log(res.data);

          toast.success("Receipt added suscessfully");
          setTimeout(() => {
            navigate("/receipt");
          }, 2000);
        })
        .catch((err) => [console.log(err)]);

      return;
    }

    console.log(quoteData);
  }

  return (
    <section className={styles.edit}>
      <Link to={-1}>
        <div className={styles.editsvg}>
          <svg
            width='7'
            height='12'
            viewBox='0 0 7 12'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6 1L1 6L6 11'
              stroke='hsla(180, 23%, 15%, 0.8)'
              strokeWidth='1.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
          <label>Back</label>
        </div>
      </Link>

      <div className={styles.editcontainer}>
        <div className={styles.quotehr}>
          <label>{type.charAt(0).toUpperCase() + type.slice(1)}</label>
          <hr />
        </div>

        <div>
          {/* User Info */}
          <div className={styles.details}>
            <img src={userData.photoUrl || image} alt='' />
            <div className={styles.label}>
              <label>{userData.displayName}</label>
              <span>{userData.email}</span>
              {userData.media_links
                ?.filter((link) => link.name === "Mobile")
                .map((link, index) => (
                  <span key={index}>{link.link}</span>
                ))}
            </div>
          </div>
          <hr />

          {/* Send To */}
          <div className={styles.sendto}>
            <label>Send to</label>
            <div className={styles.textfield}>
              <input
                type='text'
                name='name'
                value={clientDetails.name}
                onChange={handleChange}
                placeholder="Receiver's name"
              />
            </div>
          </div>

          {/* Email & Phone */}
          <div className={styles.clientdetail}>
            <div className={styles.sendto}>
              <label>Email Address</label>
              <input
                type='email'
                name='email'
                value={clientDetails.email}
                onChange={handleChange}
                placeholder='k@gmail.com'
              />
            </div>
            <div className={styles.sendto}>
              <label>Phone Number</label>
              <input
                type='text'
                name='phone'
                value={clientDetails.phone}
                onChange={handleChange}
                inputMode='numeric'
                onInput={(e) =>
                  (e.target.value = e.target.value.replace(/\D/g, ""))
                }
                maxLength={11}
                placeholder='09047653782'
              />
            </div>
          </div>

          {/* Dates */}
          <div className={styles.clientdetail}>
            <div className={styles.sendto}>
              <label>
                {receipt ? "Receipt" : invoice ? "Invoice" : "Quote"} date
              </label>
              <DatePicker
                dateFormat='dd MMM yyyy'
                onChange={(date) =>
                  setClientDetails((prev) => ({ ...prev, quoteDate: date }))
                }
                placeholderText='Select a date'
                selected={clientDetails.quoteDate}
                className={styles.datepicker}
              />
            </div>
            <div className={styles.sendto}>
              <label>Due date</label>
              <DatePicker
                dateFormat='dd MMM yyyy'
                selected={clientDetails.dueDate}
                onChange={(date) =>
                  setClientDetails((prev) => ({ ...prev, dueDate: date }))
                }
                placeholderText='Select a date'
                className={styles.datepicker}
              />
            </div>
          </div>

          <hr />

          {/* Services */}
          <AddService
            selectedServices={selectedServices}
            setSelectedServices={setSelectedServices}
            subtotal={subtotal}
            total={total}
            VAT={VAT}
            discount={discount}
            discountValue={discountValue}
            setDiscountValue={setDiscountValue}
          />
          <hr />

          {/* Bank Details */}
          <div className={styles.payment}>
            <label>Payment Details</label>
            <div className={styles.paymentcontainer}>
              {savedBanks.length > 0 ? (
                savedBanks.map((bank, index) => (
                  <div key={index} className={styles.bankradio}>
                    <div className={styles.bank}>
                      <BankSvg />
                      <div>
                        <label>{bank.account_name}</label>
                        <span>
                          {bank.bank_name} | {bank.account_number}
                        </span>
                      </div>
                    </div>
                    <input
                      type='radio'
                      name='bank'
                      checked={
                        selectedBank?.account_number === bank.account_number
                      }
                      onChange={() => setSelectedBank(bank)} // save full object
                    />
                  </div>
                ))
              ) : (
                <p>No saved banks found.</p>
              )}
              <hr />
            </div>
          </div>

          {/* Buttons */}
          <div className={styles.cancelsubmit}>
            <button className={styles.canceltime}>Cancel</button>
            <button
              disabled={!isSend}
              className={styles.donetime}
              type='button'
              onClick={Send}
            >
              Save{" "}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
