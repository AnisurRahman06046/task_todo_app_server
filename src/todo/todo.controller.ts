import { Body, Controller, HttpStatus, Post } from '@nestjs/common';
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
}
