import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDo } from 'src/schemas/todo.schema';
import { CreateTodoDto } from './dtos/todo.dto';

@Injectable()
export class TodoService {
  constructor(@InjectModel(ToDo.name) private todoModel: Model<ToDo>) {}

  //   create todo
  async createTodo(payload: CreateTodoDto) {
    const result = await this.todoModel.create(payload);
    return result;
  }

  //   get single todo
  async getSingleTodo(id: string) {
    const result = await this.todoModel.findOne({ _id: id });
    if (!result) throw new HttpException('Not found', HttpStatus.NOT_FOUND);
    return result;
  }

  //   get all todos
  async allTodos() {
    const result = await this.todoModel.find();
    return result;
  }
}
