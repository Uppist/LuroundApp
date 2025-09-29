/** @format */

import React, { useContext, useState } from "react";
import styles from "./store.module.css";
import { FiSearch, FiShoppingCart, FiX, FiArrowRight } from "react-icons/fi";
import BookInfo from "./BookInfo";
import Cart from "./Cart";
import CartSuccess from "./CartSuccess";

// Book Images
import beautifulResistance from "/public/assets/png/beautiful-resistance.png";
import contentFuel from "/public/assets/png/content-fuel.png";
import thinking from "/public/assets/png/thinking.png";
import milk from "/public/assets/png/milk.png";
import { StorefrontContext } from "../../Context";
import { ViewerStoreContext } from "../../ViewerContext";

const Store = () => {
  const [cartCount, setCartCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [isSearchActive, setIsSearchActive] = useState(false);
  const [isBookInfo, setIsBookInfo] = useState(false);
  const [isCart, setIsCart] = useState(false);
  const [isCartSuccess, setIsCartSuccess] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [cartItems, setCartItems] = useState([]);

  const handleClearSearch = () => {
    setIsSearchActive(false);
    setSearchText("");
  };

  const handleBookClick = (book) => {
    setSelectedBook(book); // Ensure the full book object is set
    handleBookAuthor(book.author); // Call with author if available
    setIsBookInfo(true); // Show BookInfo
  };

  // Function to add item to cart, passed to BookInfo
  const handleAddToCart = () => {
    if (
      selectedBook &&
      !cartItems.some((item) => item.title === selectedBook.title)
    ) {
      setCartItems([...cartItems, selectedBook]);
      setCartCount((prevCount) => prevCount + 1);
    }
    setIsCart(true); // Show Cart
    setIsBookInfo(false); // Hide BookInfo
  };

  // Empty function to hold bookAuthor as a placeholder
  const handleBookAuthor = (bookAuthor) => {
    // Placeholder function - to be implemented later
  };

  // Show Cart when cart icon is clicked
  const handleCartClick = () => {
    setIsCart(true); // Show Cart
    setIsBookInfo(false); // Hide BookInfo
  };

  const handleItemsChange = (newItems, newCount) => {
    setCartItems(newItems);
    setCartCount(newCount);
  };

  const handleCheckoutSuccess = () => {
    setIsCartSuccess(true); // Show CartSuccess
    setIsCart(false); // Hide Cart
  };

  const handleBackToStore = () => {
    setIsCart(false); // Hide Cart
    setIsCartSuccess(false); // Hide CartSuccess
    setIsBookInfo(false); // Ensure BookInfo is hidden
  };

  const [userViewerStore, setUserViewerStore] = useContext(ViewerStoreContext);
  function formatCategory(category) {
    return category
      .replace(/\s*&\s*/g, "/")
      .replace(/\s+/g, "_")
      .trim()
      .toLowerCase();
  }

  const [click, setClick] = useState("All");

  console.log(userViewerStore);

  return isBookInfo ? (
    <BookInfo
      book={selectedBook}
      onAddToCart={handleAddToCart}
      onBack={handleBackToStore}
      // storeFront={storeFront[index]}
    />
  ) : isCart ? (
    <Cart
      cartCount={cartCount}
      cartItems={cartItems}
      book={selectedBook}
      onBack={handleBackToStore}
      onItemsChange={handleItemsChange}
      onCheckout={handleCheckoutSuccess} // New prop for checkout action
    />
  ) : isCartSuccess ? (
    <CartSuccess onBack={handleBackToStore} />
  ) : (
    <div className={styles.storeContainer}>
      <div className={styles.header}>
        <h2 className={styles.title}>Storefront</h2>

        <div className={styles.searchWrapper}>
          <FiSearch className={styles.searchIcon} />
          <input
            type='text'
            placeholder={isSearchActive ? "" : "Search"}
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
          <FiShoppingCart
            className={styles.cartIcon}
            onClick={handleCartClick}
          />
          <span className={styles.cartBadge}>{cartCount}</span>
        </div>
      </div>

      <div className={styles.tabs}>
        {[
          "All",
          "eBooks",
          "Courses",
          "Music & Audio",
          "Photography",
          "Digital arts",
        ].map((item, index) => (
          <button
            key={index}
            onClick={() => setClick(item)}
            className={`${styles.tabButton} ${
              click === item ? styles.activeTab : ""
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className={styles.booksGrid}>
        {userViewerStore
          .filter((data) => {
            if (click === "All" || click === "") return true;
            return formatCategory(data.category) === formatCategory(click);
          })
          .map((book, index) => (
            <div
              key={index}
              className={styles.bookItem}
              onClick={() => handleBookClick(book)}
            >
              <img
                src={book.photoURL}
                alt={book.product_name}
                className={styles.bookImage}
              />
              <div className={styles.bookDetails}>
                <h3 className={styles.bookTitle}>{book.product_name}</h3>
                <p className={styles.bookPrice}>
                  ₦{Number(book.price).toLocaleString()}
                </p>
                <FiArrowRight className={styles.arrowIcon} />
              </div>
            </div>
          ))}
      </div>
      {userViewerStore.filter((data) => {
        if (click === "All" || click === "") return true;
        return formatCategory(data.category) === formatCategory(click);
      }).length === 0 && (
        <p className={styles.emptyState}>
          {" "}
          No {click === "All" || click === "" ? "products" : click} here yet
        </p>
      )}
    </div>
  );
};

export default Store;
