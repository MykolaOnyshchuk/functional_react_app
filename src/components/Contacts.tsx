import React, {Component} from "react";
import "./Contacts.css";

function Contacts() {
    return (
        <div id="contacts-background">
            <p className="module_header">Contacts</p>
            <div id="contacts-wrap">
                <div id="map_wrap">
                    <p id="main_office">Our main office:</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1704.9876651351892!2d30.542863379532054!3d50.4420000726135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cfaec36a1fa5%3A0xefe10c11e33ca43e!2z0LLRg9C70LjRhtGPINCc0LjRhdCw0LnQu9CwINCT0YDRg9GI0LXQstGB0YzQutC-0LPQviwgNjIsINCa0LjRl9CyLCAwMjAwMA!5e0!3m2!1suk!2sua!4v1629712173190!5m2!1suk!2sua"
                        width="400" height="300" loading="lazy"></iframe>
                </div>
            </div>
            <div id="address-wrapper">
                <p id="service_address">Our service centers address:</p>
                <ul id="service-address-ul">
                    <li className="address">37 Peremohy prospect</li>
                    <li className="address">1 Hlushkov prospect</li>
                    <li className="address">3 Orlyk street</li>
                    <li className="address">36 Zodchi street</li>
                    <li className="address">43 Pravdy prospect</li>
                    <li className="address">69 Maiakovskyi prospect</li>
                </ul>
            </div>

        </div>
    );
}

export default Contacts;