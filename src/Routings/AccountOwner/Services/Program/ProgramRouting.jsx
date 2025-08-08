/** @format */

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Program from "../../../../components/AccountOwner/Services/Program/Program";
import ProgramService from "../../../../components/AccountOwner/Services/Program/ProgramService";
import CreateService from "../../../../components/AccountOwner/Services/Program/CreateProgram/StepOne/CreateService";
import StepTwo from "../../../../components/AccountOwner/Services/Program/CreateProgram/StepTwo/StepTwo";

export default function ProgramRouting() {
  const [programService, setProgramService] = useState({});
  return (
    <Routes>
      <Route path='/program' element={<Program />} />
      <Route
        path='/createprogram'
        element={
          <ProgramService
            programService={programService}
            setProgramService={setProgramService}
          />
        }
      >
        <Route
          index
          element={
            <CreateService
              serviceType='program'
              programService={programService}
              setProgramService={setProgramService}
            />
          }
        />
        <Route
          path='choosedate'
          element={
            <StepTwo
              programService={programService}
              setProgramService={setProgramService}
            />
          }
        />
      </Route>
    </Routes>
  );
}
