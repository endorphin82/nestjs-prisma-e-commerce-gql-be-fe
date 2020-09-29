import { Injectable } from '@nestjs/common';

import { PrismaService } from '../../prisma/prisma.service';
import { Category } from '../domain/Category';
import { CategoryMap } from '../mappers/CategoryMap';
import { ICategoryRepository } from './ICategoryRepository';

@Injectable()
export class PrismaCategoryRepository implements ICategoryRepository {
  constructor(
    private readonly prisma: PrismaService,
  ) {}

  async createCategory(category: Category): Promise<Category> {
    const persistenceCategory = CategoryMap.toPersistence(category);
    const createdCategory = await this.prisma.category.create({
      data: {
        ...persistenceCategory
      },
    });

    return CategoryMap.toDomain(createdCategory);
  }

  public async getAllCategories(): Promise<Category[]> {
    const categories = await this.prisma.category.findMany();

    return categories.map((category) => CategoryMap.toDomain(category));
  }

  // async getCategoryByTitle(title: string): Promise<Category | null> {
  //   const category = await this.prisma.category.findOne({ where: { title } });
  //   if (!category) return null;
  //
  //   return CategoryMap.toDomain(category);
  // }

  async getCategory(id: string): Promise<Category> {
    const category = await this.prisma.category.findOne({ where: { id } });
    if (!category) return null;

    return CategoryMap.toDomain(category);
  }
}

