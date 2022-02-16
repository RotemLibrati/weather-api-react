import React from "react";
import './Footer.css';
const Footer = ({location}) => {
    return <div className="footer" role="tab">
    <div className="text-footer-left">
        <label tabIndex="28" >latitude {location.location.lat}</label>
    </div>
    <div className="text-footer-right">
        <label tabIndex="29">longitude {location.location.lon}</label>
    </div>
    <div className="text-footer-below">
        <label tabIndex="30">accurate to {location.current.last_updated.split(" ")[0]} at {location.current.last_updated.split(" ")[1]}</label>
    </div>
</div>
};

export default Footer;