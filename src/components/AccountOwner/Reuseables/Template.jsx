/** @format */

import React from "react";
import styles from "./style.module.css";
import image1 from "../../elements/Template/image1.png";
import image2 from "../../elements/Template/image2.png";
import image3 from "../../elements/Template/image3.png";
import image4 from "../../elements/Template/image4.png";

export default function Template({ onClose, onSelect }) {
  const images = [image1, image2, image3, image4];

  return (
    <div className='profiledropdown'>
      <div className='overlaydropdown' onClick={onClose}></div>
      <div className={styles.templatepopup}>
        <label>Select an Image</label>
        <div className={styles.template}>
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`template-${index}`}
              onClick={() => onSelect(imgSrc)} // Pass selected image
            />
          ))}
        </div>
      </div>
    </div>
  );
}
