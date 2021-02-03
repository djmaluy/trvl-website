import React from "react";
import { Button } from "../navbar/Button";
import "./HeroSection.css";
import "../../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <h1>ADWANTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="hero-btns">
        <Button
          className="btn"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btn"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch trailer <i className="far fa-play-circle" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
