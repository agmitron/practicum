import { IsString, IsDate } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger'

export class BlogModel {
  readonly id: number;

  slug: string;

  @ApiProperty() 
  @IsString()
  title: string;

  @ApiProperty() 
  @IsString()
  content: string;

  @ApiProperty() 
  @IsDate()
  publish_at?: Date;
}
