import React from "react";
import { useNavigate } from "react-router-dom";
import "./home_page.css";
function HomePage() {
    const navigate = useNavigate(); // Get the navigate function from the hook

    // This function will be called when the get started button is clicked, so it will navigate to the shopping page
    const handleGetStarted = () => {
        navigate('/shopping'); // Navigate to the shopping page
    };
    return (
        <>
            <div className="home-page-container">
                <div className="content-box">
                    <div className="main-content">
                        <h1>Welcome To My Nursery Shopping App!</h1>
                        <p>Bring nature home.</p>
                        <button className='get-started-button' onClick={handleGetStarted}>
                            Get Started!
                        </button>
                    </div>
                    <div className="info-content">
                        <p>
                            We believe plants are more than just decoration they are a way to transform spaces and elevate everyday living.
                            Our mission is to bring nature closer to your home, creating environments that feel fresh, vibrant, and full of life. In a fast-paced world, plants offer a moment of calm, a sense of balance, and a deeper connection to what truly matters.
                            Every plant we offer is carefully selected for its quality, beauty, and ease of care, so anyone whether experienced or just starting out can enjoy the benefits of having greenery at home.
                            We're not just here to sell plants. We're here to inspire a more mindful lifestyle, where nature becomes part of your daily experience. From choosing the right plant to learning how to care for it, we're with you every step of the way.
                            <br/>

                            Because when your space grows, you grow too.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;