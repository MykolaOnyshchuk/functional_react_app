import React, {Component} from "react";
import "./Layout.css";
import "./Steps.css"
function Steps() {
    return (
        <div id="how_background">
            <p className="module_header" id="how_to">How To Rent</p>
            <div className="how_el" id="how_el1">
                <div className="how_el_cont" id="how_el_cont1">
                    <p className="how_number" id="how_number1">1</p>
                    <div className="how_text" id="how_text1">Fill out the form below or call us via mobile</div>
                </div>
                <div className="how_el_cont" id="how_el_cont2">
                    <p className="how_number" id="how_number2">2</p>
                    <div className="how_text" id="how_text2">Visit our service center</div>
                </div>
                <div className="how_el_cont" id="how_el_cont3">
                    <p className="how_number" id="how_number3">3</p>
                    <div className="how_text" id="how_text3">Pay and take your car</div>
                </div>
                <div className="how_el_cont" id="how_el_cont4">
                    <p className="how_number" id="how_number4">4</p>
                    <div className="how_text" id="how_text4">Enjoy the ride</div>
                </div>
            </div>

            <div className="how_el" id="how_el2">
                <div className="how_el_cont" id="how_el_cont21">
                    <p className="how_number" id="how_number21">1</p>
                    <div className="how_text" id="how_text21">Download our app</div>
                </div>
                <div className="how_el_cont" id="how_el_cont22">
                    <p className="how_number" id="how_number22">2</p>
                    <div className="how_text" id="how_text22">Verify your identity with the driving license</div>
                </div>
                <div className="how_el_cont" id="how_el_cont23">
                    <p className="how_number" id="how_number23">3</p>
                    <div className="how_text" id="how_text23">Search a proper car on the map</div>
                </div>
                <div className="how_el_cont" id="how_el_cont24">
                    <p className="how_number" id="how_number24">4</p>
                    <div className="how_text" id="how_text24">Go find the car and unlock it</div>
                </div>
            </div>
        </div>
    );
}

export default Steps;