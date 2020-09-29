import { extendType } from '@nexus/schema';

export const CategoryQuery = extendType({
  type: 'Query',
  definition: (t) => {
    t.crud.category()
    // t.field('products', {
    //   type: 'Product',
    //   list: true,
    //   args: { title: stringArg({ nullable: true }) },
    //   resolve: async (_, __, { productService }) => {
    //     const products = await productService.getProducts();
    //
    //     return products.map((product) => ProductMap.toNexus(product));
    //   },
    // });
  },
});
