import { Module } from '@nestjs/common';
import { PrismaModule } from '../prisma/prisma.module';
import { GraphqlConfigService } from '../graphql/schema-config.service';
import { ProductsModule } from '../products/products.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useClass: GraphqlConfigService,
      imports: [PrismaModule, ProductsModule],
    }),
    PrismaModule,
    ProductsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

