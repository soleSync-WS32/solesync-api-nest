import { Test, TestingModule } from '@nestjs/testing';
import { PhysicalActivitiesController } from './physical-activities.controller';
import { PhysicalActivitiesService } from './physical-activities.service';

describe('PhysicalActivitiesController', () => {
  let controller: PhysicalActivitiesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhysicalActivitiesController],
      providers: [PhysicalActivitiesService],
    }).compile();

    controller = module.get<PhysicalActivitiesController>(PhysicalActivitiesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
