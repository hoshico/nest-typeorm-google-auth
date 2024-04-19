import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmployeeInfosModule } from './employee-infos/employee-infos.module';
import { GoogleModule } from './google/google.module';

@Module({
  imports: [EmployeeInfosModule, GoogleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
