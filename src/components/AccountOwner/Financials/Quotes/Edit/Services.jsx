/** @format */

import React from "react";
import styles from "./Edit.module.css";
import VirtualContainer from "../../../Services/OneOff/OneoffService/VirtualContainer";

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
        let price = 0;

        if (service.one_off_type === "project-based") {
          price = Number(service.project_pricing) || 0;
        } else if (service.pricing?.virtual) {
          price = Number(service.pricing.virtual) || 0;
        } else if (service.pricing?.in_person) {
          price = Number(service.pricing.in_person) || 0;
        }

        return [...prev, { ...service, selectedPrice: price }];
      }
    });
  }

  return (
    <div className={styles.services}>
      <div>
        {userService.map((service, index) => {
          const serviceId = service.id || service._id;
          const isChecked = selectedServices.some(
            (s) => (s.id || s._id) === serviceId
          );

          return (
            <div className={styles.servicelist} key={serviceId}>
              <div className={styles.serviceitem}>
                <input
                  type='checkbox'
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(service)}
                />
                <span>{service.service_name}</span>
                {isChecked && (
                  <span className={styles.type}>
                    {service.service_type === "one-off"
                      ? service.one_off_type === "time-based"
                        ? "time-based"
                        : service.one_off_type === "project-based"
                        ? "project-based"
                        : service.service_type
                      : service.service_type}
                  </span>
                )}
              </div>

              {/* Show prices only when checked */}
              {isChecked &&
                ((service.service_type === "one-off" &&
                  service.one_off_type === "time-based") ||
                service.service_type === "retainer" ||
                service.service_type === "program" ||
                service.service_type === "event" ? (
                  <>
                    <VirtualContainer
                      data={service}
                      index={index}
                      selectedServices={selectedServices}
                      setSelectedServices={setSelectedServices}
                    />
                  </>
                ) : service.service_type === "one-off" &&
                  service.one_off_type === "project-based" ? (
                  <>
                    <div className={styles.delivery}>
                      <div className={styles.timeline}>
                        <span>Delivery Timeline</span>
                        <label>Within {service.delivery_timeline}</label>
                      </div>
                      <span>
                        ₦ {Number(service.project_pricing).toLocaleString()}
                      </span>
                    </div>
                  </>
                ) : null)}
            </div>
          );
        })}
      </div>
    </div>
  );
}
