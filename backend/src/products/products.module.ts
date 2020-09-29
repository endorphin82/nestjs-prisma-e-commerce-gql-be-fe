import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { ProductService } from './services/ProductService';
import { PrismaProductsRepository } from './repository/PrismaProductRepository';


@Module({
  imports: [PrismaModule],
  providers: [
    ProductService,
    { provide: 'IProductRepository', useClass: PrismaProductsRepository },
  ],
  exports: [ProductService],
})
export class ProductsModule { }
