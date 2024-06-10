import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateTodoDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;
}

export class UpdateTodoDto {
  @IsString()
  title?: string;
  @IsString()
  description?: string;
  @IsBoolean()
  completed?: boolean;
  @IsBoolean()
  archived: boolean;
  @IsBoolean()
  restored: boolean;
}
