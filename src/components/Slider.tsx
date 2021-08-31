import React, {Component} from "react";
import "./Slider.css";
//import "./Slider_add.ts"
import "../img/arrow.svg";
import "../img/renault_logan.jpg";
import "../img/skoda_octavia_combi.jpg";
import "../img/smart_fortwo.jpg";
function Slider() {

    let slideIndex = 1;
    show(slideIndex);

    function plus(n:number) {
        show(slideIndex += n);
    }

    function show(n:number) {
        let i;
        let x = document.getElementsByClassName("slide");
        if (n > x.length) {slideIndex = 1}
        if (n < 1) {slideIndex = x.length}
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        x[slideIndex-1].style.display = "block";
    }

    return (
        <div id="car_background">
            <p className="module_header" id="our_cars">Our Cars</p>
            <div id="slider_wrap">
                <div className="arrow_wrap">
                    <img alt="left arrow" src="./img/arrow.svg" id="arrow_left" onClick={() => plus(-1)}></img>
                </div>
                <div className="slide" id="slide1">
                    <div className="car_img_wrap">
                        <img alt="smart fortwo" src="./img/smart_fortwo.jpg" className="car_img"></img>
                    </div>
                    <p className="car_header">Smart Fortwo</p>
                    <div className="car_text_wrap">
                        <p className="car_text">Need just a brisk car to travel through a metropolis? Smart Fortwo
                            is right for you! This car suites you only in case you are planning to drive alone or
                            with another one person. The trunk is also small so do not expect to take a lot of
                            luggage with you. Smart suits you the most if you are a person or couple who just need a
                            pleasing nice looking car to move around the city.</p>
                    </div>
                </div>

                <div className="slide" id="slide2">
                    <div className="car_img_wrap">
                        <img alt="renault logan" src="./img/renault_logan.jpg" className="car_img"></img>
                    </div>
                    <p className="car_header">Renault Logan</p>
                    <div className="car_text_wrap">
                        <p className="car_text">Think that Smart is too tight or just need a bigger car to travel
                            with a company or carry cargo? Take this one! This French sedan is the cheapest car we
                            can offer you. But it doesn’t make it worse. We bet you will like Renault Logan’s very
                            nice suspension which wil make your trip comfortable. The engine capacity is not really
                            big but it has enough power to give you confidence in the hustle and bustle of the big
                            city.</p>
                    </div>
                </div>

                <div className="slide" id="slide3">
                    <div className="car_img_wrap">
                        <img alt="skoda octavia combi" src="./img/skoda_octavia_combi.jpg" className="car_img"></img>
                    </div>
                    <p className="car_header">Skoda Octavia Combi</p>
                    <div className="car_text_wrap">
                        <p className="car_text">Is Logan not enough for you? Need a car for a big family? Not a
                            problem! Skoda Octavia Combi is right for you. A huge trunk, spacious interior, economic
                            engine and sharp design makes this car a really nice choice. Moreover Octavia Combi has
                            really nice interior and multimedia.</p>
                    </div>
                </div>

                <div className="arrow_wrap">
                    <img alt="right arrow" src="./img/arrow.svg" id="arrow_right" onClick={() => plus(+1)}></img>
                </div>
            </div>
        </div>
    );
}

export default Slider;