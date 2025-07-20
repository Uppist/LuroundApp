/** @format */

import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import One from "../../../../components/AccountOwner/Services/OneOff/OneoffService/OneOff";
import Timebased from "../../../../components/AccountOwner/Services/OneOff/TimeBased/TimeBased";
import PricingTime from "../../../../components/AccountOwner/Services/OneOff/TimeBased/Pricing";
import DayTime from "../../../../components/AccountOwner/Services/OneOff/TimeBased/DayTime";
import ServiceCreate from "../../../../components/AccountOwner/Services/OneOff/TimeBased/Create/SeviceCreate";
import axios from "axios";
import DetailOne from "../../../../components/AccountOwner/Services/OneOff/OneoffService/DetailService";

export default function OneOffRouting() {
  const [timeBased, setTimeBased] = useState({});

  return (
    <Routes>
      <Route path='/oneoff' element={<One />} />
      <Route
        path='/time-based'
        element={
          <Timebased setTimeBased={setTimeBased} timebased={timeBased} />
        }
      >
        <Route
          index
          element={
            <ServiceCreate
              serviceType='one-off'
              setTimeBased={setTimeBased}
              timeBased={timeBased}
              Type='time-based'
            />
          }
        />
        <Route
          path='pricing'
          element={
            <PricingTime setTimeBased={setTimeBased} timeBased={timeBased} />
          }
        />
        <Route
          path='daytime'
          element={
            <DayTime setTimeBased={setTimeBased} timeBased={timeBased} />
          }
        />
      </Route>
      <Route path='/one-off-details' element={<DetailOne />} />
    </Routes>
  );
}
