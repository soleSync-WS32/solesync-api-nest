import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ShoesModule } from './shoes/shoes.module';
import { PhysicalActivitiesModule } from './physical-activities/physical-activities.module';
import { StatisticsModule } from './statistics/statistics.module';
import { ShoppingModule } from './shopping/shopping.module';
import { ShoesDesignsModule } from './shoes-designs/shoes-designs.module';

@Module({
  imports: [UsersModule, ShoesModule, PhysicalActivitiesModule, StatisticsModule, ShoppingModule, ShoesDesignsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
