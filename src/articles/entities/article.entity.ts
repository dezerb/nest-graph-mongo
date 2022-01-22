import { Field, ObjectType } from '@nestjs/graphql';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Article {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field({ nullable: true })
  @Prop()
  name: string;

  @Field({ nullable: true })
  @Prop()
  content?: string;
}

export type ArticleDocument = Article & Document;
export const ArticleSchema = SchemaFactory.createForClass(Article);
