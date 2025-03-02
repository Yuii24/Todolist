import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from "typeorm";

enum Status {
  PENDING = "pending",
  COMPLETED = "completed",
  DELETE = "delete",
}

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  event: string;

  @Column({ type: "enum", enum: Status, default: Status.PENDING })
  status: Status;

  @CreateDateColumn()
  createdAt: Date; // 自動記錄創建時間

  @UpdateDateColumn()
  updatedAt: Date; // 自動記錄更新時間

  constructor(todo: any) {
    Object.assign(this, todo);
  }
}
