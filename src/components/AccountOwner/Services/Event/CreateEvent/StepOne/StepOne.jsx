/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";
import EventDescription from "./EventDescription";
import EventSchedule from "./EventSchedule";

export default function StepOne({
  serviceType,
  eventService,
  setEventService,
}) {
  const [createService, setCreateService] = useState({
    service_name: "",
    description: "",
    service_type: serviceType,
  });

  function handleChange(e) {
    setCreateService((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }
  const navigate = useNavigate();

  // State for the picker
  const [dates, setDates] = useState([
    { date: null, from_time: "", to_time: "" },
  ]);

  // State for what you'll send or display
  const [eventSchedule, setEventSchedule] = useState([]);

  function handleDateChange(index, field, value) {
    const updatedDates = [...dates];

    if (field === "date" && value instanceof Date) {
      // Normalize date to local midnight (no timezone shift)
      const normalizedDate = new Date(
        value.getFullYear(),
        value.getMonth(),
        value.getDate()
      );
      updatedDates[index][field] = normalizedDate;
    } else {
      updatedDates[index][field] = value;
    }

    setDates(updatedDates);

    // Store formatted date for your final schedule
    const formattedDate =
      field === "date" && value
        ? new Date(
            value.getFullYear(),
            value.getMonth(),
            value.getDate()
          ).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "short",
            year: "numeric",
          })
        : "";

    const updatedSchedule = [...eventSchedule];
    updatedSchedule[index] = {
      ...updatedSchedule[index],
      day: field === "date" ? formattedDate : updatedSchedule[index]?.day || "",
      from_time: updatedDates[index].from_time,
      to_time: updatedDates[index].to_time,
    };

    setEventSchedule(updatedSchedule);
  }

  function Next() {
    console.log("createService:", createService);
    console.log("dates:", dates);
    console.log("eventSchedule:", eventSchedule);
    setEventSchedule((prev) => ({
      ...prev,
      ...createService,
      event_scchedule: updatedSchedule,
    }));
    console.log(eventService);
    navigate("event2");
  }

  return (
    <>
      <div className={styles.createtimebased}>
        <div className={styles.createtimeservice}>
          <span>Create an Event</span>
        </div>

        <EventDescription
          serviceType={serviceType}
          createService={createService}
          setCreateService={setCreateService}
          handleChange={handleChange}
        />

        <EventSchedule
          dates={dates}
          setDates={setDates}
          handleDateChange={handleDateChange}
        />
        <div>
          <button onClick={Next} className='next'>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
