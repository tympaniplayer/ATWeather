import { ShelterService } from './shelter.service';
import { ListShelterDto } from './dto/list-shelter.dto';
import { GetShelterDto } from './dto/get-shelter.dto';
export declare class ShelterController {
    private readonly shelterService;
    constructor(shelterService: ShelterService);
    findAll(): ListShelterDto[];
    getSingleShelter(params: any): GetShelterDto;
}
