import { Injectable } from '@nestjs/common';
import { CreateShoesDesignDto } from '../../aplication/dtos/create-shoes-design.dto';
import { UpdateShoesDesignDto } from '../../aplication/dtos/update-shoes-design.dto';

@Injectable()
export class ShoesDesignsService {
  create(createShoesDesignDto: CreateShoesDesignDto) {
    return 'This action adds a new shoesDesign';
  }

  findAll() {
    return `This action returns all shoesDesigns`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoesDesign`;
  }

  update(id: number, updateShoesDesignDto: UpdateShoesDesignDto) {
    return `This action updates a #${id} shoesDesign`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoesDesign`;
  }
}
