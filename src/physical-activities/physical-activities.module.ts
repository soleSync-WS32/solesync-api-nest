import { Module } from '@nestjs/common';
import { PhysicalActivitiesService } from './physical-activities.service';
import { PhysicalActivitiesController } from './physical-activities.controller';

@Module({
  controllers: [PhysicalActivitiesController],
  providers: [PhysicalActivitiesService],
})
export class PhysicalActivitiesModule {}
