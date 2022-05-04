import { Module } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { ShelterController } from './shelter.controller';

@Module({
  controllers: [ShelterController],
  providers: [ShelterService],
  exports: [ShelterService]
})
export class ShelterModule {}
