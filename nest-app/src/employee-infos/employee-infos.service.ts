import { Injectable } from '@nestjs/common';
import { Employee, mockEmployees } from 'src/share/data';
import { calculateAge } from 'src/share/utils';

@Injectable()
export class EmployeeInfosService {
  findAll() {
    const res = mockEmployees.map((employee) => {
      const age = calculateAge(new Date(employee.birthDate));
      const employeeWithAge: Employee & { age: number } = {
        ...employee,
        age,
      };
      return employeeWithAge;
    });
    return res;
  }
}
