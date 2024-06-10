import { Body, Controller, Get, HttpStatus, Param, Post } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dtos/todo.dto';

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
}
