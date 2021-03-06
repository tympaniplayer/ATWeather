import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { ListShelterDto } from './dto/list-shelter.dto';
import { GetShelterDto } from './dto/get-shelter.dto';

@Controller('shelter')
export class ShelterController {
  constructor(private readonly shelterService: ShelterService) {}
  @Get()
  findAll(): ListShelterDto[] {
    return this.shelterService.findAll();
  }
  @Get(':id')
  getSingleShelter(@Param() params): GetShelterDto {
    return this.shelterService.findOne(params.id);
  }
}
