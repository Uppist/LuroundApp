/** @format */

import React from "react";
import styles from "./Brands.module.css";
import { userContext } from "../../../../Context";
import { useContext } from "react";
export default function Brands() {
  const [userData] = useContext(userContext);
  const validBrands = (userData.brands || []).filter(
    (b) => b.logo?.trim() && b.brand_name?.trim()
  );
  return (
    <section className={styles.brand}>
      <label>Brands I've worked with</label>
      <div>
        {validBrands.map((brand, index) => (
          <img
            key={index}
            src={brand.logo}
            alt={brand.brand_name}
            className={styles.logoImage}
          />
        ))}
      </div>
    </section>
  );
}
