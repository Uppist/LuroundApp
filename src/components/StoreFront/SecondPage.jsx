/** @format */

import React, { useState } from "react";
import styles from "./style.module.css";
import Storefont from "./Storefont";
import product from "../elements/product.png";
import Data from "./Product.json";
import DetailPopup from "./DetailPopup";
import Edit from "./Edit";

export default function SecondPage({ onComponentSwitch }) {
  const [isStorefont, setisStorefont] = useState(false);
  const [isEdit, setIsEdit] = useState(null);
  const [isDetail, setIsDetail] = useState(null);

  function AddProduct() {
    setisStorefont(true);
  }

  function Edits(index) {
    setIsEdit(isEdit === index ? null : index);
  }

  function Detail(index, item) {
    setIsDetail(isDetail === index ? null : index);
    onComponentSwitch(item);
  }

  function Close() {
    setIsEdit(null);
    setIsDetail(null);
  }

  function CancelAddProduct() {
    setisStorefont(false);
  }
  return (
    <section className={styles.contact}>
      <Storefont
        CancelAddProduct={CancelAddProduct}
        isStorefont={isStorefont}
        AddProduct={AddProduct}
        onComponentSwitch={onComponentSwitch}
      />

      <div className={styles.products}>
        <div className={styles.all}>
          <label htmlFor=''>All</label>
        </div>
        <div className={styles.storefrontproduct}>
          <label htmlFor=''>eBooks</label>
        </div>
        <div className={styles.storefrontproduct}>
          <label htmlFor=''>Courses</label>
        </div>
        <div className={styles.storefrontproduct}>
          <label htmlFor=''>Music & Audio</label>
        </div>
        <div className={styles.storefrontproduct}>
          <label htmlFor=''>Photography</label>
        </div>
        <div className={styles.storefrontproduct}>
          <label htmlFor=''>Digital arts</label>
        </div>
      </div>

      <div className={styles.container}>
        {Data.map((data, index) => (
          <div className={styles.productcontainer} key={index}>
            <div className={styles.imgsvg}>
              <img src={product} alt='' />
              <svg
                key={index}
                onClick={() => Edits(index)}
                width='19'
                height='21'
                viewBox='0 0 19 21'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M0 4C0 1.79086 1.79086 0 4 0H15C17.2091 0 19 1.79086 19 4V21H4C1.79086 21 0 19.2091 0 17V4Z'
                  fill='#9A9A9A'
                />
                <path
                  d='M9.5 7C10.3284 7 11 6.32843 11 5.5C11 4.67157 10.3284 4 9.5 4C8.67157 4 8 4.67157 8 5.5C8 6.32843 8.67157 7 9.5 7Z'
                  fill='white'
                />
                <path
                  d='M9.5 12C10.3284 12 11 11.3284 11 10.5C11 9.67157 10.3284 9 9.5 9C8.67157 9 8 9.67157 8 10.5C8 11.3284 8.67157 12 9.5 12Z'
                  fill='white'
                />
                <path
                  d='M9.5 17C10.3284 17 11 16.3284 11 15.5C11 14.6716 10.3284 14 9.5 14C8.67157 14 8 14.6716 8 15.5C8 16.3284 8.67157 17 9.5 17Z'
                  fill='white'
                />
              </svg>
              {isEdit === index && (
                <Edit isEdit={true} Close={Close} data={data} />
              )}
            </div>
            <div className={styles.productlabel}>
              <label htmlFor=''>{data.Name}</label>
              <div className={styles.money}>
                <label>{data.money}</label>
                <svg
                  key={index}
                  onClick={() => Detail(index, "detail", data)}
                  width='24'
                  height='25'
                  viewBox='0 0 24 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.0001 21.2785C7.0501 21.2785 3.0376 17.266 3.0376 12.316C3.0376 7.36601 7.0501 3.35352 12.0001 3.35352C16.9501 3.35352 20.9626 7.36601 20.9626 12.316C20.9626 17.266 16.9501 21.2785 12.0001 21.2785ZM12.0001 4.32852C7.6126 4.32852 4.0126 7.92851 4.0126 12.316C4.0126 16.7035 7.6126 20.3035 12.0001 20.3035C16.3876 20.3035 19.9876 16.7035 19.9876 12.316C19.9876 7.92851 16.3876 4.32852 12.0001 4.32852Z'
                    fill='#1D2E2E'
                  />
                  <path
                    d='M11.8127 17.4527L11.1377 16.7402L15.5252 12.3152L11.1377 7.89024L11.8127 7.17773L16.9502 12.3152L11.8127 17.4527Z'
                    fill='#1D2E2E'
                  />
                  <path
                    d='M16.2378 12.841H7.23779V11.791H16.2378V12.841Z'
                    fill='#1D2E2E'
                  />
                </svg>
                {isDetail === index && data && (
                  <DetailPopup isDetail={true} Close={Close} data={data} />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
