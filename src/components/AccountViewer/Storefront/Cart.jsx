import React, { useState, useEffect } from 'react';
import styles from './store.module.css';
import { FiArrowLeft, FiTrash2 } from 'react-icons/fi';

const Cart = ({ cartCount: initialCartCount, cartItems: initialCartItems, onBack, onItemsChange, onCheckout }) => {
  const [items, setItems] = useState(initialCartItems);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [cartCount, setCartCount] = useState(initialCartCount);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [countryCode, setCountryCode] = useState('+234');

  useEffect(() => {
    setItems(initialCartItems);
    setCartCount(initialCartItems.length);
  }, [initialCartItems]);

  const handleQuantityChange = (index, change) => {
    const newItems = [...items];
    newItems[index].quantity = Math.max(1, (newItems[index].quantity || 1) + change);
    setItems(newItems);
  };

  const subtotal = Math.round(items.reduce((total, item) => {
    return total + (parseFloat(item.price.replace('N', '')) * (item.quantity || 1));
  }, 0));

  const formattedSubtotal = subtotal.toLocaleString('en-US') + ',000';

  const handleDelete = () => {
    const updatedItems = items.filter(item => !item.checked);
    setItems(updatedItems);
    setCartCount(updatedItems.length);
    if (onItemsChange) {
      onItemsChange(updatedItems, updatedItems.length);
    }
    setShowDeleteModal(false);
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return fullName.trim() !== '' && emailRegex.test(email.trim()) && phone.trim() !== '';
  };

  const handleCheckoutClick = () => {
    if (onCheckout && validateForm()) {
      onCheckout(); // Triggers the transition to CartSuccess only if form is valid
    }
  };

  return (
    <div className={styles.storeContainer}>
      <button onClick={onBack} className={styles.backButton}>
        <FiArrowLeft /> Back
      </button>
      <div className={styles.cartWrapper}>
        <div className={styles.headerRow}>
            <h2 className={styles.cartTitle}>My Cart  ({cartCount})
                <button className={styles.deleteAllButton} onClick={() => setShowDeleteModal(true)}><FiTrash2 /></button>
            </h2>
        </div>
        {cartCount === 0 ? (
          <p className={styles.cartEmpty}>Your cart is empty.</p>
        ) : (
          <div className={styles.cartContent}>
            <div className={styles.cartItems}>
              {items.map((item, index) => (
                <div key={index} className={styles.cartItem}>
                  <input
                    type="checkbox"
                    className={styles.cartItemCheckbox}
                    checked={item.checked}
                    onChange={(e) => {
                      const newItems = [...items];
                      newItems[index].checked = e.target.checked;
                      setItems(newItems);
                    }}
                    readOnly
                  />
                  <img src={item.image} alt={item.title} className={styles.cartItemImage} />
                  <div className={styles.cartItemDetails}>
                    <h3 className={styles.cartItemTitle}>{item.title}
                        <p className={styles.cartItemAuthor}>{item.author ? `by ${item.author}` : ''}</p> 
                    </h3>
                    <br />
                    <p className={styles.cartItemPrice}>{item.price}</p>
                  </div>
                  <div className={styles.cartItemQuantity}>
                    <button
                      className={styles.quantityButton}
                      onClick={() => handleQuantityChange(index, -1)}
                    >
                      -
                    </button>
                    <span className={styles.quantityValue}>{item.quantity || 1}</span>
                    <button
                      className={styles.quantityButton}
                      onClick={() => handleQuantityChange(index, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles.contactInformation}>
              <h3>Contact Information</h3>
                <h4 className={styles.formInfo}> Full name</h4>
              <input
                type="text"
                placeholder="Full name"
                className={styles.contactInput}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
                <h4 className={styles.formInfo}>Email address</h4>
              <input
                type="email"
                placeholder="Email address"
                className={styles.contactInput}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
                <h4 className={styles.formInfo}>Phone number</h4>
              <div className={styles.phoneInputGroup}>
                <select
                  className={styles.countryCode}
                  value={countryCode}
                  onChange={(e) => setCountryCode(e.target.value)}
                >
                  <option className={styles.formInfo} value="+234">(+234) Nigeria</option>
                  <option className={styles.formInfo} value="+1">(+1) United States </option>
                  <option className={styles.formInfo} value="+44">(+44) United Kingdom</option>
                  <option className={styles.formInfo} value="+91">(+91) India</option>
                  <option className={styles.formInfo} value="+81">(+81) Japan</option>
                  <option className={styles.formInfo} value="+86">(+86) China</option>
                  <option className={styles.formInfo} value="+33">(+33) France</option>
                  <option className={styles.formInfo} value="+49">(+49) Germany</option>
                  <option className={styles.formInfo} value="+7">(+7) Russia</option>
                  <option className={styles.formInfo} value="+55">(+55) Brazil</option>
                </select>
                <input
                  type="tel"
                  placeholder="Phone number"
                  className={styles.contactInput}
                  style={{ width: '440px' }}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className={styles.totalRow}>
                <span className={styles.totalLabel}>Total</span>
                <span className={styles.totalValue}>N{formattedSubtotal}</span>
              </div>
              <p className={styles.termsText}>By clicking the "Checkout" button, you agree to Luroond's <button className={styles.termsButton}>Terms & Conditions</button></p>
              <div className={styles.buttonGroup}>
                <button className={styles.cancelButton} onClick={onBack}>
                  Cancel
                </button>
                <button
                  className={styles.checkoutButton}
                  onClick={handleCheckoutClick}
                  disabled={!validateForm()}
                  style={{ opacity: validateForm() ? 1 : 0.5, cursor: validateForm() ? 'pointer' : 'not-allowed' }}
                >
                  Checkout ({cartCount})
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      {showDeleteModal && (
        <div className={styles.deleteModal}>
          <div className={styles.deleteModalContent}>
            <h3>Delete Product?</h3>
            <p>Are you sure you want to delete this product from your cart?</p>
            <div className={styles.buttonGroupss}>
              <button className={styles.deleteCancelButtonModal} onClick={() => setShowDeleteModal(false)}>
                Cancel
              </button>
              <button className={styles.deleteConfirmButtonModal} onClick={handleDelete}>
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;