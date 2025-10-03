/** @format */
import React, { useState, useEffect } from "react";
import styles from "./OneOff.module.css";

export default function VirtualContainer({
  data,
  selectedServices,
  setSelectedServices,
  index,
}) {
  const [selectRadio, setSelectRadio] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedPricing, setSelectedPricing] = useState(null);
  const [pricingArray, setPricingArray] = useState([]);

  const serviceId = data.id || data._id;

  useEffect(() => {
    const array = Array.isArray(data?.pricing)
      ? data.pricing
      : data?.pricing
      ? [data.pricing]
      : [];

    setPricingArray(array);

    if (array[0]) {
      setSelectedPricing(array[0]);

      let defaultType = "";
      let defaultPrice = 0;

      if (array[0].virtual && array[0].virtual !== "N/A") {
        defaultType = "virtual";
        defaultPrice = Number(array[0].virtual) || 0;
      } else if (array[0].in_person && array[0].in_person !== "N/A") {
        defaultType = "in-person";
        defaultPrice = Number(array[0].in_person) || 0;
      }

      setSelectRadio(defaultType);

      // ✅ Ensure selectedServices is updated with correct ID

      if (setSelectedServices) {
        setSelectedServices((prev) =>
          prev.map((s) =>
            (s.id || s._id) === serviceId
              ? {
                  ...s,
                  chosenPricing: defaultType,
                  selectedPrice: defaultPrice,
                }
              : s
          )
        );
      }
    }
  }, [data, setSelectedServices]);

  const activePricing = selectedPricing;

  function radioChange(type) {
    setSelectRadio(type);

    let chosenPrice = 0;
    if (type === "virtual") {
      chosenPrice = Number(activePricing?.virtual) || 0;
    } else if (type === "in-person") {
      chosenPrice = Number(activePricing?.in_person) || 0;
    }

    setSelectedServices((prev) =>
      prev.map((s) =>
        (s.id || s._id) === serviceId
          ? { ...s, chosenPricing: type, selectedPrice: chosenPrice }
          : s
      )
    );
  }

  function dropDown() {
    setIsOpen((prev) => !prev);
  }

  function handleDropdown(pricingObj) {
    setSelectedPricing(pricingObj);
    setIsOpen(false);

    const price =
      selectRadio === "virtual"
        ? Number(pricingObj?.virtual || 0)
        : Number(pricingObj?.in_person || 0);

    setSelectedServices((prev) =>
      prev.map((s) =>
        (s.id || s._id) === serviceId
          ? { ...s, chosenPricing: selectRadio, selectedPrice: price }
          : s
      )
    );
  }

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
            name={`radio-${index}`}
            checked={selectRadio === "virtual"}
            onChange={() => radioChange("virtual")}
          />
          <span>Virtual</span>
        </div>
        <div className={styles.inperson}>
          <input
            type='radio'
            name={`radio-${index}`}
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
                  </span>
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
              ? activePricing?.in_person && activePricing.in_person !== "N/A"
                ? `₦${Number(activePricing.in_person).toLocaleString()}`
                : "N/A"
              : selectRadio === "virtual"
              ? activePricing?.virtual && activePricing.virtual !== "N/A"
                ? `₦${Number(activePricing.virtual).toLocaleString()}`
                : "N/A"
              : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}
