import { Test } from '@nestjs/testing';
import { PmoListOrderService } from './pmo-list-order.service';
import { CommonApiDbModule } from '@common/api/db';

describe('PmoListOrderService', () => {
  let service: PmoListOrderService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [PmoListOrderService],
      imports: [CommonApiDbModule],
    }).compile();

    service = module.get(PmoListOrderService);
  });

  it('should be defined', () => {
    expect(service).toBeTruthy();
  });
});
