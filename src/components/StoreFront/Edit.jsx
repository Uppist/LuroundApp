/** @format */

import React from "react";

export default function Edit({ Close, data }) {
  return (
    <>
      <div className='popupcancel popupwithdrawpin'>
        <div className='overlay' onClick={Close}></div>
        <div>
          <label htmlFor=''>{data.Name}</label>
        </div>
      </div>
    </>
  );
}
