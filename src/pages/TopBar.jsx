import React from "react";
import Logo from "./Logo";
import './TopBar.css';
import Navigations from '../Navigations/Navigations'

const topBar = () => (
    <header className="TopBar">
        <div>Cars</div>
        <Logo/>
        <nav>
            <Navigations/>
        </nav>
    </header>
);

export default topBar;