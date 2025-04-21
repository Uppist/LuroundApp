/** @format */

import React from "react";
import NavBar from "./NavBar/NavBar";

export default function Layout({ children, logo, company }) {
  console.log("data", logo, company);
  return (
    <>
      <NavBar logo={logo} company={company} />
      <main>{children}</main>
    </>
  );
}
