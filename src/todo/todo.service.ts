import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { EntityManager, Repository } from 'typeorm';
import { Todo } from './entities/todo.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private todoRepository: Repository<Todo>,
    private readonly entityManager: EntityManager
  ) { };

  async create(createTodoDto: CreateTodoDto) {
    const request = new Todo(createTodoDto);
    try {
      await this.entityManager.save(request);
      return 'New Schedule was added to your list';
    } catch (error) {
      return 'New Schedule was added error';
    }
  }

  async findAll() {
    const response = await this.todoRepository.find();
    return response;
  }

  async findOne(id: number) {
    const response = await this.todoRepository.findOneBy({ id });
    return response;
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.preload({
      id,
      ...updateTodoDto,
    });

    if (!todo) {
      throw new Error(`Todo with id ${id} not found`);
    }

    return await this.todoRepository.save(todo);
  }

  async remove(id: number) {
    try {
      await this.todoRepository.delete(id);
      return 'Delete Success';
    } catch (error) {
      return 'Delete Fail';
    }
  }
}
