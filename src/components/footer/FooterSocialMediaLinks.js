import React from "react";
import { Link } from "react-router-dom";

function FooterSocialMediaLinks() {
  return (
    <div className="social-media">
      <div className="social-media-wrap">
        <div className="footer-logo">
          <Link to="/" className="social-logo">
            TRVL <i className="fas fa-globe-europe"></i>
          </Link>
        </div>
        <small className="website-rights"> TRVL 2020</small>
        <div className="social-icons">
          <Link
            className="social-icon-link facebook"
            target="_blank"
            to="/"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook " />
          </Link>
          <Link
            className="social-icon-link instagram"
            target="_blank"
            to="/"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram " />
          </Link>
          <Link
            className="social-icon-link twitter"
            target="_blank"
            to="/"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter " />
          </Link>
          <Link
            className="social-icon-link youtube"
            target="_blank"
            to="/"
            aria-label="Youtube"
          >
            <i className="fab fa-youtube " />
          </Link>
          <Link
            className="social-icon-link linkedin"
            target="_blank"
            to="/"
            aria-label="Linkedin"
          >
            <i className="fab fa-linkedin " />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FooterSocialMediaLinks;
