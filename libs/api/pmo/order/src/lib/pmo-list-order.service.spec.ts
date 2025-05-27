import { Test } from '@nestjs/testing';
import { PmoListOrderService } from './pmo-list-order.service';

describe('PmoListOrderService', () => {
  let service: PmoListOrderService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PmoListOrderService],
    }).compile();

    service = module.get(PmoListOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
