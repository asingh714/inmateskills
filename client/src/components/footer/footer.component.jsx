import React from "react";
import Nav from "../nav/nav.component";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="footer-container">
      <Nav className="footer-nav"/>
      <span className="copyright-text">Copyright © 2020 Inmate Skills. All Rights Reserved.</span>
    </footer>
  );
};

export default Footer;
