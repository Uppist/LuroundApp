/** @format */

import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import styles from "./store.module.css";

const BookInfo = ({ book, onAddToCart, onBack, storeFront }) => {
  console.log(book);
  return (
    <div className={styles.storeContainer}>
      <button onClick={onBack} className={styles.backButton}>
        <FiArrowLeft /> Back
      </button>
      {book && (
        <div className={styles.bookInfoWrapper}>
          <div className={styles.bookInfoImageWrapper}>
            <img
              src={book.photoURL}
              alt={book.title}
              className={styles.bookInfoImage}
            />
          </div>
          <div className={styles.bookInfoDetails}>
            <div>
              <h2 className={styles.bookInfoTitle}>
                {book.product_name}
                <span className={styles.bookInfoPrice}>
                  ₦{Number(book.price).toLocaleString()}
                </span>
              </h2>
              <span className={styles.author}>
                {<span className={styles.by}>by</span>}  
                {<span className={styles.authorName}>{book.owner}</span>}
              </span>
            </div>

            <div className={styles.p}>
              <p>
                <span className={styles.bookDescription}>Description </span>{" "}
                <br />
              </p>
              <p className={styles.bookInfo}>{book.description}</p>
            </div>
            <div>
              <p className={styles.bookCategory}>
                Category - <span className={styles.eBook}>{book.category}</span>
              </p>
            </div>
            <button onClick={onAddToCart} className={styles.addToCartButton}>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookInfo;
