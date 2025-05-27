import { Test } from '@nestjs/testing';
import { PmoListOrderHistoryService } from './pmo-list-order-history.service';

describe('PmoListOrderHistoryService', () => {
  let service: PmoListOrderHistoryService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PmoListOrderHistoryService],
    }).compile();

    service = module.get(PmoListOrderHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
