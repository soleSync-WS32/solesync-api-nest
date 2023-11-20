import { Injectable } from '@nestjs/common';
import { CreatePhysicalActivityDto } from './dto/create-physical-activity.dto';
import { UpdatePhysicalActivityDto } from './dto/update-physical-activity.dto';

@Injectable()
export class PhysicalActivitiesService {
  create(createPhysicalActivityDto: CreatePhysicalActivityDto) {
    return 'This action adds a new physicalActivity';
  }

  findAll() {
    return `This action returns all physicalActivities`;
  }

  findOne(id: number) {
    return `This action returns a #${id} physicalActivity`;
  }

  update(id: number, updatePhysicalActivityDto: UpdatePhysicalActivityDto) {
    return `This action updates a #${id} physicalActivity`;
  }

  remove(id: number) {
    return `This action removes a #${id} physicalActivity`;
  }
}
