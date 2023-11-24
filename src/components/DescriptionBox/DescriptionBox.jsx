import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Commentaires (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Un site Web de commerce électronique est une plateforme en ligne qui
          facilite la achat et vente de produits ou de services sur Internet. Il
          sert de marché virtuel où les entreprises et les particuliers peuvent
          présenter leurs produits, interagir avec les clients et mener
          transactions sans avoir besoin d’une présence physique. Commerce
          électronique les sites Web ont acquis une immense popularité en raison
          de leur commodité, l’accessibilité et la portée mondiale qu’ils
          offrent.
        </p>
        <p>
          Les sites Web de commerce électronique affichent généralement des
          produits ou des services ainsi que descriptions détaillées, images,
          prix et toutes variantes disponibles (par exemple, tailles, couleurs).
          Chaque produit a généralement sa propre page dédiée avec des
          informations pertinentes.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
