import { objectType } from '@nexus/schema';

export const Category = objectType({
  name: 'Category',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.products();
  },
});
