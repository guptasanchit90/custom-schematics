import { ObjectType, Field } from '@nestjs/graphql';
import { Document } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type <%= classify(name) %>Document = <%= classify(name) %> & Document;

@Schema()
@ObjectType()
export class <%= classify(name) %> {
  @Prop()
  @Field(() => String, { description: '<%= classify(name) %> Title' })
  title: string;
}


export const <%= classify(name) %>Schema = SchemaFactory.createForClass(<%= classify(name) %>);
