import { objectType } from '@nexus/schema';

// export const Product = objectType({
//   name: 'Product',
//   definition(t) {
//     t.id('id');
//     t.string('title');
//     t.string('description');
//     t.string('categoryId');
//     t.int('price');
//   },
// });
export const Product = objectType({
  name: 'Product',
  definition(t) {
    t.model.id();
    t.model.title();
    t.model.description();
    t.model.categoryId();
    t.model.price();
  },
});
