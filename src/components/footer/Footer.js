import React from "react";
import "./Footer.css";
import FooterLinks from "./FooterLinks";
import FooterSubscribeSection from "./FooterSocialMediaLinks";
import SubscribeSection from "./FooterSubscribeSection";

function Footer() {
  return (
    <div className="footer-container">
      <SubscribeSection />
      <FooterLinks />
      <FooterSubscribeSection />
    </div>
  );
}

export default Footer;
