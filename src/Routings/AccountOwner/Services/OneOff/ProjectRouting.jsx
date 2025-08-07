/** @format */

import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Projectbased from "../../../../components/AccountOwner/Services/OneOff/ProjectBased/ProjectBased";

export default function ProjectRouting() {
  const [projectBased, setProjectBased] = useState({});

  return (
    <Routes>
      <Route
        path='/project-based'
        element={
          <Projectbased
            Type='project-based'
            projectBased={projectBased}
            setProjectBased={setProjectBased}
            serviceType='one-off'
          />
        }
      />
    </Routes>
  );
}
