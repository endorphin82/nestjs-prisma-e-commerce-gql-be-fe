import { Inject, Injectable } from '@nestjs/common';

import { CreateCategoryInterface, ICategoryService } from './ICategoryService';
import { Category } from '../domain/Category';
import { ICategoryRepository } from '../repository/ICategoryRepository';

@Injectable()
export class CategoryService implements ICategoryService {
  constructor(
    @Inject('ICategoryRepository') private readonly categoryRepository: ICategoryRepository,
  ) {
  }

  getCategory(id: string): Promise<Category> {
    const category = this.categoryRepository.getCategory(id);

    return category;
  }

  public createCategory({ title}: CreateCategoryInterface) {
    const category = Category.create({ title });

    return this.categoryRepository.createCategory(category);
  }

  public async getCategories(): Promise<Category[]> {
    return this.categoryRepository.getAllCategories();
  }
}
