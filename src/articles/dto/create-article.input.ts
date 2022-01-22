import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateArticleInput {
  @Field()
  name: string;

  @Field()
  content: string;
}
