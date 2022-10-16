import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { <%= classify(name) %>Service } from './<%= lowercased(classify(name)) %>.service';
import { <%= singular(classify(name)) %> } from './entities/<%= lowercased(singular(classify(name))) %>.entity';
import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= lowercased(singular(classify(name))) %>.input';
import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= lowercased(singular(classify(name))) %>.input';

@Resolver(() => <%= singular(classify(name)) %>)
export class <%= classify(name) %>Resolver {
  constructor(private readonly <%= lowercased(classify(name)) %>Service: <%= classify(name) %>Service) {}

  @Mutation(() => <%= singular(classify(name)) %>)
  create<%= singular(classify(name)) %>(@Args('create<%= singular(classify(name)) %>Input') create<%= singular(classify(name)) %>Input: Create<%= singular(classify(name)) %>Input) {
    return this.<%= lowercased(classify(name)) %>Service.create(create<%= singular(classify(name)) %>Input);
  }

  @Query(() => [<%= singular(classify(name)) %>], { name: '<%= lowercased(classify(name)) %>' })
  findAll() {
    return this.<%= lowercased(classify(name)) %>Service.findAll();
  }

  @Query(() => <%= singular(classify(name)) %>, { name: '<%= lowercased(singular(classify(name))) %>' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.<%= lowercased(classify(name)) %>Service.findOne(id);
  }

  @Mutation(() => <%= singular(classify(name)) %>)
  update<%= singular(classify(name)) %>(@Args('update<%= singular(classify(name)) %>Input') update<%= singular(classify(name)) %>Input: Update<%= singular(classify(name)) %>Input) {
    return this.<%= lowercased(classify(name)) %>Service.update(update<%= singular(classify(name)) %>Input.id, update<%= singular(classify(name)) %>Input);
  }

  @Mutation(() => <%= singular(classify(name)) %>)
  remove<%= singular(classify(name)) %>(@Args('id', { type: () => Int }) id: number) {
    return this.<%= lowercased(classify(name)) %>Service.remove(id);
  }
}
