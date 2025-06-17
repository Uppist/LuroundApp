/** @format */

import React from "react";
import styles from "./Review.module.css";

export default function Reviews() {
  return (
    <section className={styles.review}>
      <div>
        <label>Reviews</label>
        <div>
          <a className={styles.reviews} href=''>
            See all reviews
          </a>
        </div>
      </div>
    </section>
  );
}
