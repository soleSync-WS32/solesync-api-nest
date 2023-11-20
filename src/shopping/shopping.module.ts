import { Module } from '@nestjs/common';
import { ShoppingService } from './domain/services/shopping.service';
import { ShoppingController } from './interface/shopping.controller';

@Module({
  controllers: [ShoppingController],
  providers: [ShoppingService],
})
export class ShoppingModule {}
