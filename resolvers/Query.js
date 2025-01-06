const { categories, products } = require("../db");

exports.Query = {
    hello: () => {
      return ["Hello World", "my", "love"];
    },
    products: () => {
      return products;
    },
    product: (parent, args, context) => {
      return products.find((el) => el.id === args.id);
    },
    categories: () => categories,
    category: (parent, args, context) => {
      return categories.find((el) => (el.id = args.id));
    },
  }