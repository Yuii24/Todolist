import { PartialType } from '@nestjs/mapped-types';
import { CreateTodoDto } from './create-todo.dto';
import { Status } from './create-todo.dto';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class UpdateTodoDto extends PartialType(CreateTodoDto) {
  @IsString()
  @IsNotEmpty()
  event: string;

  @IsOptional()
  status?: Status;
}
