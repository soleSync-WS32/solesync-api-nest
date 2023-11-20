import { Test, TestingModule } from '@nestjs/testing';
import { ShoesDesignsService } from './shoes-designs.service';

describe('ShoesDesignsService', () => {
  let service: ShoesDesignsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoesDesignsService],
    }).compile();

    service = module.get<ShoesDesignsService>(ShoesDesignsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
