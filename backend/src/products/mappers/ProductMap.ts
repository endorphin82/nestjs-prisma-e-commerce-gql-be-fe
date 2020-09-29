import { Product as PersistenceProduct } from '@prisma/client';

import { UniqueEntityID } from '../../common/UniqueEntityID';
import { Product } from '../domain/Product';
import { NexusGenFieldTypes } from '../../generated/nexus';


export class ProductMap {
  static toDomain(raw: PersistenceProduct): Product {
    const product = Product.create(
      {
        title: raw.title,
        description: raw.description,
        price: raw.price,
        categoryId: raw.categoryId
      },
      new UniqueEntityID(raw.id),
    );

    return product;
  }

  static toPersistence(product: Product): PersistenceProduct {
    return {
      id: product.id.toValue(),
      title: product.title!,
      description: product.description,
      price: product.price!,
      categoryId: product.categoryId
    };
  }

  static toNexus(product: Product): NexusGenFieldTypes['Product'] {
    return {
      id: product.id.toValue(),
      title: product.title,
      description: product.description,
      price: product.price,
      categoryId: product.categoryId
    };
  }
}
