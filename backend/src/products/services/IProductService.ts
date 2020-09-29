import { Product } from '../domain/Product';

export interface IProductService {
  createProduct(data: CreateProductInterface): Promise<Product>;
  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product>;
}

export interface CreateProductInterface {
  title: string;
  description?: string | null;
  categoryId?: string | null;
  price: number
}
