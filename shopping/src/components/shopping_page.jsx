import React from "react";
import "./shopping_page.css";
import CartButton from "./cart_button";
import { addToCart } from "./plantSlice";
import { useSelector, useDispatch } from "react-redux";
import "./plantstyles.css";
const ShoppingPage = () => {
    const inventory = useSelector((state) => state.plants.inventory);
    const dispatch = useDispatch();

    return (
        <>
            <div className="shopping-container">
                <nav className="shopping-nav">
                    <h1>Shopping Page</h1>
                    <CartButton />
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
            </div>
        </>
    );
};

export default ShoppingPage;