/** @format */
import React, { useState, useEffect } from "react";
import styles from "./OneOff.module.css";

export default function VirtualContainer({ data }) {
  const [selectRadio, setSelectRadio] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPricing, setSelectedPricing] = useState(null);
  const [pricingArray, setPricingArray] = useState([]);

  useEffect(() => {
    const array = Array.isArray(data?.pricing)
      ? data.pricing
      : data?.pricing
      ? [data.pricing]
      : [];
    setPricingArray(array);

    if (array[0]) {
      setSelectedPricing(array[0]);

      if (array[0].virtual && array[0].virtual !== "N/A") {
        setSelectRadio("virtual");
      } else if (array[0].in_person && array[0].in_person !== "N/A") {
        setSelectRadio("in-person");
      }
    }
  }, [data]);

  function radioChange(type) {
    setSelectRadio(type);
  }

  function dropDown() {
    setIsOpen((prev) => !prev);
  }

  function handleDropdown(pricingObj) {
    setSelectedPricing(pricingObj);
    setIsOpen(false);
  }

  const activePricing = selectedPricing;

  return (
    <div
      className={`${styles.pricesession} ${
        selectRadio === "virtual"
          ? styles.virtualbg
          : selectRadio === "in-person"
          ? styles.inpersonbg
          : ""
      }`}
    >
      {/* Radio Buttons */}
      <div className={styles.radiovirtual}>
        <div className={styles.virtual}>
          <input
            type='radio'
            name='radio'
            checked={selectRadio === "virtual"}
            onChange={() => radioChange("virtual")}
          />
          <span>Virtual</span>
        </div>
        <div className={styles.inperson}>
          <input
            type='radio'
            name='radio'
            checked={selectRadio === "in-person"}
            onChange={() => radioChange("in-person")}
          />
          <span>In-person</span>
        </div>
      </div>

      {/* Pricing + Dropdown */}
      <div className={styles.pricingamount}>
        <div className={styles.pricing}>
          {data.service_type !== "program" && (
            <div className={styles.minsarrow}>
              <div className={styles.dropdown}>
                <div
                  className={`${styles.selectlist} ${
                    isOpen ? "select-clicked" : ""
                  }`}
                  onClick={dropDown}
                >
                  <span className={styles.selectlist}>
                    {activePricing?.time_allocation || "Select"}{" "}
                    {data.service_type === "retainer" ? "months" : "mins"}
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 16 16'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M11.3104 6.34485L8.00004 9.65519L4.6897 6.34485'
                        stroke='currentColor'
                        strokeOpacity='0.8'
                        strokeMiterlimit='10'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </span>
                </div>

                {isOpen && (
                  <ul className={styles.menu}>
                    {pricingArray.map((pricingObj, idx) => (
                      <li
                        key={idx}
                        className={`menu-item ${
                          activePricing?.time_allocation ===
                          pricingObj.time_allocation
                            ? "active"
                            : ""
                        }`}
                        onClick={() => handleDropdown(pricingObj)}
                      >
                        {pricingObj.time_allocation}{" "}
                        {data.service_type === "retainer" ? "months" : "mins"}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Price Display */}
        <div className={styles.nairasession}>
          <span className={styles.naira}>
            {selectRadio === "in-person"
              ? activePricing?.in_person &&
                !isNaN(activePricing.in_person) &&
                activePricing.in_person !== "N/A"
                ? `₦${Number(activePricing.in_person).toLocaleString()}`
                : "N/A"
              : selectRadio === "virtual"
              ? activePricing?.virtual &&
                !isNaN(activePricing.virtual) &&
                activePricing.virtual !== "N/A"
                ? `₦${Number(activePricing.virtual).toLocaleString()}`
                : "N/A"
              : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
