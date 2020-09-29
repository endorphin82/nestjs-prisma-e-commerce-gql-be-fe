import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { ProductMap } from '../mappers/ProductMap';
import { Product } from '../domain/Product';
import { IProductRepository } from './IProductRepository';

@Injectable()
export class PrismaProductsRepository implements IProductRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createProduct(product: Product): Promise<Product> {
    const persistenceProduct = ProductMap.toPersistence(product);
    const createdProduct = await this.prisma.product.create({
      data: {
        ...persistenceProduct
      },
    });

    return ProductMap.toDomain(createdProduct);
  }

  public async getAllProducts(): Promise<Product[]> {
    const products = await this.prisma.product.findMany();

    return products.map((product) => ProductMap.toDomain(product));
  }

  // async getProductByTitle(title: string): Promise<Product | null> {
  //   const product = await this.prisma.product.findOne({ where: { title } });
  //   if (!product) return null;
  //
  //   return ProductMap.toDomain(product);
  // }

  async getProduct(id: string): Promise<Product> {
    const product = await this.prisma.product.findOne({ where: { id } });
    if (!product) return null;

    return ProductMap.toDomain(product);
  }
}

interface GetUsersArgs {
  name: string;
}
