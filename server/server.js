const express = require('express')
const cors = require("cors")
require('dotenv').config()
const WeatherController = require('./controllers/weather')


const PORT = process.env.PORT || 8080
const app = express()
app.use(express.json())
app.use(cors())

app.get('/', WeatherController.getWeather)
app.post('/', WeatherController.changeCity)


app.listen(PORT, () => {
    console.log(`Server started on ${PORT} port`)
})