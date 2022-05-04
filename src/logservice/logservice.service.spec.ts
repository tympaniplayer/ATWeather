import { Test, TestingModule } from '@nestjs/testing';
import { LogserviceService } from './logservice.service';

describe('LogserviceService', () => {
  let service: LogserviceService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LogserviceService],
    }).compile();

    service = module.get<LogserviceService>(LogserviceService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
