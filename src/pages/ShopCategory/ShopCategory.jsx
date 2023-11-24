import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./ShopCategory.css";
import dropdown_icon from "../../assets/icons/dropdown_icon.png";
import Item from "../../components/Item/Item";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Affichage de 1 à 12</span> sur 36 produits
        </p>
        <div className="shopcategory-sort">
          Trier par <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((item, i) => {
          if (props.category === item.category) {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>
      <div className="shopcategory-loadmore">Explore plus</div>
    </div>
  );
};

export default ShopCategory;
