import { ArgsType, Field, Int } from '@nestjs/graphql';

@ArgsType()
export class GetUsersArgs {
  @Field({ nullable: true })
  name?: string;

  @Field({ nullable: true })
  lastName: string;

  @Field(() => Int, { nullable: true })
  age?: number;
}
