/** @format */

import React from "react";

export default function DetailPopup({ Close, data }) {
  return (
    <>
      {/* <div className='popupcancel popupwithdrawpin'> */}
      {/* <div className='overlay' onClick={Close}></div> */}
      <div>
        <label htmlFor=''>{data.money}</label>
        <p>Hello</p>
      </div>
      {/* </div> */}
    </>
  );
}
