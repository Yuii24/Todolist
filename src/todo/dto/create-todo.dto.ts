import { IsNotEmpty, IsString } from "class-validator";

export enum Status {
  PENDING = "pending",
  COMPLETED = "completed",
  DELETE = "delete",
}

export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  event: string;

  // status: Status = Status.PENDING;
}
