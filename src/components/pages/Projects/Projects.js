import React from "react";
import CardItem from "../../CardItem/CardItem";
import "./Projects.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Projects</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/se_project_aroundtheus.jpg"
              text="This project was built with React. It is a front end application that allows users to add and delete cards, customize profile picture, and change the name of the user. Click the image to see the live site!"
              label="Details"
              path="https://github.com/Michaeljaurigue/se_project_aroundtheus"
            />
            <CardItem
              src="images/se_project_coffeeshop.jpg"
              text="This project was built with HTML, CSS, and JavaScript. We utlized CSS Flexbox to create the layout of the website. Click the image to see the live site!"
              label="Details"
              path="https://michaeljaurigue.github.io/se_project_coffeeshop/"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/se_project_wtwr_react.jpg"
              text="This project was built with the react. Allows users to create, read, update, and delete clothing itmes. Works with weather API and automatically recommeneds clothing items depending on the weather! Click the image to see the live site!"
              label="Details"
              path="https://michaeljaurigue.github.io/se_project_react/"
            />
            <CardItem
              src="images/se_project_library.jpg"
              text="This project was built with HTML and CSS. A simple landng page for a fictional company. Click the image to see the live site!"
              label="Details"
              path="https://michaeljaurigue.github.io/se_project_library/"
            />
            <CardItem
              src="images/mj_nachicago.jpg"
              text="Currently working on redeveloping this website. This project will be built with the MERN stack. Visit the website to see the current version!"
              label="Details"
              path="https://www.nachicago.org/"
            />
            <CardItem
              src="images/mj_globaldotmedia.jpg"
              text="Currently working on redeveloping this website. This project will be built with the MERN stack. Visit the website to see the current version!"
              label="Details"
              path="https://globaldotmedia.com/"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
