/** @format */

import React, { useEffect, useState } from "react";
import styles from "./Edit.module.css";
import Services from "./Services";
import axios from "axios";

export default function AddService() {
  const [service, setService] = useState(false);

  function handleService() {
    setService((prev) => !prev);
  }

  const [userService, setUserService] = useState([]);
  const [selectedServices, setSelectedServices] = useState([]);

  const token = localStorage.getItem("Token");

  const serviceTypes = ["program", "one-off", "retainer", "event"];
  const subtotal = selectedServices.reduce((sum, service) => {
    // adjust based on your API shape
    const price = Number(
      service.project_pricing?.amount || service.price || service.amount || 0
    );
    return sum + price;
  }, 0);

  useEffect(() => {
    Promise.all(
      serviceTypes.map((type) =>
        axios
          .get(
            `https://api.luround.com/v1/services/get-services?service_type=${type}`,
            {
              headers: { Authorization: `Bearer ${token}` },
            }
          )
          .then((res) => res.data)
      )
    ).then((results) => {
      // merge all into one array
      const allServices = results.flat();
      console.log(allServices);
      setUserService(allServices);
    });
  }, []);

  return (
    <>
      <div>
        <div className={styles.addservice}>
          <label>Add service</label>
          <svg
            onClick={handleService}
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM17 13H13V17H11V13H7V11H11V7H13V11H17V13Z'
              fill='#1D2E2E'
              fillOpacity='0.8'
            />
          </svg>
        </div>
        {service ? (
          <Services
            userService={userService}
            setSelectedServices={setSelectedServices}
            selectedServices={selectedServices}
          />
        ) : null}
        <hr />
        <div className={styles.service}>
          <div>
            <label>SubTotal</label>
            <span>₦{Number(subtotal).toLocaleString()}</span>
          </div>
          <div>
            {" "}
            <label>Discount</label>
            <span>₦0</span>
          </div>
          <div>
            {" "}
            <label>VAT</label>
            <span>₦0</span>
          </div>
          <div>
            {" "}
            <label>Total</label>
            <span>₦0</span>
          </div>
          <hr />
        </div>
        <div className={styles.sendto}>
          <label>Note (Optional)</label>
          <textarea
            name=''
            id=''
            placeholder='write a note to the recipient'
          ></textarea>
          <span> 0/500</span>
        </div>
      </div>
    </>
  );
}
