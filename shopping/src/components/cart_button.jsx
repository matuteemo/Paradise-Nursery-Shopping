import React from "react";
import CartIcon from "./cart_icon";
import "./cart_button.css";

const CartButton = ({ onClick }) => {
    return (
        <button className="cart-button" type="button" aria-label="Open cart" onClick={onClick}>
            <CartIcon />
        </button>
    );
};

export default CartButton;