import { Controller, Get } from '@nestjs/common';
import { EmployeeInfosService } from './employee-infos.service';

@Controller('employee-infos')
export class EmployeeInfosController {
  constructor(private readonly employeeInfosService: EmployeeInfosService) {}
  @Get()
  findAll() {
    return this.employeeInfosService.findAll();
  }
}
