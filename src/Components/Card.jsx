import React from "react";
import "./Card.module.css";
const Card = ({ name, price, image }) => {
  return (
    <div class="card">
      <div class="align">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>

      <h1 className="">{name}</h1>
      <p className="">{price}</p>
      <img
        src={image}
        alt="image"
        className="object-cover w-96 h-18"
        loading="lazy"
      />
    </div>
  );
};

export default Card;
