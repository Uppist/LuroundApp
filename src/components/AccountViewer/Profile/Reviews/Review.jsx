/** @format */

import React from "react";
import styles from "../../../Profile/ClientProfile/Review/Review.module.css";
import { Link } from "react-router-dom";

export default function Review() {
  return (
    <>
      <section className={styles.review}>
        <div>
          <label>Reviews</label>
          <div>
            <Link className={styles.write} to='/writeareview'>
              Write a review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
