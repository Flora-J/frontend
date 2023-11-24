import React from "react";
import "./Offers.css";
import exclusive_image from "../../assets/images/exclusive_image.png";

const Offers = () => {
  return (
    <div className="offers">
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h1>Offres Pour Vous</h1>
        <p>UNIQUEMENT SUR LES PRODUITS BEST-SELLERS</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_image} alt="" />
      </div>
    </div>
  );
};

export default Offers;
