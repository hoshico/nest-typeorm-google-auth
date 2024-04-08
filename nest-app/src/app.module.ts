import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeInfosModule } from './employee-infos/employee-infos.module';

@Module({
  imports: [EmployeeInfosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
