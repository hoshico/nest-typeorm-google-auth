import { Module } from '@nestjs/common';
import { EmployeeInfosController } from './employee-infos.controller';

@Module({
  controllers: [EmployeeInfosController],
})
export class EmployeeInfosModule {}
