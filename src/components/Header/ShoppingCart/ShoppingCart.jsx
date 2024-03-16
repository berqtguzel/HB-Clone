import React from 'react';
import { LuShoppingCart } from 'react-icons/lu';
import '../ShoppingCart/ShoppingCart.css';
const ShoppingCart = () => {
  return (
    <div className="shopping-cart">
      <LuShoppingCart className="shopping-cart-icon" />
      Sepetim
    </div>
  );
};

export default ShoppingCart;
