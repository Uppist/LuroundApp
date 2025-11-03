/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Container({ data }) {
  console.log(data);

  return (
    <div className={styles.container}>
      <span>
        {data.pricing_model === "Ticket Tier" ? (
          data.tickets.map((ticket) => (
            <>₦{Number(ticket.amount).toLocaleString()}</>
          ))
        ) : (
          <>{data.pricing_model}</>
        )}
      </span>
    </div>
  );
}
