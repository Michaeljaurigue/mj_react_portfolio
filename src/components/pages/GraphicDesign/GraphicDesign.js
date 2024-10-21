import React from "react";
import CardItem from "../../CardItem/CardItem";
import "./GraphicDesign.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Graphic Designs</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/instaSample2.gif"
              text="YouTube Thumbnail Design"
              label="MJ"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/instaSample.gif"
              text="Instagram Post Sample"
              label="MJ"
              path=""
            />
            <CardItem
              src="images/dinoMan.gif"
              text="Dino Man made with AI and editing on Photoshop"
              label="MJ"
              path=""
            />
            <CardItem
              src="images/bookMockUp.gif"
              text="Book Mock Up Designed and Ready for Print"
              label="MJ"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/seltzer.gif"
              text="YouTube Sample for a Selzter Taste Test Video"
              label="MJ"
              path=""
            />
            <CardItem
              src="images/sparkyStepsLogo.gif"
              text="The OG Sparky Steps Logo"
              label="MJ"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Travel-Hacks-1.gif"
              text="YouTube Sample Thumbnail for Travel Hacks Video"
              label="MJ"
              path=""
            />
            <CardItem
              src="images/Travel-Hacks-2.gif"
              text="YouTube Sample Thumbnail for Travel Hacks Video"
              label="MJ"
              path=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/goldenGirl.gif"
              text="Golden winged girl with crown made with AI and editing on Photoshop"
              label="MJ"
              path=""
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
