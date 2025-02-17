import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext"; // importa CartContext

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext); // Accede a addToCart desde el contexto

  const handleAddToCart = () => {
    addToCart(product); // Llama a addToCart con el producto
    alert(`${product.title} agregado al carrito`); //Muestra un mensaje
  };

  return (
    
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>Ver detalle</Link>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ProductCard;