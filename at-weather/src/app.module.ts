import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WeatherController } from './weather/weather.controller';
import { WeatherModule } from './weather/weather.module';
import { ShelterModule } from './shelter/shelter.module';
import { LogserviceService } from './logservice/logservice.service';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    WeatherModule,
    ShelterModule,
    WinstonModule.forRoot({
      level: 'info',
      format: winston.format.json(),
      defaultMeta: { service: 'at-weather-service'},
      transports: [
        new winston.transports.Console()
      ]
    })],
  controllers: [AppController, WeatherController],
  providers: [AppService, LogserviceService],
})
export class AppModule {}
