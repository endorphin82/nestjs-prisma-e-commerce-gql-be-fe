import { Module } from '@nestjs/common';

import { PrismaModule } from '../prisma/prisma.module';
import { ProductService } from './services/ProductService';
import { PrismaProductRepository } from './repository/PrismaProductRepository';


@Module({
  imports: [PrismaModule],
  providers: [
    ProductService,
    { provide: 'IProductRepository', useClass: PrismaProductRepository },
  ],
  exports: [ProductService],
})
export class ProductsModule { }
