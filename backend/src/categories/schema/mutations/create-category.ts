import { extendType } from '@nexus/schema';

export const CreateCategoryMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.crud.createOneCategory();
  },
});

