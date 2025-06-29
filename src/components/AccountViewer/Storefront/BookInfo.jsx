import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import styles from './store.module.css';

const BookInfo = ({ book, onAddToCart, onBack }) => {
  return (
    <div className={styles.storeContainer}>
      <button onClick={onBack} className={styles.backButton}>
        <FiArrowLeft /> Back
      </button>
      {book && (
        <div className={styles.bookInfoWrapper}>
          <div className={styles.bookInfoImageWrapper}>
            <img src={book.image} alt={book.title} className={styles.bookInfoImage} />
          </div>
          <div className={styles.bookInfoDetails}>
            <h2 className={styles.bookInfoTitle}>
              {book.title}<span className={styles.bookInfoPrice}>{book.price}</span>
            </h2>
            <span>
              {<span className={styles.by}>by</span>}  
              {<span className={styles.authorName}>{book.author}</span>}
            </span>
            <p><span className={styles.bookDescription}>Description </span> <br /></p>
            <p className={styles.bookInfo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Duis 
              aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
              nulla pariatur.
            </p>
            <p className={styles.bookCategory}>Category: <span className={styles.eBook}>eBook</span></p>
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