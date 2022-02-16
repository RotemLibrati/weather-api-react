import React, { useState, useEffect} from "react";
import './Content.css';
import Footer from "./Footer";
import Form from "./Form";
import axios from "axios";
const ip_address = "192.168.1.19";

const Content = ({isLoading, setIsLoading, setCurrentHour, setLocation, location }) => {
    const [value, setValue] = useState('');
    const [wrong, setWrong] = useState(false);
    const [messageWrong, setMessageWrong] = useState('');
    const handleChange = event => {
        setValue(event.target.value);
    };
    const searchBtnHandler = async (event) => {
        await event.preventDefault();
        axios({
            method: 'post',
            url: `http://${ip_address}:3000/weather`, //my IP
            data: { "city": value },
        })
            .then(function (res) {
                setLocation(res.data.message);
                setCurrentHour(parseInt(res.data.message.location.localtime.split(" ")[1].split(":")[0]));
                setWrong(false);
                setIsLoading(false);
            })
            .catch(function (err) {
                setWrong(true);
                setMessageWrong(err.response.data.message);
                console.log(err.response);
            });
    };
    useEffect(() => {
        const cityList = ['Tel Aviv', 'Paris', 'Madrid', 'Rome', 'Moscow', 'Berlin','London' ];
        const city = cityList[Math.floor(Math.random() * cityList.length)];
        const fetchData = () => {
            axios({
                method: 'post',
                url: `http://${ip_address}:3000/weather`, //my IP
                data: { "city": city },
            })
                .then(function (res) {
                    setLocation(res.data.message);
                    setCurrentHour(parseInt(res.data.message.location.localtime.split(" ")[1].split(":")[0]));
                    setWrong(false);
                    setIsLoading(false);
                })
                .catch(function (err) {
                    setWrong(true);
                    console.log(err);
                });
        }
        fetchData();
    },[setIsLoading, setCurrentHour, setLocation]);
    return <div className="content" role="main" >
        <div className="logo"role="banner" />
        <div className="text">
            Use our weather app to see the weather around the world
        </div>
        <label className="label" >City name</label>
        <Form handleChange={handleChange} searchBtnHandler={searchBtnHandler} value={value} />
        {wrong ? <div className="wrong"> {messageWrong} </div> : <div></div>}
        {!isLoading && <Footer location={location} />}
    </div>
};

export default Content;