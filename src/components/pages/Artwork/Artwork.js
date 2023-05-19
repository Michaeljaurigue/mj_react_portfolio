import React from "react";
import CardItem from "../../CardItem/CardItem";
import "./Artwork.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Michael Jaurigue's Artwork</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/mj-artwork-1.jpg"
              text="Universal powers"
              label="MJ"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/mj-artwork-2.jpg"
              text="Fight the illusion"
              label="MJ"
              path="/"
            />
            <CardItem
              src="images/mj-artwork-3.jpg"
              text="The wilderness within and without"
              label="MJ"
              path="/"
            />
            <CardItem
              src="images/mj-artwork-4.jpg"
              text="Dancing in the forest"
              label="MJ"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/mj-artwork-5.jpg"
              text="Guy with a heart"
              label="MJ"
              path="/"
            />
            <CardItem
              src="images/mj-artwork-6.jpg"
              text="Lost, found, and drowned"
              label="MJ"
              path="/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/mj-artwork-7.jpg"
              text="Power puff and cough"
              label="MJ"
              path="/"
            />
            <CardItem
              src="images/mj-artwork-8.jpg"
              text="Boom boom pow"
              label="MJ"
              path="/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
