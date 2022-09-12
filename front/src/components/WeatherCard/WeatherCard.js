import React from 'react';

export const WeatherCard = ({data}) => {
    const fullSrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    const date = data.dt_txt.slice(0, 10);
    const currDate = new Date(date).toLocaleString().slice(0, 10)
    const time = data.dt_txt.slice(10)
    return (
        <div className={"card__wrapper"}>
            <p>{Math.floor(data.main.temp)}°C</p>
            <p>Feels like: {Math.floor(data.main.feels_like)}°C</p>
            <p>{data.weather[0].main}</p>
            <img src={fullSrc} alt={data.weather[0].description}/>
            <p>Date: {currDate}</p>
            <time>Actual at:{time}</time>
        </div>
    );
};

