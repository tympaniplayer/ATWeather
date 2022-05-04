import { Shelter } from 'src/shelter/entities/shelter.entity';
import { ShelterResponse } from './dto/weather-response.dto';
export declare class WeatherService {
    getWeatherForShelter(shelter: Shelter): Promise<ShelterResponse>;
}
