import { Create<%= singular(classify(name)) %>Input } from './create-<%= lowercased(singular(classify(name))) %>.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class Update<%= singular(classify(name)) %>Input extends PartialType(Create<%= singular(classify(name)) %>Input) {
  @Field(() => Int)
  id: number;
}
