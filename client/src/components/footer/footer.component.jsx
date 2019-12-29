import React from "react";
import Nav from "../nav/nav.component";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer className="full-footer">
      <div className="footer-container">
        <Nav className="footer-nav" />
        <span className="copyright-text">
          Copyright © 2020 Inmate Skills. All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
