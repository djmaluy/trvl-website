import React from "react";
import { Link } from "react-router-dom";

function FooterLinks() {
  return (
    <div className="footer-links">
      <div className="footer-link-wrapper">
        <div className="footer-link-items">
          <h2>About us</h2>
          <Link to="/sign-up"> How it works</Link>
          <Link to="/"> Test</Link>
          <Link to="/"> Test</Link>
          <Link to="/"> Test</Link>
        </div>
        <div className="footer-link-items">
          <h2>About us</h2>
          <Link to="/sign-up"> How it works</Link>
          <Link to="/"> Test</Link>
          <Link to="/"> Test</Link>
          <Link to="/"> Test</Link>
        </div>
        <div className="footer-link-items">
          <h2>About us</h2>
          <Link to="/sign-up"> How it works</Link>
          <Link to="/"> Test</Link>
          <Link to="/"> Test</Link>
          <Link to="/"> Test</Link>
        </div>
      </div>
    </div>
  );
}

export default FooterLinks;
