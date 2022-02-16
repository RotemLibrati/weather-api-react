import React from "react";
import './Details.css';
const Details = ({location}) => {
    return <div className="another-details" aria-label="details about precipitation, humidity and wind " tabIndex="10">
    <div className="another-det-title">
        <label tabIndex="11" >precipitation</label>
        <label tabIndex="13" >humidity</label>
        <label tabIndex="15" >wind</label>
    </div>
    <div className="another-det-subtitle">
        <label tabIndex="12" >{location.current.precip_mm + " mm"}</label>
        <label tabIndex="14">{location.current.humidity + "%"}</label>
        <label tabIndex="16">{location.current.wind_kph + " km/h"}</label>
    </div>
</div>
};

export default Details;