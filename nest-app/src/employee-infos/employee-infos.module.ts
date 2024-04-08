import { Module } from '@nestjs/common';
import { EmployeeInfosController } from './employee-infos.controller';
import { EmployeeInfosService } from './employee-infos.service';

@Module({
  controllers: [EmployeeInfosController],
  providers: [EmployeeInfosService],
})
export class EmployeeInfosModule {}
