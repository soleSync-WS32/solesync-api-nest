import { Test, TestingModule } from '@nestjs/testing';
import { PhysicalActivitiesService } from './physical-activities.service';

describe('PhysicalActivitiesService', () => {
  let service: PhysicalActivitiesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhysicalActivitiesService],
    }).compile();

    service = module.get<PhysicalActivitiesService>(PhysicalActivitiesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
