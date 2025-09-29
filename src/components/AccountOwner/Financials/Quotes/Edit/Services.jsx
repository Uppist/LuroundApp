/** @format */

import React from "react";
import styles from "./Edit.module.css";

export default function Services({
  userService,
  setSelectedServices,
  selectedServices,
}) {
  function handleCheckboxChange(service) {
    const serviceId = service.id || service._id;

    setSelectedServices((prev) => {
      if (prev.some((s) => (s.id || s._id) === serviceId)) {
        // remove if already selected
        return prev.filter((s) => (s.id || s._id) !== serviceId);
      } else {
        // add if not selected
        return [...prev, service];
      }
    });
    console.log(selectedServices);
  }

  return (
    <div className={styles.services}>
      <div>
        {userService.map((service) => {
          const serviceId = service.id || service._id;

          return (
            <div className={styles.serviceitem} key={serviceId}>
              <input
                type='checkbox'
                checked={selectedServices.some(
                  (s) => (s.id || s._id) === serviceId
                )}
                onChange={() => handleCheckboxChange(service)}
              />
              <span>{service.service_name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
