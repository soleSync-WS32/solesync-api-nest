import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhysicalActivitiesService } from '../domain/services/physical-activities.service';
import { CreatePhysicalActivityDto } from '../aplicaction/dtos/create-physical-activity.dto';
import { UpdatePhysicalActivityDto } from '../aplicaction/dtos/update-physical-activity.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('physical-activities')
@ApiTags('physical activities')
export class PhysicalActivitiesController {
  constructor(private readonly physicalActivitiesService: PhysicalActivitiesService) {}

  @Post()
  create(@Body() createPhysicalActivityDto: CreatePhysicalActivityDto) {
    return this.physicalActivitiesService.create(createPhysicalActivityDto);
  }

  @Get()
  findAll() {
    return this.physicalActivitiesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.physicalActivitiesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhysicalActivityDto: UpdatePhysicalActivityDto) {
    return this.physicalActivitiesService.update(+id, updatePhysicalActivityDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.physicalActivitiesService.remove(+id);
  }
}
