import { Module } from '@nestjs/common';
import { ShoesDesignsService } from './domain/services/shoes-designs.service';
import { ShoesDesignsController } from './interface/shoes-designs.controller';

@Module({
  controllers: [ShoesDesignsController],
  providers: [ShoesDesignsService],
})
export class ShoesDesignsModule {}
