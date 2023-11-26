import React, { useContext } from "react";
import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../../assets/icons/cart_cross_icon.png";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);
  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Produits</p>
        <p>Titre</p>
        <p>Prix</p>
        <p>Quantité(s)</p>
        <p>Total</p>
        <p>Retirer</p>
      </div>
      <hr />
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div>
              <div className="cartitems-format cartitems-format-main">
                <img className="carticon-product-icon" src={e.image} alt="" />
                <p>{e.name}</p>
                <p>{e.new_price} €</p>
                <button className="cartitems-quantity">
                  {cartItems[e.id]}
                </button>
                <p>{e.new_price * cartItems[e.id]} €</p>
                <img
                  className="cartitems-remove-icon"
                  src={remove_icon}
                  onClick={() => {
                    removeFromCart(e.id);
                  }}
                  alt=""
                />
              </div>
              <hr />
            </div>
          );
        }
        return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Panier Totals</h1>
          <div>
            <div className="cartitems-total-item">
              <p>Sous-totals</p>
              <p>{getTotalCartAmount()}€</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <p>Frais d'expédition</p>
              <p>Gratuit</p>
            </div>
            <hr />
            <div className="cartitems-total-item">
              <h3>Total</h3>
              <h3>{getTotalCartAmount()}€</h3>
            </div>
          </div>
          <button>PASSER AU PAIEMENENT</button>
        </div>
        <div className="cartitems-promocode">
          <p>Si vous avez un code-promo, tapez-ici</p>
          <div className="cartitems-promobox">
            <input type="text" placeholder="code promo" />
            <button>Soumettre</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
