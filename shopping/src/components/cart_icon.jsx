import React from "react";

const CartIcon = () => {
    return (
        <svg
            className="cart-icon"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <path
                d="M3 5H5L7.4 15.2C7.56 15.87 8.16 16.34 8.85 16.34H17.8C18.46 16.34 19.04 15.92 19.24 15.29L21 9H7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <circle cx="9.5" cy="19.5" r="1.5" fill="currentColor" />
            <circle cx="17.5" cy="19.5" r="1.5" fill="currentColor" />
        </svg>
    );
};

export default CartIcon;