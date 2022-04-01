import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types, Schema as MongooseSchema } from 'mongoose';

export type BlogDocument = Blog & Document;

const { ObjectId } = Types;

@Schema()
export class Blog {
  @Prop({ required: true })
  image: string;

  @Prop({ required: true })
  imageThumb: string;

  @Prop({ required: require })
  imageAlt: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  title: true;

  @Prop()
  description: string;
}

export const BlogSchema = SchemaFactory.createForClass(Blog);
