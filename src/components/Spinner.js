import React from "react";
import "react-loader-spinner";

import { Oval } from 'react-loader-spinner'

const Spinner = () => {
    return (
        <div className="side-bg">
            <div className="weather-box">
                <div className="header">
                    <div className="details">
                        <Oval
                            heigth="100"
                            width="100"
                            color='white'
                            ariaLabel='loading'
                        />
                    </div>
                </div>
            </div>
        </div>

    )
};


export default Spinner;