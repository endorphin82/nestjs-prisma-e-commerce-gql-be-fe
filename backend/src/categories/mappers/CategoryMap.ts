import { Category as PersistenceCategory } from '@prisma/client';

import { UniqueEntityID } from '../../common/UniqueEntityID';

import { NexusGenFieldTypes } from '../../generated/nexus';
import { Category } from '../domain/Category';

export class CategoryMap {
  static toDomain(raw: PersistenceCategory): Category {
    const category = Category.create(
      {
        title: raw.title,

      },
      new UniqueEntityID(raw.id),
    );

    return category;
  }

  static toPersistence(category: Category): PersistenceCategory {
    return {
      id: category.id.toValue(),
      title: category.title!,
    };
  }

  static toNexus(category: Category): NexusGenFieldTypes['Category'] {

    return {
      id: category.id.toValue(),
      title: category.title,
      products: []
    };
  }
}
