import { Injectable } from '@nestjs/common';
import { ListShelterDto } from './dto/list-shelter.dto';
import { ShelterLocations, Shelter } from './entities/shelter.entity';
import { GetShelterDto } from './dto/get-shelter.dto';

@Injectable()
export class ShelterService {
  findOne(id: any): GetShelterDto {
    const shelter = ShelterLocations[id + 1];
    const location: GetShelterDto = {
      Id: id,
      Longitude: shelter.Latitude,
      Latitude: shelter.Latitude,
      Description: shelter.Description
    };

    return location;
  }
  findAll(): ListShelterDto[] {
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
