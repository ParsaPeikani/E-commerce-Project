import React from "react";

import CartLogo from "../shopping-logo/shopping-logo"; 

import './cart-icon.styles.scss';

const CartIcon = () => (
    <div className="cart-icon" >
        <CartLogo className="shopping-icon" />
        <span className="item-count"> 0 </span>
    </div>
)

export default CartIcon;

