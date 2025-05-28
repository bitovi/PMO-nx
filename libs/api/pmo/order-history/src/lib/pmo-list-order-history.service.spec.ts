import { Test } from '@nestjs/testing';
import { PmoListOrderHistoryService } from './pmo-list-order-history.service';
import { CommonApiDbModule } from '@common/api/db';

describe('PmoListOrderHistoryService', () => {
  let service: PmoListOrderHistoryService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PmoListOrderHistoryService],
      imports: [CommonApiDbModule],
    }).compile();

    service = module.get(PmoListOrderHistoryService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
