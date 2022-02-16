import React from "react";
import './Form.css'
const Form = ({ searchBtnHandler, handleChange, value }) => {
    return (
        <form className="form" onSubmit={searchBtnHandler}>
            <input aria-label="Enter name of city" type="text" className="input" value={value} onChange={handleChange} />
            <button aria-label="Click button for check the weather" type="submit" className="btn">Check</button>
        </form>
    )
};

export default Form;