import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { Cat } from '../graphql.schema';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  constructor(@InjectModel('Cat') private readonly catModel: Model<Cat>) {}

  async create(createCatDto: CreateCatDto): Promise<Cat> {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll(): Promise<Cat[]> {
    return await this.catModel.find().exec();
  }

  findOneById(id: number): Cat {
    return this.catModel.find(cat => cat.id === id);
  }
}