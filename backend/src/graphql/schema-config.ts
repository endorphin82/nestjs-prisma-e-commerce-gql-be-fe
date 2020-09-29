import * as path from 'path';

import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema';
import { makeSchema } from '@nexus/schema';

import * as productsSchema from '../products/schema';

export const schema = makeSchema({
  types: { ...productsSchema },
  plugins: [nexusSchemaPrisma({
    experimentalCRUD: true,
    outputs: { typegen: path.join(__dirname, '../generated/nexus-prisma-typegen.ts') },
  })],
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'prismaClient',
      },
      {
        source: path.join(__dirname, 'schema-config.service.ts'),
        alias: 'Context',
      },
    ],
  },
  outputs: {
    schema: path.join(__dirname, '../generated/schema.graphql'),
    typegen: path.join(__dirname, '../generated/nexus.ts'),
  },
});
