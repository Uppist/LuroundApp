// store.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import styles from './store.module.css';
import { FiSearch, FiShoppingCart, FiX, FiArrowRight } from 'react-icons/fi';
import BookInfo from './BookInfo';

// Book Images
import beautifulResistance from '/public/assets/png/beautiful-resistance.png';
import contentFuel from '/public/assets/png/content-fuel.png';
import thinking from '/public/assets/png/thinking.png';
import milk from '/public/assets/png/milk.png';

// Book Component
const Book = ({ title, price, image }) => {
  const navigate = useNavigate(); // Hook to handle navigation

  const handleBookClick = () => {
    // Navigate to BookInfo page with book details as state
    navigate('/BookInfo');
  };

  return (
    <div className={styles.bookItem} onClick={handleBookClick}>
      <img src={image} alt={title} className={styles.bookImage} />
      <div className={styles.bookDetails}>
        <h3 className={styles.bookTitle}>{title}</h3>
        <p className={styles.bookPrice}>{price}</p>
        <FiArrowRight className={styles.arrowIcon} />
      </div>
    </div>
  );
};

const Store = () => {
  const [cartCount, setCartCount] = useState(0); // initial cart is empty
  const [searchText, setSearchText] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const handleClearSearch = () => {
    setIsSearchActive(false);
    setSearchText('');
  };

  // Sample book data (expanded to 8 for two rows of 4)
  const books = [
    { title: 'Beautiful Resistance', price: 'N7,000', image: beautifulResistance },
    { title: 'Thinking Fast and Slow', price: 'N11,500', image: thinking },
    { title: 'Milk and Honey', price: 'N3,000', image: milk },
    { title: 'The Content Fuel Framework', price: 'N2,500', image: contentFuel },
    { title: 'The Content Fuel Framework', price: 'N2,500', image: contentFuel },
    { title: 'Milk and Honey', price: 'N3,000', image: milk },
    { title: 'Beautiful Resistance', price: 'N7,000', image: beautifulResistance },
    { title: 'Thinking Fast and Slow', price: 'N11,500', image: thinking },
  ];

  return (
    <div className={styles.storeContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Storefront</h2>

        <div className={styles.searchWrapper}>
          <FiSearch className={styles.searchIcon} />
          <input
            type="text"
            placeholder={isSearchActive ? '' : 'Search'}
            className={styles.searchInput}
            value={searchText}
            onFocus={() => setIsSearchActive(true)}
            onChange={(e) => setSearchText(e.target.value)}
          />
          {isSearchActive && (
            <FiX className={styles.clearIcon} onClick={handleClearSearch} />
          )}
        </div>

        <div className={styles.cartWrapper}>
          <FiShoppingCart className={styles.cartIcon} />
          {cartCount > 0 && <span className={styles.cartBadge}>{cartCount}</span>}
        </div>
      </div>

      <div className={styles.tabs}>
        {['All', 'eBooks', 'Courses', 'Music & Audio', 'Photography', 'Digital arts'].map((item, index) => (
          <button
            key={index}
            className={`${styles.tabButton} ${index === 0 ? styles.activeTab : ''}`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.booksGrid}>
        {books.map((book, index) => (
          <Book key={index} title={book.title} price={book.price} image={book.image} />
        ))}
      </div>
    </div>
  );
};

export default Store;