import React from "react";
import Card from "./Card";
import "../App.css";
import bike1 from "../assets/bike1.avif";
import bike2 from "../assets/bike2.jpg";
import bike3 from "../assets/bike3.jpg";
import bike4 from "../assets/bike4.jpg";
import bike5 from "../assets/bike5.jpg";
import bike6 from "../assets/bike6.jpg";

const MainPage = () => {
  return (
    <>
      <h1 className="heading">Bike Gallery</h1>
      <div className="cardImages">
        <Card title="1" img={bike1} />
        <Card title="2" img={bike2} />
        <Card title="3" img={bike3} />
        <Card title="4" img={bike4} />
        <Card title="5" img={bike5} />
        <Card title="6" img={bike6} />
      </div>
    </>
  );
};

export default MainPage;
