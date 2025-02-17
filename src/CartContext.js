import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]); // Agrega el producto al carrito
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId)); // Elimina el producto del carrito
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};