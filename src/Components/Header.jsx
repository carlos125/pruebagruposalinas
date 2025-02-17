import React from "react";
import { Link } from "react-router-dom";

const Header = ({ cartCount }) => {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/checkout">
          Carrito ({cartCount})
        </Link>
      </nav>
    </header>
  );
};

export default Header;