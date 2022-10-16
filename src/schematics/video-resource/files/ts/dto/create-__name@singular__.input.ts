import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class Create<%= singular(classify(name)) %>Input {
  @Field(() => String, { description: 'Example field (placeholder)' })
  title: string;
}
