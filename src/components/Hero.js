import React from "react";
import { Link } from "react-router-dom";
import restaurantFood from "../icons_assets/restauranfood.jpg";

const Hero = () => {
    return (
        <>
            <div className="main">
                <div className="main-content">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on
                    traditional recipes served with a modern twist.
                    </p>

                    <Link to="/">
                        <button id="button" to="/">
                        Reserve a Table
                        </button>
                    </Link>
                </div>
                    <div className="featured">
                        <img src={restaurantFood} alt="restaurantFood" />
                    </div>
            </div>
        </>
    )
}

export default Hero;