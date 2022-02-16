import React, { useState } from "react";
import './Weather.css';
import Spinner from "./Spinner";
import Forecast from "./Forecast";
import Details from "./Details";
import Header from "./Header";
import Temparture from "./Tempature";
import Content from "./Content";
const Weather = () => {
    // window.onload = function() {
    //     document.getElementById("start").focus();
    // }
    const [location, setLocation] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentHour, setCurrentHour] = useState();
    return <div id="start" className="Artboard" aria-label="Application to see the weather around the world" tabIndex="0">
        <Content
            isLoading={isLoading}
            location={location}
            setLocation={setLocation}
            setIsLoading={setIsLoading}
            setCurrentHour={setCurrentHour} />
        {isLoading ? <Spinner /> :
            <div className="side-bg">
                <div className="weather-box" aria-label="Details about the weather in your chosen city" tabIndex="2">
                    <Header location={location} />
                    <Temparture location={location} />
                    <Details location={location} />
                    {currentHour < 20 ? (<Forecast location={location} currentHour={currentHour} />
                    ) : <Forecast location={location} currentHour={19} />}
                </div>
            </div>}
    </div>
};

export default Weather; 