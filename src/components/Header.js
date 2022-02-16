import React from "react";
import './Header.css';
const Header = ({ location }) => {
    return <div className="header" aria-label="Details about city" tabIndex="3">
        <div className="details">
            <label tabIndex="4" className="city">{location.location.name}</label>
            <label tabIndex="5" className="country" >{location.location.country}</label>
            <label tabIndex="6" className="datetime" >{location.location.localtime.split(' ')[0] + " at " +
                location.location.localtime.split(' ')[1]}</label>
        </div>
    </div>
};

export default Header;