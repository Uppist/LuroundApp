/** @format */

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Retainer from "../../../../components/AccountOwner/Services/Retainer/Retainer";
import DayTime from "../../../../components/AccountOwner/Services/OneOff/TimeBased/DayTime";
import PricingTime from "../../../../components/AccountOwner/Services/OneOff/TimeBased/Pricing";
import CreateService from "../../../../components/AccountOwner/Services/Retainer/CreateRetainerService/StepOne/CreateService";
import RetainerService from "../../../../components/AccountOwner/Services/Retainer/CreateRetainerService/RetainerService";
import Pricing from "../../../../components/AccountOwner/Services/Retainer/CreateRetainerService/StepTwo/Pricing";

export default function RetainerRouting() {
  const [retainerService, setRetainerService] = useState([]);
  return (
    <Routes>
      <Route path='/retainer' element={<Retainer />} />
      <Route path='createretainer' element={<RetainerService />}>
        <Route
          index
          element={
            <CreateService
              serviceType='retainer'
              retainerService={retainerService}
              setRetainerService={setRetainerService}
            />
          }
        />
        <Route path='pricing' element={<Pricing />} />
        <Route path='daytime' element={<DayTime />} />
      </Route>
    </Routes>
  );
}
