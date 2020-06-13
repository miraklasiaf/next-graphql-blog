import { Int, InputType, Field } from "type-graphql";

@InputType()
export class MovieInput {
  @Field()
  title: string;

  @Field(() => Int)
  minutes: number;
}
