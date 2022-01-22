import { CreateArticleInput } from './create-article.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class UpdateArticleInput extends PartialType(CreateArticleInput) {
  @Field(() => String)
  id: MongooseSchema.Types.ObjectId;

  @Field()
  name: string;

  @Field()
  content: string;
}
