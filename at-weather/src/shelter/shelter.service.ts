import { Injectable } from '@nestjs/common';
import { ListShelterDto } from './dto/list-shelter.dto';
import { ShelterLocations, Shelter } from './entities/shelter.entity';

@Injectable()
export class ShelterService {
  findAll() {
      return ShelterLocations.map((shelter: Shelter, index) => {
          const location: ListShelterDto = {
            LocationId: index + 1,
            Latitude: shelter.Latitude,
            Longitude: shelter.Longitude,
            Description: shelter.Description
          }
          return location;
      });
  }
}
