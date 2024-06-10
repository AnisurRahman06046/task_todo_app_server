import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ToDo } from 'src/schemas/todo.schema';
import { CreateTodoDto, UpdateTodoDto } from './dtos/todo.dto';

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
    const result = await this.todoModel.aggregate([
      { $match: { isDeleted: false, archived: false } },
    ]);
    return result;
  }

  //   update todo
  async editTodo(id: string, payload: UpdateTodoDto) {
    const todo = await this.todoModel.findById(id);
    if (!todo)
      throw new HttpException('Todo is not found', HttpStatus.NOT_FOUND);
    const result = await this.todoModel.findByIdAndUpdate(id, payload, {
      new: true,
    });
    if (!result) throw new HttpException('Not found', HttpStatus.NOT_MODIFIED);
    return result;
  }

  //   delete todo : soft delete
  async removeTodo(id: string) {
    const result = await this.todoModel.findByIdAndUpdate(
      id,
      {
        isDeleted: true,
      },
      { new: true },
    );
    if (!result) throw new NotFoundException('Not found');
    return result;
  }

  //   archive : add the todo to archive
  async addToArchive(id: string) {
    const result = await this.todoModel.findByIdAndUpdate(
      id,
      { archived: true },
      { new: true },
    );
    if (!result)
      throw new HttpException('Failed to archive', HttpStatus.NOT_MODIFIED);
    return result;
  }

  //   all archived todo
  async allArchived() {
    const result = await this.todoModel.aggregate([
      { $match: { isDeleted: false, archived: true } },
    ]);
    return result;
  }

  //   restore archive
  async restore(id: string) {
    const todo = await this.todoModel.findOneAndUpdate(
      { _id: id, isDeleted: false, archived: true },
      { archived: false },
      { new: true },
    );
    if (!todo) throw new NotFoundException('Not found or cannot be restored');
    return todo;
  }
}
