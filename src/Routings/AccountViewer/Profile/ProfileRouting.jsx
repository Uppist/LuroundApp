/** @format */

import React from "react";
import { Route, Routes } from "react-router-dom";
import Viewer from "../../../components/AccountViewer/Viewer";
import WriteReview from "../../../components/AccountViewer/Profile/Reviews/WriteReview";

export default function ViewerProfileRouting() {
  return (
    <Routes>
      <Route path='/profile/:username' element={<Viewer />} />
      <Route path='/writeareview' element={<WriteReview />} />
    </Routes>
  );
}
