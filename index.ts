import express from 'express'
import axios from 'axios'
import {locations} from './shelters'
import winston from 'winston';

const PORT = process.env.PORT || 8080
const APIKEY = process.env.APIKEY;

const app = express()

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: {service: 'at-weather-service'},
    transports: [
        new winston.transports.Console()
    ]
})

interface ShelterResponse {
    description: string;
    weather: any;
}

app.get('/api', (req, res) => {
    res.json('')
})


app.get('/api/weather/:shelterId', async (req, res) => {

    let shelterId = -1;
    if(req.params && req.params.shelterId && typeof req.params.shelterId === "string") {
       shelterId = Number(req.params.shelterId);
    }
    else {
        res.status(500).send("shelterId must be a number")
        return
    }

    const shelter = locations[shelterId - 1]

    const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${shelter.latitude}&lon=${shelter.longitude}&appid=${APIKEY}`);
    const shelterResponse : ShelterResponse = {
        description: shelter.description,
        weather: response.data
    }
    res.send(shelterResponse);
})

app.get('/api/shelters', (req, res) => {
   const response =  locations.map((shelter, index) => {
       return {
           locationId: index + 1,
           latitude: shelter.latitude,
           longitude: shelter.longitude,
           description: shelter.description,
       }
   })
    res.json(response);
})

app.listen(PORT, () => logger.info(`Server is running on PORT ${PORT}`))