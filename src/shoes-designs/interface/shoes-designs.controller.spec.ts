import { Test, TestingModule } from '@nestjs/testing';
import { ShoesDesignsController } from './shoes-designs.controller';
import { ShoesDesignsService } from '../domain/services/shoes-designs.service';

describe('ShoesDesignsController', () => {
  let controller: ShoesDesignsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoesDesignsController],
      providers: [ShoesDesignsService],
    }).compile();

    controller = module.get<ShoesDesignsController>(ShoesDesignsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
