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

  //   add todo
  @Post('add')
  async addTodo(@Body() payload: CreateTodoDto) {
    const result = await this.todoService.createTodo(payload);
    return {
      status: HttpStatus.CREATED,
      message: 'Todo is added',
      data: result,
    };
  }

  //   bulk add
  @Post('bulk-add')
  async bulkAdd(@Body() payload: CreateTodoDto[]) {
    const result = await this.todoService.bulkAdd(payload);
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

  //   all archived
  @Get('all-archived')
  async allArchived() {
    const result = await this.todoService.allArchived();
    return {
      status: HttpStatus.OK,
      message: 'Archived todos are fetched',
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

  // hard delete
  @Delete('delete/:id')
  async deleteTodo(@Param('id') id: string) {
    const result = await this.todoService.deleteTodo(id);
    return {
      status: HttpStatus.OK,
      message: 'Todo is permanently deleted',
      data: result,
    };
  }

  //   add to archive
  @Patch('archive/:id')
  async addToArchive(@Param('id') id: string) {
    const result = await this.todoService.addToArchive(id);
    return {
      status: HttpStatus.OK,
      message: 'Added to archive',
      data: result,
    };
  }

  //   restore from archive
  @Patch('restore/:id')
  async restore(@Param('id') id: string) {
    const result = await this.todoService.restore(id);
    return {
      status: HttpStatus.OK,
      message: 'Todo is restored',
      data: result,
    };
  }
}
