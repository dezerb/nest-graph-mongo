import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';
import { Article } from '../../articles/entities/article.entity';

@ObjectType()
@Schema()
export class User {
  @Field(() => String)
  _id: MongooseSchema.Types.ObjectId;

  @Field({ nullable: true })
  @Prop()
  name?: string;

  @Field({ nullable: true })
  @Prop()
  lastName?: string;

  @Field(() => Int, { nullable: true })
  @Prop()
  age?: number;

  @Field(() => [Article], { nullable: true })
  @Prop({ type: [MongooseSchema.Types.ObjectId], ref: () => Article })
  articles: MongooseSchema.Types.ObjectId[] | Article[];
}

export type UserDocument = User & Document;
export const UserSchema = SchemaFactory.createForClass(User);
