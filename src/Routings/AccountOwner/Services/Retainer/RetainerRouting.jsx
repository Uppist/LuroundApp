/** @format */

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Retainer from "../../../../components/AccountOwner/Services/Retainer/Retainer";
import CreateService from "../../../../components/AccountOwner/Services/Retainer/CreateRetainerService/StepOne/CreateService";
import RetainerService from "../../../../components/AccountOwner/Services/Retainer/CreateRetainerService/RetainerService";
import Pricing from "../../../../components/AccountOwner/Services/Retainer/CreateRetainerService/StepTwo/Pricing";
import DateTime from "../../../../components/AccountOwner/Services/Retainer/CreateRetainerService/StepThree/Date";
import RetainerDetail from "../../../../components/AccountOwner/Services/Retainer/RetainerValue/Detail";

export default function RetainerRouting() {
  const [retainerService, setRetainerService] = useState({});
  return (
    <Routes>
      <Route path='/retainer' element={<Retainer />} />
      <Route
        path='/createretainer'
        element={
          <RetainerService
            retainerService={retainerService}
            setRetainerService={setRetainerService}
          />
        }
      >
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
        <Route
          path='pricing'
          element={
            <Pricing
              retainerService={retainerService}
              setRetainerService={setRetainerService}
            />
          }
        />
        <Route
          path='date'
          element={
            <DateTime
              retainerService={retainerService}
              setRetainerService={setRetainerService}
            />
          }
        />
      </Route>
      <Route path='retainer-details' element={<RetainerDetail />} />
    </Routes>
  );
}
