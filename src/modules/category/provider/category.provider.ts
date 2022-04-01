import {
  CategorySchema,
  Category,
  CategoryDocument,
} from '../schema/category.schema';
import slugify from 'slugify';

export const CategoryProvider = {
  name: Category.name,
  useFactory: () => {
    const schema = CategorySchema;

    schema.pre<CategoryDocument>('save', function (next: any) {
      const category = this;

      if (category.title) {
        category.slug = slugify(category.title, {
          locale: 'vi',
          lower: true,
        });
      }
      next();
    });
    return schema;
  },
};
