import { Module } from '@nestjs/common';
import { <%= classify(name) %>Service } from './<%= lowercased(classify(name)) %>.service';
import { <%= classify(name) %>Resolver } from './<%= lowercased(classify(name)) %>.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { <%= singular(classify(name)) %>, <%= singular(classify(name)) %>Schema } from './entities/<%= lowercased(singular(classify(name))) %>.entity';

@Module({
  imports: [MongooseModule.forFeature([{ name: <%= singular(classify(name)) %>.name, schema: <%= singular(classify(name)) %>Schema }])],
  providers: [<%= classify(name) %>Resolver, <%= classify(name) %>Service]
})
export class <%= classify(name) %>Module {}
