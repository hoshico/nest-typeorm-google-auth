import { IsString, IsEmail, IsDateString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsDateString()
  birthDate: string;
}
