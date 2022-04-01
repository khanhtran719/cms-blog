import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CategoryDto } from './dto/category.dto';
import { CategoryDocument, Category } from './schema/category.schema';
import { ObjectId } from 'mongoose';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel(Category.name) private categoryModel: Model<CategoryDocument>,
  ) {}

  async createCategory(categoryDto: CategoryDto): Promise<Category> {
    const category = new this.categoryModel(categoryDto);
    return await category.save();
  }

  async getAllCategory(): Promise<Category[]> {
    return await this.categoryModel.find().exec();
  }

  async getByIdCategory(id: ObjectId): Promise<any> {
    return await this.categoryModel.findById(id);
  }

  async updateByIdCategory(id: ObjectId, categoryDto: CategoryDto) {
    const category = await this.categoryModel.findById(id);
    if (category) {
      return await this.categoryModel.findByIdAndUpdate(id, categoryDto, {
        new: true,
      });
    }
    throw new NotFoundException();
  }

  async deleteByIdCategory(id: ObjectId) {
    const category = await this.categoryModel.findById(id);
    if (category) {
      return await this.categoryModel.findByIdAndRemove(id);
    }
    throw new NotFoundException();
  }
}
