/** @format */
import { useState } from "react";
import styles from "./style.module.css";
import Container from "./Container";
import Amount from "./Amount";
import { useNavigate } from "react-router-dom";

export default function Pricing({ retainerService, setRetainerService }) {
  //amount component
  const [slots, setSlots] = useState([
    { id: Date.now(), time_allocation: "", virtual: "", in_person: "" },
  ]);

  const addSlot = () => {
    setSlots((prev) => [
      ...prev,
      { id: Date.now(), time_allocation: "", virtual: "", in_person: "" },
    ]);
  };

  const deleteSlot = (id) => {
    setSlots((prev) => prev.filter((slot) => slot.id !== id));
  };

  const updateSlot = (id, field, value) => {
    setSlots((prev) =>
      prev.map((slot) => (slot.id === id ? { ...slot, [field]: value } : slot))
    );
  };
  const navigate = useNavigate();

  function handleNext() {
    console.log(slots);
    const filledPricing = slots
      .filter(
        (slot) =>
          slot.time_allocation &&
          (slot.virtual.trim() !== "" || slot.in_person.trim() !== "")
      )
      .map((slot) => ({
        ...slot,
        virtual: slot.virtual.trim() === "" ? "N/A" : slot.virtual.trim(),
        in_person: slot.in_person.trim() === "" ? "N/A" : slot.in_person.trim(),
      }));
    console.log("Filtered Pricing:", filledPricing);

    setRetainerService((prev) => ({ ...prev, pricing: filledPricing }));
    console.log(retainerService);
    navigate("../date");
  }

  const isAnyFilled = slots.some(
    (entry) =>
      (entry.virtual ?? "").trim() !== "" ||
      (entry.in_person ?? "").trim() !== ""
  );
  return (
    <section className={styles.section}>
      <div className={styles.create}>
        <div>
          <span> Create retainer Service</span>
        </div>
        <span>2 of 3 steps</span>
      </div>

      <div className={styles.pricingtimebased}>
        <span>Pricing</span>

        <div className={styles.inputtime}>
          <Container />

          <Amount
            slots={slots}
            updateSlot={updateSlot}
            deleteSlot={deleteSlot}
            addSlot={addSlot}
          />
        </div>
        <div>
          <button
            className={styles.next}
            onClick={handleNext}
            disabled={!isAnyFilled}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
