/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import Storefont from "./Storefont";
import PopUp from "./Popup/PopUp";

export default function FirstPage({ onComponentSwitch }) {
  const [isStorefont, setisStorefont] = useState(false);

  function AddProduct() {
    setisStorefont(true);
  }

  function CancelAddProduct() {
    setisStorefont(false);
  }
  return (
    <section className={styles.contact}>
      {isStorefont ? (
        <PopUp />
      ) : (
        <div className={styles.savedaccount}>
          <div className={styles.bank}>
            <svg
              width='152'
              height='165'
              viewBox='0 0 152 165'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M60.7 120C93.837 120 120.7 93.1371 120.7 60C120.7 26.8629 93.837 0 60.7 0C27.5629 0 0.699951 26.8629 0.699951 60C0.699951 93.1371 27.5629 120 60.7 120Z'
                fill='#EBFFFF'
              />
              <g clip-path='url(#clip0_11698_7843)'>
                <path
                  d='M53.8 109.832V141.9C53.8 142.895 54.1951 143.849 54.8984 144.552C55.6017 145.255 56.5555 145.65 57.55 145.65H125.05C126.045 145.65 126.998 145.255 127.702 144.552C128.405 143.849 128.8 142.895 128.8 141.9V109.833M56.6287 63.1504H125.971C126.786 63.1504 127.579 63.4158 128.23 63.9066C128.88 64.3973 129.353 65.0866 129.577 65.8702L136.3 89.4004H46.3L53.023 65.8702C53.2468 65.0866 53.7199 64.3973 54.3704 63.9066C55.021 63.4158 55.8138 63.1504 56.6287 63.1504Z'
                  fill='white'
                />
                <path
                  d='M53.8 109.832V141.9C53.8 142.895 54.1951 143.849 54.8984 144.552C55.6017 145.255 56.5555 145.65 57.55 145.65H125.05C126.045 145.65 126.998 145.255 127.702 144.552C128.405 143.849 128.8 142.895 128.8 141.9V109.833M56.6287 63.1504H125.971C126.786 63.1504 127.579 63.4158 128.23 63.9066C128.88 64.3973 129.353 65.0866 129.577 65.8702L136.3 89.4004H46.3L53.023 65.8702C53.2468 65.0866 53.7199 64.3973 54.3704 63.9066C55.021 63.4158 55.8138 63.1504 56.6287 63.1504Z'
                  stroke='#00A3A3'
                  strokeWidth='4.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M76.3 89.4004V96.9004C76.3 100.879 74.7197 104.694 71.9067 107.507C69.0936 110.32 65.2783 111.9 61.3 111.9C57.3218 111.9 53.5065 110.32 50.6934 107.507C47.8804 104.694 46.3 100.879 46.3 96.9004V89.4004M106.3 89.4004V96.9004C106.3 100.879 104.72 104.694 101.907 107.507C99.0936 110.32 95.2783 111.9 91.3 111.9C87.3218 111.9 83.5065 110.32 80.6934 107.507C77.8804 104.694 76.3 100.879 76.3 96.9004V89.4004M136.3 89.4004V96.9004C136.3 100.879 134.72 104.694 131.907 107.507C129.094 110.32 125.278 111.9 121.3 111.9C117.322 111.9 113.506 110.32 110.693 107.507C107.88 104.694 106.3 100.879 106.3 96.9004V89.4004'
                  fill='white'
                />
                <path
                  d='M76.3 89.4004V96.9004M76.3 96.9004C76.3 100.879 74.7197 104.694 71.9067 107.507C69.0936 110.32 65.2783 111.9 61.3 111.9C57.3218 111.9 53.5065 110.32 50.6934 107.507C47.8804 104.694 46.3 100.879 46.3 96.9004V89.4004M76.3 96.9004C76.3 100.879 77.8804 104.694 80.6934 107.507C83.5065 110.32 87.3218 111.9 91.3 111.9C95.2783 111.9 99.0936 110.32 101.907 107.507C104.72 104.694 106.3 100.879 106.3 96.9004M106.3 89.4004V96.9004M106.3 96.9004C106.3 100.879 107.88 104.694 110.693 107.507C113.506 110.32 117.322 111.9 121.3 111.9C125.278 111.9 129.094 110.32 131.907 107.507C134.72 104.694 136.3 100.879 136.3 96.9004V89.4004'
                  stroke='#00A3A3'
                  strokeWidth='4.8'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </g>
              <defs>
                <clipPath id='clip0_11698_7843'>
                  <rect
                    width='120'
                    height='120'
                    fill='white'
                    transform='translate(31.3 44.4004)'
                  />
                </clipPath>
              </defs>
            </svg>

            <div className={styles.savedaddaccount}>
              <span>No product yet </span>
              <label>
                Click on the <b>“Add product”</b> button to <br />
                start adding your products
              </label>
            </div>
          </div>
          <div>
            <button
              className={`${styles.addanaccount} ${isStorefont ? "open" : ""}`}
              onClick={AddProduct}
            >
              Add product
            </button>
            {/* {isStorefont && (
            <PopUp
              onComponentSwitch={onComponentSwitch}
              CancelAddProduct={CancelAddProduct}
            />
          )} */}
          </div>
        </div>
      )}
      {/* <Storefont
        isStorefont={isStorefont}
        AddProduct={AddProduct}
        CancelAddProduct={CancelAddProduct}
        onComponentSwitch={onComponentSwitch}
      /> */}
    </section>
  );
}
