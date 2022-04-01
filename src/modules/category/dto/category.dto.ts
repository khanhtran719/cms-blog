import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class CategoryDto {
  @IsDefined({ message: 'Tiêu đề không được bỏ trống' })
  @IsNotEmpty({ message: 'Tiêu đề không được bỏ trống' })
  @IsString({ message: 'Tiêu đề phải là chuỗi' })
  readonly title: string;

  @IsDefined({ message: 'Tiêu đề không được bỏ trống' })
  @IsNotEmpty({ message: 'Tiêu đề không được bỏ trống' })
  @IsString({ message: 'Tiêu đề phải là chuỗi' })
  readonly description: string;
}
