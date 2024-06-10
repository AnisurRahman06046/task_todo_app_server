import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto, UpdateTodoDto } from './dtos/todo.dto';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}
  @Post('add')
  async addTodo(@Body() payload: CreateTodoDto) {
    const result = await this.todoService.createTodo(payload);
    return {
      status: HttpStatus.CREATED,
      message: 'Todo is added',
      data: result,
    };
  }

  //   get all todos
  @Get('all-todos')
  async getAllTodo() {
    const result = await this.todoService.allTodos();
    return {
      status: HttpStatus.OK,
      message: 'All todos are fetched',
      data: result,
    };
  }

  //   get single todo
  @Get(':id')
  async singleTodo(@Param('id') id: string) {
    const result = await this.todoService.getSingleTodo(id);
    return {
      status: HttpStatus.OK,
      message: 'Todo is fetched',
      data: result,
    };
  }

  //   edit todo
  @Patch(':id')
  async editTodo(@Param('id') id: string, @Body() payload: UpdateTodoDto) {
    const result = await this.todoService.editTodo(id, payload);
    return {
      status: HttpStatus.OK,
      message: 'Todo is updated',
      data: result,
    };
  }

  //   delete todo: soft delete
  @Delete(':id')
  async removeTodo(@Param('id') id: string) {
    const result = await this.todoService.removeTodo(id);
    return {
      status: HttpStatus.OK,
      message: 'Todo is deleted',
      data: result,
    };
  }
}
