import { Controller, Get, Param } from '@nestjs/common';
import { ShelterService } from 'src/shelter/shelter.service';
import { ShelterResponse } from './dto/weather-response.dto';
import { WeatherService } from './weather.service';

@Controller('weather')
export class WeatherController {
    constructor(private readonly shelterService: ShelterService, private readonly weatherService: WeatherService) {}

    @Get(':id')
    async getShelterWeather(@Param() params): Promise<ShelterResponse> {
        const shelter = this.shelterService.findOne(params.id);
        return await this.weatherService.getWeatherForShelter(shelter);
    }
}
