import { PartialType } from '@nestjs/swagger';
import { CreatePhysicalActivityDto } from './create-physical-activity.dto';

export class UpdatePhysicalActivityDto extends PartialType(CreatePhysicalActivityDto) {}
