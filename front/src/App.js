import './App.css';
import axios from "axios";
import {baseUrl} from "./constants/api";
import React, {useEffect, useState} from "react";
import {WeatherCard} from "./components/WeatherCard/WeatherCard";

function App() {
    const [weather, setWeather] = useState([])
    const [city, setCity] = useState("")
    console.log(city)


    useEffect(() => {
        axios.get(baseUrl).then((res) => setWeather(res.data))
    }, [])

    const handleChange = (event) => {
        setCity(event.target.value)
    }
    const handleSubmit = async (event) => {
        event.preventDefault()
        const newCityData = await axios.post(baseUrl, {city})
        await setWeather(newCityData.data)
        setCity('')
    }


    return (
        <div className="wrapper">

            {weather.length === 0 ? `data is loading` :
                <>
                    <h1>{weather.city.name}</h1>
                    <p>Choose another city:</p>
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <input name={"city"} value={city} onChange={(event) => handleChange(event)}
                               placeholder={"Write the city name"}/>
                        <button type={"submit"}>Submit</button>
                    </form>
                    <div className={"card__box"}>

                        {weather.list.map((item, index) => <WeatherCard key={`${index}`} data={item}/>)}
                    </div>
                    <p>actual on {weather.time}</p>
                </>
            }
        </div>
    );
}

export default App;
