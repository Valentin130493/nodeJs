const API_KEY = process.env.API_KEY

const defaultCity = "London"


function cityWeather(city = defaultCity) {
    return `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=3&appid=${API_KEY}`
}

module.exports = cityWeather