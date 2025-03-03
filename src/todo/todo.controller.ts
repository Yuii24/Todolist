import { Controller, Get, Post, Body, Patch, Param, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('todo')
export class TodoController {
  constructor(private readonly todoService: TodoService) { }

  @Post()
  @ApiOperation({ summary: "Add new Todo" })
  @ApiCreatedResponse({
    description: "New Schedule was added to your list",
    schema: {
      example: "New Schedule was added to your list"
    }
  })
  @ApiBadRequestResponse({
    description: "New Schedule was added error",
    schema: {
      example: "New Schedule was added error"
    }
  })
  @UsePipes(new ValidationPipe())
  async create(@Body() createTodoDto: CreateTodoDto) {
    return this.todoService.create(createTodoDto);
  }

  @Get()
  @ApiOperation({ summary: "Get All Todo" })
  @ApiCreatedResponse({
    schema: {
      example: [
        {
          "id": 1,
          "event": "First Item",
          "status": "pending",
          "createdAt": "2025-02-28T02:21:42.958Z",
          "updatedAt": "2025-02-28T02:21:42.958Z"
        },
        {
          "id": 3,
          "event": "learning Nest.js",
          "status": "pending",
          "createdAt": "2025-03-03T06:48:14.940Z",
          "updatedAt": "2025-03-03T06:48:14.940Z"
        }
      ]
    }
  })
  async findAll() {
    return this.todoService.findAll();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the Todo item',
    example: 1
  })
  @ApiOperation({ summary: "Get One Todo" })
  @ApiCreatedResponse({
    schema: {
      example:
      {
        "id": 1,
        "event": "First Item",
        "status": "pending",
        "createdAt": "2025-02-28T02:21:42.958Z",
        "updatedAt": "2025-02-28T02:21:42.958Z"
      }
    }
  })
  @ApiBadRequestResponse({
    schema: {
      example: {}
    }
  })
  async findOne(@Param('id') id: string) {
    return this.todoService.findOne(+id);
  }

  @Patch(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the Todo item',
    example: 1
  })
  @ApiOperation({ summary: "Edit Todo" })
  @ApiCreatedResponse({
    schema: {
      example:
      {
        "id": 1,
        "event": "First Item",
        "status": "completed",
        "createdAt": "2025-02-28T02:21:42.958Z",
        "updatedAt": "2025-03-03T08:10:09.000Z"
      }
    }
  })
  @ApiBadRequestResponse({
    schema: {
      example: {}
    }
  })
  update(@Param('id') id: string, @Body() updateTodoDto: UpdateTodoDto) {
    return this.todoService.update(+id, updateTodoDto);
  }

  @Delete(':id')
  @ApiParam({
    name: 'id',
    type: Number,
    description: 'The ID of the Todo item',
    example: 3
  })
  @ApiOperation({ summary: "Delete Todo" })
  @ApiCreatedResponse({
    schema: {
      example: "Delete Success"
    }
  })
  @ApiBadRequestResponse({
    schema: {
      example: "Delete Fail"
    }
  })
  async remove(@Param('id') id: string) {
    return this.todoService.remove(+id);
  }
}
