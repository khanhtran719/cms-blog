import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type CategoryDocument = Category & Document;

@Schema()
export class Category {
  @Prop({ required: true })
  title: string;

  @Prop({ unique: true })
  slug: string;

  @Prop({ required: true })
  description: string;
}

export const CategorySchema = SchemaFactory.createForClass(Category);
