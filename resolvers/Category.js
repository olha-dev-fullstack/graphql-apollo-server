exports.Category = {
  products: ({ id: categoryId }, { filter }, { db }) => {
    let filteredCategoryProducts = db.products.filter(
      (product) => product.categoryId === categoryId
    );
    if (filter) {
      if (filter.onSale) {
        filteredCategoryProducts = filteredCategoryProducts.filter(
          (products) => {
            return products.onSale;
          }
        );
      }
    }
    return filteredCategoryProducts;
  },
};
