import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Create<%= singular(classify(name)) %>Input } from './dto/create-<%= lowercased(singular(classify(name))) %>.input';
import { Update<%= singular(classify(name)) %>Input } from './dto/update-<%= lowercased(singular(classify(name))) %>.input';
import { <%= singular(classify(name)) %>, ChannelDocument } from './entities/<%= lowercased(singular(classify(name))) %>.entity';
import { Model } from 'mongoose';

@Injectable()
export class <%= classify(name) %>Service {
  constructor(@InjectModel(<%= singular(classify(name)) %>.name) private <%= lowercased(singular(classify(name))) %>Modal: Model<ChannelDocument>){}

  async create(create<%= singular(classify(name)) %>Input: Create<%= singular(classify(name)) %>Input) {
    return await this.<%= lowercased(singular(classify(name))) %>Modal.create(create<%= singular(classify(name)) %>Input);
  }

  findAll() {
    return this.<%= lowercased(singular(classify(name))) %>Modal.find().exec();
  }

  findOne(id: number) {
    return this.<%= lowercased(singular(classify(name))) %>Modal.findOne({ _id: id }).exec();
  }

  update(id: number, update<%= singular(classify(name)) %>Input: Update<%= singular(classify(name)) %>Input) {
    return this.<%= lowercased(singular(classify(name))) %>Modal.updateOne({ _id: id },update<%= singular(classify(name)) %>Input)
  }

  async remove(id: number) {
    return await this.<%= lowercased(singular(classify(name))) %>Modal
    .findByIdAndRemove({ _id: id })
    .exec();
  }
}
