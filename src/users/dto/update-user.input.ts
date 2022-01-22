import { CreateUserInput } from './create-user.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';
import { Schema as MongooseSchema } from 'mongoose';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => [String])
  id: MongooseSchema.Types.ObjectId;
}
