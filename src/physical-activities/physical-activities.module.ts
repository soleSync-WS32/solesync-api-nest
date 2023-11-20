import { Module } from '@nestjs/common';
import { PhysicalActivitiesService } from './domain/services/physical-activities.service';
import { PhysicalActivitiesController } from './interface/physical-activities.controller';

@Module({
  controllers: [PhysicalActivitiesController],
  providers: [PhysicalActivitiesService],
})
export class PhysicalActivitiesModule {}
