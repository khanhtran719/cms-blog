import { Module } from '@nestjs/common';
import { CategoryProvider } from './provider/category.provider';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeatureAsync([CategoryProvider])],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
