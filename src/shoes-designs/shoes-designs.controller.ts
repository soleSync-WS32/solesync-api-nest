import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoesDesignsService } from './shoes-designs.service';
import { CreateShoesDesignDto } from './dto/create-shoes-design.dto';
import { UpdateShoesDesignDto } from './dto/update-shoes-design.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('shoes-designs')
@ApiTags('shoes designs')
export class ShoesDesignsController {
  constructor(private readonly shoesDesignsService: ShoesDesignsService) {}

  @Post()
  create(@Body() createShoesDesignDto: CreateShoesDesignDto) {
    return this.shoesDesignsService.create(createShoesDesignDto);
  }

  @Get()
  findAll() {
    return this.shoesDesignsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoesDesignsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoesDesignDto: UpdateShoesDesignDto) {
    return this.shoesDesignsService.update(+id, updateShoesDesignDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoesDesignsService.remove(+id);
  }
}
