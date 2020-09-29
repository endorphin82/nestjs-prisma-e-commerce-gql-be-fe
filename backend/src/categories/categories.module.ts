import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';

import { CategoryService } from './services/CategoryService';
import { PrismaCategoryRepository } from './repository/PrismaCategoryRepository';


@Module({
  imports: [PrismaModule],
  providers: [
    CategoryService,
    { provide: 'ICategoryRepository', useClass: PrismaCategoryRepository },
  ],
  exports: [CategoryService],
})
export class CategoriesModule { }
