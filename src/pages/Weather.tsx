import React, {Component} from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "./Weather.css";

function Weather() {
    const API_KEY = "31fd77decaf2f9adebaf0f1b02fbbf35";
    const queryUrlGenerator = (cityName:string) => {
        return `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
    };
    let activeWeatherBlock: null = null;

    function onWeatherBlockClicked(event: { currentTarget: any; }) {
        const weatherBlock = event.currentTarget;
        if (weatherBlock === activeWeatherBlock) {
            removePrevious(weatherBlock);
            activeWeatherBlock = null;
        } else {
            removePrevious(weatherBlock);
            activeWeatherBlock = weatherBlock;

            weatherBlock.classList.add("active");
            const cityName = weatherBlock.getElementsByClassName("city_name")[0].innerText;

            const weather = document.createElement("div");
            weather.classList.add("weather");
            weather.innerHTML = `...`;

            weatherBlock.appendChild(weather);

            getWeatherData(cityName).then((weatherData: { main: { temp: any; feels_like: any; pressure: any; humidity: any; }; }) => {
                weather.innerHTML = `
            <div class="row">
                <div class="temperature"> Temperature: ${weatherData.main.temp} &#176C</div>
                <div class="feels_like_temperature">Feels like: ${weatherData.main.feels_like} &#176C</div>
            </div>
    
            <div class="row">
                <div class="pressure">Pressure: ${weatherData.main.pressure} mmH</div>
                <div class="humidity">Humidity: ${weatherData.main.humidity}%</div>
            </div>
    
            `;
            });
        }
    };

    function removePrevious(weatherBlock: { classList: { remove: (arg0: string) => void; }; getElementsByClassName: (arg0: string) => any; }) {
        weatherBlock.classList.remove("active");

        const weatherBlocks = weatherBlock.getElementsByClassName("weather");
        for (const weatherBlock of weatherBlocks as any) {
            weatherBlock.remove();
        }
    };

    const getWeatherData = async (cityName:string) => {
        return (await fetch(queryUrlGenerator(cityName))).json();
    };



    let obj = window.localStorage.getItem("hackademy");
    if (obj !== null) {
        return (
            <div id="weather_background">
                <h1>Choose city to see current weather:</h1>
                <div className="content">
                    <div className="weather_block" onClick={() => onWeatherBlockClicked}>
                        <span className="city_name">Zhytomyr</span>
                    </div>
                    <div className="weather_block" onClick={() => onWeatherBlockClicked}>
                        <span className="city_name">Berlin</span>
                    </div>
                    <div className="weather_block" onClick={() => onWeatherBlockClicked}>
                        <span className="city_name">Amsterdam</span>
                    </div>
                    <div className="weather_block" onClick={() => onWeatherBlockClicked}>
                        <span className="city_name">Lisbon</span>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <h1 id="noDisplay">You have not been logged in yet</h1>
        );
    }
}

export default Weather;