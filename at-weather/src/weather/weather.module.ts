import { Module } from '@nestjs/common';
import { WeatherService } from './weather.service';
import { WeatherController } from './weather.controller';
import { ShelterModule } from 'src/shelter/shelter.module';

@Module({
  providers: [ShelterModule, WeatherService],
  controllers: [WeatherController]
})
export class WeatherModule {}
