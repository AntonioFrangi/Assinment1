import React from "react";
import './CardView.css';



const Card = ({ car, showCarRentalNumbers }) => {
    return (
        <div className="CardView">
            <button link="/CarDetails">
                
                    <img alt="car" src={car.Image} />
                
            </button>
            <p>Title: {car.Title} </p>
            <p>Description: {car.Description} </p>
            {showCarRentalNumbers ? <p>Rented Cars: {car.NumOfCarRentalsUntilToday} </p> : null}
        </div>
    )
};

export default Card