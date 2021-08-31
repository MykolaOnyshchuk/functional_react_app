import React, {Component} from "react";
import "./header.css"

function Header() {
    return (
        <div className="App">
            <div id="header">
                <p id="logo">/ / / / / / / / / / / / C A R E N T A L / / / / / / / / / / /</p>
                <div id="header-line"></div>
                <div id="menu-container">
                    <a className="menu-elem" href="#about_us">About Us</a>
                    <a className="menu-elem" href="#how_background">How To</a>
                    <a className="menu-elem" href="#car_background">Our Cars</a>
                    <a className="menu-elem" href="#survey-form">Rent</a>
                    <a className="menu-elem" href="#contacts-background">Contacts</a>
                </div>
            </div>
        </div>
    );
}

export default Header;
