import { Injectable } from '@nestjs/common';
import { GqlOptionsFactory, GqlModuleOptions } from '@nestjs/graphql';

import { IncomingMessage } from 'http';
import { PrismaService } from '../prisma/prisma.service';

import { schema } from './schema-config';

@Injectable()
export class GraphqlConfigService implements GqlOptionsFactory {
  constructor(
    private readonly prisma: PrismaService,
  ) {
  }

  async createGqlOptions(): Promise<GqlModuleOptions> {
    return {
      schema,
      debug: true,
      playground: true,
      context: { prisma: this.prisma },

      // context: async ({ req, connection }: { req: IncomingMessage; connection: any }): Promise<InitialContext> => {
      //   const context: InitialContext = {
      //     request: req,
      //     productService: this.productService,
      //     product: null,
      //   };
      //   return context;
      // },
    };
  }
}
//
// export interface InitialContext {
//   request: IncomingMessage;
//   productService: IProductService;
//   product: Product | null
//   // logger: Logger
// }

export interface Context {
}
