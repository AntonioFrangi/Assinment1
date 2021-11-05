import React, { useState } from "react";
import './Navigations.css'
import Navigation from './Navigation/Navigation'

const Navigations = () => {

    const [token, setToken] = useState(localStorage.getItem('app_token'));
    const logout = () => {
        localStorage.removeItem('app_token');
        setToken(null);
    }

    return (
        <ul className="navigation">
            {
                !token ?
                    <>
                        <Navigation link="/Login">Sign In</Navigation>
                        <Navigation link="/SignUp">Sign Up</Navigation>
                    </>
                    :
                    <>
                        <span>username</span>
                        <button onClick={logout}>Logout</button>
                    </>
            }
        </ul>
    )
}

export default Navigations;