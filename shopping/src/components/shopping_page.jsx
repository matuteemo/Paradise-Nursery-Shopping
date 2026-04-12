import React from "react";
import "./shopping_page.css";
import CartButton from "./cart_button";

const ShoppingPage = () => {
    return (
        <>
            <div className="shopping-container">
                <nav className="shopping-nav">
                    <h1>Shopping Page</h1>
                    <CartButton />
                </nav>
            </div>
        </>
    );
};

export default ShoppingPage;