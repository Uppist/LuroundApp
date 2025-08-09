/** @format */

import React, { useState } from "react";
import styles2 from "../../Program.module.css";

import styles from "../../../OneOff/TimeBased/Create/create.module.css";
import ProgramDate from "./ProgramDate";
import { useNavigate } from "react-router-dom";

export default function CreateService({
  serviceType,
  programService,
  setProgramService,
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

  const [program, setProgram] = useState({
    program_start_date: "",
    program_end_date: "",
    program_recurrence: "",
    max_participants: 0,
  });

  const [pricing, setPricing] = useState([
    {
      virtual: "",
      in_person: "",
    },
  ]);

  function handleProgram(e) {
    const { name, value } = e.target;

    setProgram((prev) => ({
      ...prev,
      [name]: name === "max_participants" ? Number(value) : value,
    }));
  }
  function handlePricing(e) {
    setPricing((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function changeDate(isoDate) {
    if (!isoDate) return "";
    const dateObj = new Date(isoDate);
    if (isNaN(dateObj)) return "";
    return dateObj.toLocaleDateString("en-GB", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  }

  function Next() {
    console.log(createService);
    const cleanPrice = {
      virtual: pricing.virtual !== "" ? pricing.virtual : null,
      in_person: pricing.in_person !== "" ? pricing.in_person : null,
    };
    setProgramService((prev) => ({
      ...prev,
      ...createService,
      ...program,
      pricing: cleanPrice,
    }));
    console.log(programService);
    navigate("choosedate");
  }

  const isNext =
    createService.service_name.trim() !== "" &&
    createService.description.trim() !== "" &&
    program.max_participants > 0 &&
    program.program_end_date.trim() !== "" &&
    program.program_recurrence.trim() !== "" &&
    program.program_start_date.trim() !== "" &&
    ((pricing.virtual ?? "").trim() !== "" ||
      (pricing.in_person ?? "").trim() !== "");

  return (
    <>
      <div className={styles.createtime}>
        <div className={styles.create}>
          <div>
            <span>Create a program</span>
          </div>
          <span>1 of 2 steps</span>
        </div>
        <div className={styles.description}>
          <div className={styles.service}>
            <span>Service Name</span>
            <input
              type='text'
              name='service_name'
              value={createService.service_name}
              onChange={handleChange}
              placeholder='e.g Personal Training'
            />
          </div>
          <div className={styles.number}>
            <div className={styles.time}>
              <span>Description</span>
              <textarea
                name='description'
                value={createService.description}
                onChange={handleChange}
                placeholder='Write a brief descriptive summary of the service you provide'
              ></textarea>
            </div>
            <div className={styles.span}>
              {" "}
              <span>0/500</span>
            </div>
          </div>
        </div>
      </div>
      <ProgramDate
        programService={programService}
        setProgramService={setProgramService}
        program={program}
        setProgram={setProgram}
        handleProgram={handleProgram}
        changeDate={changeDate}
        pricing={pricing}
        handlePricing={handlePricing}
      />

      <div>
        <button onClick={Next} className={styles2.next} disabled={!isNext}>
          Next
        </button>
      </div>
    </>
  );
}
