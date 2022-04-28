import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherController } from './weather/weather.controller';
import { WeatherModule } from './weather/weather.module';
import { ShelterModule } from './shelter/shelter.module';
import { ShelterModule } from './shelter/shelter.module';

@Module({
  imports: [WeatherModule, ShelterModule],
  controllers: [AppController, WeatherController],
  providers: [AppService],
})
export class AppModule {}
