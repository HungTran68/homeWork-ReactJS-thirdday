import React from 'react';
import { FaShoppingCart } from "react-icons/fa";


const MenuTop = () => {
  return (
    <div className="wrap-container menu-backgound">
      <div className="container ">
        <div className="left-menu-top">
          <div>Start Bootstrap</div>
          <div>Home</div>
          <div>About</div>
          <div>Shop</div>
        </div>
        <div className="right-menu-top">
          <div className="icon-cart">
            <FaShoppingCart />

          </div>
          <div>Cart</div>
        </div>
      </div>

    </div>
  )
}

export default MenuTop;