import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class ToDo {
  @Prop({ required: [true, 'Title is required'] })
  title: string;

  @Prop({ required: [true, 'Description is required'] })
  description: string;

  @Prop({ default: false })
  isDeleted: boolean;
  @Prop({ default: false })
  archived: boolean;
}

export const todoSchema = SchemaFactory.createForClass(ToDo);
