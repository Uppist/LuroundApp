/** @format */
import { useState } from "react";
import styles from "./style.module.css";
import Container from "./Container";
import Amount from "./Amount";

export default function Pricing() {
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

          <Amount />
        </div>
        <div>
          <button className={styles.next}>Next</button>
        </div>
      </div>
    </section>
  );
}
