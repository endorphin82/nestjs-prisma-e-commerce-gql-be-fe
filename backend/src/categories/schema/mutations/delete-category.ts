import { extendType } from '@nexus/schema';

export const DeleteCategoryMutation = extendType({
  type: 'Mutation',
  definition: (t) => {
    t.crud.deleteOneCategory()
  },
});

