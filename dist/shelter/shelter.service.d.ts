import { ListShelterDto } from './dto/list-shelter.dto';
import { GetShelterDto } from './dto/get-shelter.dto';
export declare class ShelterService {
    findOne(id: any): GetShelterDto;
    findAll(): ListShelterDto[];
}
