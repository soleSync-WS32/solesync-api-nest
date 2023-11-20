import { Module } from '@nestjs/common';
import { ShoesDesignsService } from './shoes-designs.service';
import { ShoesDesignsController } from './shoes-designs.controller';

@Module({
  controllers: [ShoesDesignsController],
  providers: [ShoesDesignsService],
})
export class ShoesDesignsModule {}
