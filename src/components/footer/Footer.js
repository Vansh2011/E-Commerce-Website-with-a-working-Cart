import React from "react";
import Footerbanner from "./Footerbanner";
import Footerlinks from "./Footerlinks";

function Footer() {
  return (
    <footer className="-md:hidden -sm:hidden">
      <Footerbanner />
      <Footerlinks />
    </footer>
  );
}

export default Footer;
