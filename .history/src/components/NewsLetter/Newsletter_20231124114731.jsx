import React from "react";
import "./NewLettter.css";

const Newsletter = () => {
  return <div className="newsletter">
    <h1>Recevez Des Offres Exclusives Sur Votre e-mail</h1>
    <p>Abonnez-vous à notre newsletter et restez informé</p>
    <div>
      <input type="email" placeholder="" />
    </div>
  </div>;
};

export default Newsletter;
