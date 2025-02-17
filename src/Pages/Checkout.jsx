import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import Cart from "../Components/Card";

const Checkout = () => {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <Cart cart={cart} removeFromCart={removeFromCart} />
    </div>
  );
};

export default Checkout;