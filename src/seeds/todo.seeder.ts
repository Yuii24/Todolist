import { DataSource, Repository } from "typeorm";
import { Seeder, DataFactory } from "nestjs-seeder";
import { Todo } from "../todo/entities/todo.entity";
import { Status } from "src/todo/dto/create-todo.dto";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class TodoSeeder implements Seeder {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>,
  ) { }

  async seed(): Promise<any> {
    const todos = DataFactory.createForClass(Todo).generate(10);

    return this.todoRepository.save(todos);
  }

  async drop(): Promise<any> {
    return this.todoRepository.delete({});
  }
}