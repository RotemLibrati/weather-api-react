import React from "react";
import './Temparture.css';
const Temparture = ({location}) => {
    return <div className="temp-details" aria-label="temparture in celsius" tabIndex="7">
        <div className="ellips-field">
            <label className="ellips"></label>
        </div>
        <div className="temparture-field">
            <div className="temparture">
                <label tabIndex="8">{location.current.temp_c}</label>
            </div>
        </div>
        <div className="status">
            <label tabIndex="9" >{location.current.condition.text}</label>
        </div>
    </div>
};

export default Temparture;