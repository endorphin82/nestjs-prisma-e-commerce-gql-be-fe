import { Category } from '../domain/Category';

export interface ICategoryService {
  createCategory(data: CreateCategoryInterface): Promise<Category>;
  getCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category>;
}

export interface CreateCategoryInterface {
  title: string;
}
