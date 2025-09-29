/** @format */

import React, { useState, useEffect } from "react";
import styles from "./Financials.module.css";
import CreateNew from "./CreateNew";
import { Link, useNavigate } from "react-router-dom";
import Edit from "./Quotes/Edit/Edit";
import Quotes from "./Quotes/Quotes";

export default function Financials() {
  const [activeComponent, setActiveComponent] = useState(null);
  const navigate = useNavigate();

  function onComponentSwitch(item) {
    setActiveComponent(item);
  }

  useEffect(() => {
    console.log("Active component updated to:", activeComponent);
  }, [activeComponent]);

  return (
    <section className={styles.financial}>
      <div className={styles.financials}>
        <label>Financials</label>
        <CreateNew onComponentSwitch={onComponentSwitch} />
      </div>

      <div className={styles.financialcontainer}>
        <div className={styles.container1}>
          <Link to='/quote'>
            <label className={styles.quote}>Quotes</label>
          </Link>
        </div>
        <div className={styles.container2}>
          <Link to='/invoice'>
            <label className={styles.invoice}>Invoices</label>
          </Link>
        </div>
        <div className={styles.container3}>
          <Link to='/receipt'>
            <label className={styles.receipt}>Receipts</label>
          </Link>
        </div>
      </div>
    </section>
  );
}
