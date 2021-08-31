import React, {Component} from "react";
import "./Layout.css";
import AboutImage1 from "../img/aboutus_image1.jpg";
import AboutImage2 from "../img/aboutus_image2.jpg";
import AboutImage3 from "../img/aboutus_image3.jpg";
function Layout() {
    return (
        <div id="aboutus_background">
            <p className="module_header" id="about_us">About Us</p>

            <div className="about_el" id="about_el1">
                <img alt="Carsharing cars standing" src={AboutImage1} className="about_img" id="about_img1"></img>
                <div className="about_text" id="about_text1">We are an ambitious Ukrainian company which provide
                    our service of carsharing. We have different tariff plans for any period of time so you can
                    always choose the one which is proper for you. You can also choose Cargo, Econom, Family,
                    Comfort and Business.
                </div>
            </div>
            <div className="about_el" id="about_el2">
                <img alt="Carsharing cars standing" src={AboutImage2} className="about_img" id="about_img2"></img>
                <div className="about_text" id="about_text2">Our history started in 2018 when we opened our
                    first office in Kyiv. Now we already have 6 offices in different Kyiv districts. Also you
                    can find our cars on parkings. With over 150 cars in Kyiv we hope you will always find the
                    car you need whenever and wherever you are..
                </div>
            </div>
            <div className="about_el" id="about_el3">
                <img alt="Carsharing cars standing" src={AboutImage3} className="about_img" id="about_img3"></img>
                <div className="about_text" id="about_text3">We have a call-center so you can contact us via
                    mobile or messengers any time you need which means we are always ready to help with any
                    situation or problems. Also all our cars are insured so it will help in case of any road
                    accidents.
                </div>
            </div>
        </div>
    );
}

export default Layout;