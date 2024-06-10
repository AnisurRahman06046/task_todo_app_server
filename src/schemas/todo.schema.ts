import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ timestamps: true })
export class ToDo {
  @Prop({ required: [true, 'Title is required'] })
  title: string;
  @Prop()
  description: string;
  @Prop({ default: false })
  completed: boolean;
  @Prop({ default: false })
  isDeleted: boolean;
  @Prop({ default: false })
  archived: boolean;
  @Prop({ default: false })
  restored: boolean;
}

export const todoSchema = SchemaFactory.createForClass(ToDo);
