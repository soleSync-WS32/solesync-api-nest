import { Module } from '@nestjs/common';
import { StatisticsService } from './domain/services/statistics.service';
import { StatisticsController } from './interface/statistics.controller';

@Module({
  controllers: [StatisticsController],
  providers: [StatisticsService],
})
export class StatisticsModule {}
