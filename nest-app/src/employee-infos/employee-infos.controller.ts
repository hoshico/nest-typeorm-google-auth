import { Controller, Get } from '@nestjs/common';

@Controller('employee-infos')
export class EmployeeInfosController {
  @Get()
  findAll() {
    return 'this is controller';
  }
}
