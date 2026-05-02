import React from "react";
import { useState } from "react";
import "./shopping_page.css";
import CartButton from "./cart_button";
import { addToCart, increaseQuantity, decreaseQuantity, removeFromCart } from "./plantSlice";
import { useSelector, useDispatch } from "react-redux";
import "./plantstyles.css";
import "./cart.css"

const ShoppingPage = () => {
    const inventory = useSelector((state) => state.plants.inventory);
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.plants.cart);
    const [showCart, setShowCart] = useState(false);
    const cartTotal = cart.reduce((total, item) => total + item.cost * item.quantity, 0);
    const toggleCart = () => {setShowCart(!showCart);};
    const closeCart = () => {setShowCart(false);};
    const handleContinueShopping = () => {setShowCart(false);};

    return (
        <>
            <div className="shopping-container">
                <nav className="shopping-nav">
                    <h1>Shopping Page</h1>
                    <CartButton onClick={toggleCart} />
                </nav>
                <div className="shopping-content">
                    {inventory && inventory.length > 0 ? (
                        inventory.map((group) => (
                            <section key={group.category}>
                                <h2>{group.category}</h2>
                                {group.plants.map((plant) => (
                                    <div key={plant.id} className="plant-item">
                                        {plant.image ? (
                                            <img
                                                className="plant-image"
                                                src={plant.image}
                                                alt={`Image of ${plant.name || "plant"}`}
                                                loading="lazy"
                                            />
                                        ) : (
                                            <div className="plant-image plant-image--placeholder" aria-hidden="true" />
                                        )}
                                        
                                        <h3>{plant.name || "Unnamed Plant"}</h3>
                                        <p>{plant.description || "No description available."}</p>
                                        <p>${Number(plant.cost).toFixed(2)}</p>
                                        <button onClick={() => dispatch(addToCart(plant))}>
                                            Add to Cart
                                        </button>
                                    </div>
                                ))}
                            </section>
                        ))
                    ) : (
                        <p>No plants available.</p>
                    )}
                </div>

                {showCart && (
                    <div className="modal-overlay" onClick={closeCart}>
                        <div
                            className="modal-content"
                            role="dialog"
                            aria-modal="true"
                            aria-label="Shopping cart"
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="cart-modal-header">
                                <h2>Your Cart</h2>
                                <button className="cart-close-btn" type="button" onClick={closeCart}>
                                    X
                                </button>
                            </div>

                            {cart.length === 0 ? (
                                <p>Your cart is empty.</p>
                            ) : (
                                <>
                                    {cart.map((item) => (
                                        <div key={item.id} className="cart-item">
                                            <h3>{item.name}</h3>
                                            <p>Quantity: {item.quantity}</p>
                                            <button onClick={() => dispatch(decreaseQuantity(item))}>-</button>
                                            <button onClick={() => dispatch(increaseQuantity(item))}>+</button>
                                            <p>Total: ${(item.cost * item.quantity).toFixed(2)}</p>
                                            <button onClick={() => dispatch(removeFromCart(item))}>
                                                Remove
                                            </button>
                                        </div>
                                    ))}

                                    <div className="cart-summary">
                                        <div className="total-row">
                                            <span>Total</span>
                                            <strong>${cartTotal.toFixed(2)}</strong>
                                        </div>
                                        <button type="button" className="continue-btn" onClick={handleContinueShopping}>
                                            Continue shopping
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default ShoppingPage;