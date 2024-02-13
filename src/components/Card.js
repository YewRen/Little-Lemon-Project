import React from "react";

const Card = ({ title, price, content, imageUrl }) => {
    return (
        <div className="card">
            <img src={imageUrl} className="card-image" />
            <div className="card-body">
                <div className="card-row">
                    <p>{title}</p>
                    <p>{price}</p>
                </div>
                <div className="card-row">
                    <p>{content}</p>
                </div>
                <div className="card-row">
                    <button className="card-button">Order a delivery</button>
                </div>
            </div>
        </div>
    )
}

export default Card;