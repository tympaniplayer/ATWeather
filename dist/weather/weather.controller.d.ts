import { ShelterService } from 'src/shelter/shelter.service';
import { ShelterResponse } from './dto/weather-response.dto';
import { WeatherService } from './weather.service';
export declare class WeatherController {
    private readonly shelterService;
    private readonly weatherService;
    constructor(shelterService: ShelterService, weatherService: WeatherService);
    getShelterWeather(params: any): Promise<ShelterResponse>;
}
