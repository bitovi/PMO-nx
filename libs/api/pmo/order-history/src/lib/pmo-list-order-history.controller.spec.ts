import { Test } from '@nestjs/testing';
import { PmoListOrderHistoryController } from './pmo-list-order-history.controller';
import { PmoListOrderHistoryService } from './pmo-list-order-history.service';
import { CommonApiDbModule } from '@common/api/db';

describe('PmoListOrderHistoryController', () => {
  let controller: PmoListOrderHistoryController;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      imports: [CommonApiDbModule],
      providers: [PmoListOrderHistoryService],
      controllers: [PmoListOrderHistoryController],
    }).compile();

    controller = module.get(PmoListOrderHistoryController);
  });

  it('should be defined', () => {
    expect(controller).toBeTruthy();
  });
});
