import React from "react";
import './Forecast.css';
const Forecast = ({location, currentHour}) => {
    return <div className="day-temparture" tabIndex="17" aria-label="Forecast for the day">    
        <div className="time">
            <label tabIndex="18">{location.forecast.forecastday[0].hour[currentHour].time.split(" ")[1]}</label>
            <label tabIndex="20">{location.forecast.forecastday[0].hour[currentHour + 1].time.split(" ")[1]}</label>
            <label tabIndex="22">{location.forecast.forecastday[0].hour[currentHour + 2].time.split(" ")[1]}</label>
            <label tabIndex="24">{location.forecast.forecastday[0].hour[currentHour + 3].time.split(" ")[1]}</label>
            <label tabIndex="26">{location.forecast.forecastday[0].hour[currentHour + 4].time.split(" ")[1]}</label>
        </div>
        <div className="temp">
            <div>
                <div className="little-ellips">
                    <label tabIndex="19">{location.forecast.forecastday[0].hour[currentHour].temp_c}</label>
                </div>
            </div>
            <div>
                <div className="little-ellips">
                    <label tabIndex="21">{location.forecast.forecastday[0].hour[currentHour + 1].temp_c}</label>
                </div>
            </div>
            <div>
                <div className="little-ellips">
                    <label tabIndex="23">{location.forecast.forecastday[0].hour[currentHour + 2].temp_c}</label>
                </div>
            </div>
            <div>
                <div className="little-ellips">
                    <label tabIndex="25">{location.forecast.forecastday[0].hour[currentHour + 3].temp_c}</label>
                </div>
            </div>
            <div>
                <div className="little-ellips">
                    <label tabIndex="27">{location.forecast.forecastday[0].hour[currentHour + 4].temp_c}</label>
                </div>
            </div>
        </div>
    </div>
};

export default Forecast;