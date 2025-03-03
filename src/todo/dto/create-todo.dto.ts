import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export enum Status {
  PENDING = "pending",
  COMPLETED = "completed",
  DELETE = "delete",
}

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: "Todo",
    required: true,
    type: String,
    example: "Learning Nest.js"
  })
  event: string;

  // status: Status = Status.PENDING;
}
