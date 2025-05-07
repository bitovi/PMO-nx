import { Test } from '@nestjs/testing';
import { CommonApiDbService } from './common-api-db.service';

describe('CommonApiDbService', () => {
  let service: CommonApiDbService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CommonApiDbService],
    }).compile();

    service = module.get(CommonApiDbService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
