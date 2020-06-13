import { Int, InputType, Field } from "type-graphql";

@InputType()
export class MovieUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string;

  @Field(() => Int, { nullable: true })
  minutes?: number;
}
