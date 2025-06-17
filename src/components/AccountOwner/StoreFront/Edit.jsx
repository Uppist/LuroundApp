/** @format */

import React from "react";
import QuickAction from "../../Services/OneOff/OneoffService/QuickAction";

export default function Edit({ Close, data }) {
  return (
    <>
      <div className='popupcancel popupwithdrawpin' onClick={Close}>
        {/* <div className='overlay' onClick={Close}></div> */}
        <div>
          <QuickAction />
        </div>
      </div>
    </>
  );
}
