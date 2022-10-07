import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class UserModel {
  readonly id: number;

  @ApiProperty() 
  @IsEmail()
  email: string;

  @ApiProperty() 
  @IsString()
  password: string;

  @ApiProperty() 
  @IsString()
  firstname: string;

  @ApiProperty() 
  @IsString()
  lastname: string;
}
