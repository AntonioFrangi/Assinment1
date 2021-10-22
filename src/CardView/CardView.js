import React from "react";
import './CardView.css';

const card = ({ car, showCarRentalNumbers }) => {
    return (
        <div className="CardView">
            <img alt="car" src={car.Image} />
            <p>Title: {car.Title} </p>
            <p>Description: {car.Description} </p>
            {showCarRentalNumbers ? <p>Rented Cars: {car.NumOfCarRentalsUntilToday} </p> : null}
        </div>
    )
};

export default card