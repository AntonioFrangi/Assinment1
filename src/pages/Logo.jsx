import React from "react";
import carLogo from '../components/logo/th8.jpg';
import './Logo.css'

const Logo = (props) => (
    <div className="Logo">
        <img src={carLogo} alt="MyCars"/>
    </div>
);

export default Logo;