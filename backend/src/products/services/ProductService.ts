import { Inject, Injectable } from '@nestjs/common';

import { IProductService, CreateProductInterface } from './IProductService';
import { Product } from '../domain/Product';
import { IProductRepository } from '../repository/IProductRepository';


@Injectable()
export class ProductService implements IProductService {
  constructor(
    @Inject('IProductRepository') private readonly productRepository: IProductRepository,
  ) {
  }

  getProduct(id: string): Promise<Product> {
    const product = this.productRepository.getProduct(id);

    return product;
  }

  public createProduct({ title, description, price, categoryId }: CreateProductInterface) {
    const product = Product.create({ title, description, price, categoryId });

    return this.productRepository.createProduct(product);
  }

  public async getProducts(): Promise<Product[]> {
    return this.productRepository.getAllProducts();
  }
}
