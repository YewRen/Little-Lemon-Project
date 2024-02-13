import React from "react";
import Card from "./Card";
import salad from "../icons_assets/greek salad.jpg"
import bruchetta from "../icons_assets/bruchetta.jpg"
import lemondessert from "../icons_assets/lemon dessert.jpg"

const Specials = () => {
    return (
        <>
            <div className="specials">
                <div className="specials-header">
                    <h3>This weeks specials!</h3>
                    <button id="button">Online Menu</button>
                </div>
            <div className="cards-section">
            <Card
                title="Greek salad"
                price="$12.99"
                content="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. "
                imageUrl={salad}
            />
            <Card
                title="Bruchetta"
                price="$5.99"
                content="Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil."
                imageUrl={bruchetta}
            />
            <Card
                title="Lemon Dessert"
                price="$5.00"
                content="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
                imageUrl={lemondessert}
            />
            </div>
            </div>
        </>
    )
}

export default Specials;