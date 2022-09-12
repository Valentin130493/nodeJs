const cityWeather = require("../utils/api");
const axios = require("axios");

const getWeather = async (req, res) => {
    try {
        const url = cityWeather()
        const data = await axios.get(url)
        const time = new Date().toLocaleString()
        res.status(200).json({...data.data, time})
    } catch (err) {
        console.log(err)
        res.json({
            message: err
        })
    }
}

const changeCity = async (req, res) => {
    try {
        const url = cityWeather(req.body.city)
        console.log(url)
        const data = await axios.get(url)
        const time = new Date().toLocaleString()
        console.log(data)
        res.status(200).json({...data.data, time})
    } catch (err) {
        console.log(err)
        res.json({
            message: err
        })
    }
}


module.exports = {
    getWeather,
    changeCity
}