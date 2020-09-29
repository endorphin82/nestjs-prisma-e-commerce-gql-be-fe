import { Category } from '../domain/Category';

export interface ICategoryRepository {
  getAllCategories(): Promise<Category[]>;
  getCategory(id: string): Promise<Category>;
  // getProductByTitle(title: string): Promise<Product | null>;
  createCategory(category: Category): Promise<Category>;
}
