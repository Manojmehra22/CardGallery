import React from "react";
import "../App.css";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt="Bike pic" />
      <h3>SuperBike{props.title}</h3>
    </div>
  );
};

export default Card;
