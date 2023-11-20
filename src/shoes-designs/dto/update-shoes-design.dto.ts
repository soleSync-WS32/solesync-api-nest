import { PartialType } from '@nestjs/swagger';
import { CreateShoesDesignDto } from './create-shoes-design.dto';

export class UpdateShoesDesignDto extends PartialType(CreateShoesDesignDto) {}
