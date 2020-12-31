import React from "react";
import { Button } from "../navbar/Button";

function FooterSubscribeSection() {
  return (
    <section className="footer-subscription">
      <p className="footer-subscription-heading"> Подпишитесь на рассылку </p>
      <p className="footer-subscription-text">
        Можете отписаться в любое время
      </p>
      <div className="input-areas">
        <form>
          <input
            className="footer-input"
            name="email"
            type="email"
            placeholder="Enter your email"
          />
          <Button buttonStyle="" btn--outline>
            Subscribe{" "}
          </Button>
        </form>
      </div>
    </section>
  );
}

export default FooterSubscribeSection;
