import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { Shelter } from 'src/shelter/entities/shelter.entity';
import { ShelterResponse } from './dto/weather-response.dto';

@Injectable()
export class WeatherService {
    async getWeatherForShelter(shelter: Shelter) {
        const apiKey = process.env.APIKEY;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${shelter.Latitude}&lon=${shelter.Longitude}&appid=${apiKey}`);

        const shelterResponse: ShelterResponse = {
            Description: shelter.Description,
            Weather: response.data
        };

        return shelterResponse;
    }
}
