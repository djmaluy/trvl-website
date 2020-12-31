import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import ocean from "../../images/img-3.jpg";
import Sahara from "../../images/img-8.jpg";
import football from "../../images/img-4.jpg";
import ilands from "../../images/img-2.jpg";
import waterfall from "../../images/img-9.jpg";

function Cards() {
  return (
    <div className="cards">
      <h1>Checkout the destination</h1>
      <div className="card__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={waterfall}
              text="Explore the hidden waterfall"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src={ilands}
              text="Travel through the Ilands of Bali"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={football}
              text="Experience of football on top of the mountains"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src={ocean}
              text="Set Sail at the Athlantic Ocean"
              label="Advanture"
              path="/services"
            />
            <CardItem
              src={Sahara}
              text="Ride through the Sahara Desert"
              label="Luxury"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
