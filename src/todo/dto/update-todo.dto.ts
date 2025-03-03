import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { Status } from './create-todo.dto';
import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: "Todo",
    required: false,
    type: String,
    example: "Learning OpenAPi"
  })
  event: string;

  @IsOptional()
  @ApiProperty({
    description: "Status of Todo",
    required: false,
    enum: Status,
    example: "completed"
  })
  status?: Status;
}
