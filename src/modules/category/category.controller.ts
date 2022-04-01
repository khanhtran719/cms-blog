import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoryDto } from './dto/category.dto';
import { CategoryService } from './category.service';
import { ParseObjectIdPipe } from 'src/common/pipes/parse_object_id.pipe';
import { ObjectId } from 'mongoose';
@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Get()
  @HttpCode(200)
  async getAllCategory() {
    return await this.categoryService.getAllCategory();
  }

  @Get('getById/:id')
  @HttpCode(200)
  async getByIdCategory(@Param('id', new ParseObjectIdPipe()) id: ObjectId) {
    return await this.categoryService.getByIdCategory(id);
  }

  @Post()
  @HttpCode(201)
  async createCategory(@Body() categoryDto: CategoryDto) {
    return await this.categoryService.createCategory(categoryDto);
  }

  @Put('updateById/:id')
  @HttpCode(200)
  async updateByIdCategory(
    @Param('id', new ParseObjectIdPipe()) id: ObjectId,
    @Body() categoryDto: CategoryDto,
  ) {
    return await this.categoryService.updateByIdCategory(id, categoryDto);
  }

  @Delete('deleteById/:id')
  @HttpCode(200)
  async deleteByIdCategory(@Param('id', new ParseObjectIdPipe()) id: ObjectId) {
    return await this.categoryService.deleteByIdCategory(id);
  }
}
