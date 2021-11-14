import React from "react";
import './CardView.css';
import { useHistory } from 'react-router-dom';

const Card = ({ car, showCarRentalNumbers }) => {

    const history = useHistory();

    const goToDetailsPage = () => {
        history.push('/CarDetails');
    }

    return (
        <div className="CardView">

            <button onClick={goToDetailsPage}>

                <img alt="car" src={car.Image} />

            </button>
            <p>Title: {car.Title} </p>
            <p>Description: {car.Description} </p>
            {showCarRentalNumbers ? <p>Rented Cars: {car.NumOfCarRentalsUntilToday} </p> : null}
        </div>
    )
};

export default Card