import { Product } from '../domain/Product';

export interface IProductRepository {
  getAllProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product>;
  // getProductByTitle(title: string): Promise<Product | null>;
  createProduct(product: Product): Promise<Product>;
}
