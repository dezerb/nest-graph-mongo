import { Field, InputType, Int } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class CreateUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  age: number;

  @Field()
  name: string;

  @Field()
  lastName: string;

  @Field(() => [String])
  articles: MongooseSchema.Types.ObjectId[];
}
